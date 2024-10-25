import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './viewinventory.css'; 
import Navbar from './NavBar';
import Sidebar from './SideBar';

const ViewInventory = () => {
  // State for inventory and branches
  const [selectedBranch, setSelectedBranch] = useState('Branch A');
  const [inventory, setInventory] = useState([
    {
      branch: 'Branch A',
      items: [
        { id: 1, productName: 'Product A', quantity: 100, location: 'Branch A' },
        { id: 2, productName: 'Product B', quantity: 50, location: 'Branch A' },
        { id: 3,  productName: 'Product C', quantity: 50, location: 'Branch A'  }
      ],
    },
    {
      branch: 'Branch B',
      items: [
        { id: 3, productName: 'Product B', quantity: 200, location: 'Branch B' },
        { id: 4, productName: 'Product C', quantity: 75, location: 'Branch B' },
        { id: 5, productName: 'Product A', quantity: 69, location: 'Branch B' }
      ],
    },
    {
      branch: 'Branch C',
      items: [
        { id: 5, productName: 'Product C', quantity: 150, location: 'Branch C' },
        { id: 6, productName: 'Product A', quantity: 80, location: 'Branch C' },
        { id: 7, productName: 'Product B', quantity: 90, location: 'Branch C' }
      ],
    },
  ]);

  const [showEditModal, setShowEditModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  // Get the inventory items for the selected branch
  const selectedBranchInventory = inventory.find(branch => branch.branch === selectedBranch)?.items || [];

  // Handle branch selection
  const handleBranchChange = (event) => {
    setSelectedBranch(event.target.value);
  };

  // Open edit modal with selected item
  const handleEdit = (item) => {
    setCurrentItem(item);
    setShowEditModal(true);
  };

  // Close edit modal
  const handleClose = () => {
    setShowEditModal(false);
    setCurrentItem(null);
  };

  // Update inventory item
  const handleSaveChanges = () => {
    const updatedInventory = inventory.map(branch => {
      if (branch.branch === selectedBranch) {
        const updatedItems = branch.items.map(item =>
          item.id === currentItem.id ? currentItem : item
        );
        return { ...branch, items: updatedItems };
      }
      return branch;
    });
    setInventory(updatedInventory);
    setShowEditModal(false);
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentItem({ ...currentItem, [name]: value });
  };

  // Delete inventory item
  const handleDelete = (id) => {
    const updatedInventory = inventory.map(branch => {
      if (branch.branch === selectedBranch) {
        const updatedItems = branch.items.filter(item => item.id !== id);
        return { ...branch, items: updatedItems };
      }
      return branch;
    });
    setInventory(updatedInventory);
  };

  return (
    <div>
      <Navbar />
      <div className="app-body">
        <Sidebar />
        <div className="content">
          <div className="view-inventory-container">
            <div className="inventory-list">
              <h2>INVENTORY</h2>
              <div className="branch-selector">
                <label htmlFor="branch"><strong> Branch: </strong></label>
                <select id="branch" value={selectedBranch} onChange={handleBranchChange}>
                  <option value="Branch A">Branch A</option>
                  <option value="Branch B">Branch B</option>
                  <option value="Branch C">Branch C</option>
                </select>
              </div>
            </div>
            {selectedBranchInventory.length === 0 ? (
              <p>No inventory items available for this branch.</p>
            ) : (
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Location</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedBranchInventory.map((item) => (
                    <tr key={item.id}>
                      <td>{item.productName}</td>
                      <td>{item.quantity}</td>
                      <td>{item.location}</td>
                      <td>
                        <div className="action-btn">
                        <button  className="edit-btn" onClick={() => handleEdit(item)}>Edit</button>
                        <button  className="del-btn" onClick={() => handleDelete(item.id)}>Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* Edit Modal */}
          {currentItem && (
            <Modal show={showEditModal} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Edit Inventory Item</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group controlId="formProductName">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="productName"
                      value={currentItem.productName}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formQuantity">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                      type="number"
                      name="quantity"
                      value={currentItem.quantity}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formLocation">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                      type="text"
                      name="location"
                      value={currentItem.location}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleSaveChanges}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewInventory;
