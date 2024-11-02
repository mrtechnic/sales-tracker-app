import React, { useState } from 'react';
import { Modal, Button, Form, Pagination } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import './viewinventory.css'; 
import Navbar from './NavBar';
import Sidebar from './SideBar';

const ViewInventory = () => {
  const [selectedBranch, setSelectedBranch] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [inventory, setInventory] = useState([
    {
      branch: 'Branch A',
      items: [
        { id: 1, productName: 'Product A', quantity: 100, location: 'Branch A' },
        { id: 2, productName: 'Product B', quantity: 50, location: 'Branch A' },
        { id: 3, productName: 'Product C', quantity: 50, location: 'Branch A' },
        { id: 8, productName: 'Product D', quantity: 120, location: 'Branch A' },
      ],
    },
    {
      branch: 'Branch B',
      items: [
        { id: 4, productName: 'Product E', quantity: 200, location: 'Branch B' },
        { id: 5, productName: 'Product F', quantity: 75, location: 'Branch B' },
        { id: 6, productName: 'Product G', quantity: 69, location: 'Branch B' },
      ],
    },
    {
      branch: 'Branch C',
      items: [
        { id: 7, productName: 'Product H', quantity: 150, location: 'Branch C' },
        { id: 8, productName: 'Product I', quantity: 80, location: 'Branch C' },
        { id: 9, productName: 'Product J', quantity: 90, location: 'Branch C' },
      ],
    },
  ]);

  const [showEditModal, setShowEditModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const filteredInventory = selectedBranch === 'All'
    ? inventory.flatMap(branch => branch.items)
    : inventory.find(branch => branch.branch === selectedBranch)?.items || [];

  const paginatedInventory = filteredInventory.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredInventory.length / itemsPerPage);

  const handleBranchChange = (event) => {
    setSelectedBranch(event.target.value);
    setCurrentPage(1);
  };

  const handleEdit = (item) => {
    setCurrentItem(item);
    setShowEditModal(true);
  };

  const handleClose = () => {
    setShowEditModal(false);
    setCurrentItem(null);
  };

  const handleSaveChanges = () => {
    const updatedInventory = inventory.map(branch => {
      if (branch.branch === selectedBranch || selectedBranch === 'All') {
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentItem({ ...currentItem, [name]: value });
  };

  const handleDelete = (id) => {
    const updatedInventory = inventory.map(branch => {
      if (branch.branch === selectedBranch || selectedBranch === 'All') {
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
              <h2><strong>INVENTORY</strong></h2>
              <div className="branch-selector">
                <label htmlFor="branch"><strong>Branch:</strong></label>
                <select id="branch" value={selectedBranch} onChange={handleBranchChange}>
                  <option value="All">All Branches</option>
                  <option value="Branch A">Branch A</option>
                  <option value="Branch B">Branch B</option>
                  <option value="Branch C">Branch C</option>
                </select>
              </div>
            </div>
            {paginatedInventory.length === 0 ? (
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
                  {paginatedInventory.map((item) => (
                    <tr key={item.id}>
                      <td>{item.productName}</td>
                      <td>{item.quantity}</td>
                      <td>{item.location}</td>
                      <td>
                        <div className="action-btn">
                          <button className="edit-btn" onClick={() => handleEdit(item)}>
                            <FontAwesomeIcon icon={faEdit} />
                          </button>
                          <button className="del-btn" onClick={() => handleDelete(item.id)}>
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            <Pagination>
              <Pagination.Prev onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))} disabled={currentPage === 1} />
              {[...Array(totalPages)].map((_, index) => (
                <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => setCurrentPage(index + 1)} style={{ backgroundColor: '#052e16', color: 'white' }}>
                  {index + 1}
                </Pagination.Item>
              ))}
              <Pagination.Next onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))} disabled={currentPage === totalPages} />
            </Pagination>
          </div>

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
                <Button variant="secondary" onClick={handleClose} style={{backgroundColor: '#004b2f'}}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleSaveChanges} style={{backgroundColor: '#004b2f'}}>
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
