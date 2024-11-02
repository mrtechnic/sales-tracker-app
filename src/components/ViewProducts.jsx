import React, { useState } from 'react';
import Navbar from './NavBar';
import Sidebar from './SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import './viewproducts.css';

const ViewProducts = () => {
  // Sample static data for products and inventory
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: '$10.00', description: 'Description of Product 1' },
    { id: 2, name: 'Product 2', price: '$20.00', description: 'Description of Product 2' },
    { id: 3, name: 'Product 3', price: '$30.00', description: 'Description of Product 3' },
  ]);

  const [inventory] = useState([
    { productId: 1, quantityAvailable: 100 },
    { productId: 2, quantityAvailable: 50 },
    { productId: 3, quantityAvailable: 25 },
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null);
  const [productFormData, setProductFormData] = useState({ name: '', price: '', description: '' });

  // Function to get remaining quantity for a specific product
  const getRemainingQuantity = (productId) => {
    const productInventory = inventory.find(item => item.productId === productId);
    return productInventory ? productInventory.quantityAvailable : 0;
  };

  // Handle view action to toggle inventory display
  const handleView = (productId) => {
    setSelectedProduct((prev) => (prev === productId ? null : productId));
  };

  // Handle edit action
  const handleEdit = (product) => {
    setEditingProduct(product.id);
    setProductFormData({ name: product.name, price: product.price, description: product.description });
  };

  // Function to handle product form changes
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setProductFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle product update
  const handleUpdate = (id) => {
    setProducts((prev) => prev.map(product => (product.id === id ? { ...product, ...productFormData } : product)));
    setEditingProduct(null);
    setProductFormData({ name: '', price: '', description: '' });
  };

  // Handle delete action
  const handleDelete = (id) => {
    setProducts((prev) => prev.filter(product => product.id !== id));
    // Reset selected product if deleted
    if (selectedProduct === id) setSelectedProduct(null);
  };

  // Function to get inventory details for the selected product
  const getInventoryDetails = () => {
    return inventory.find(item => item.productId === selectedProduct);
  };

  return (
    <div>
      <Navbar />
      <div className="app-body">
        <Sidebar />
        <div className="content">
          <div className="view-products-container">
            <h2><strong>PRODUCTS</strong></h2>
            <input
              type="text"
              placeholder="Search products..."
              style={{ marginTop: '20px', border: 'solid 2px' }}
            />
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Description</th>
                  <th>Remaining Inventory</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>{editingProduct === product.id ? (
                      <input
                        type="text"
                        name="name"
                        value={productFormData.name}
                        onChange={handleFormChange}
                      />
                    ) : (
                      product.name
                    )}</td>
                    <td>{editingProduct === product.id ? (
                      <input
                        type="text"
                        name="price"
                        value={productFormData.price}
                        onChange={handleFormChange}
                      />
                    ) : (
                      product.price
                    )}</td>
                    <td>{editingProduct === product.id ? (
                      <input
                        type="text"
                        name="description"
                        value={productFormData.description}
                        onChange={handleFormChange}
                      />
                    ) : (
                      product.description
                    )}</td>
                    <td>{getRemainingQuantity(product.id)}</td>
                    <td>
                      <span 
                        style={{ marginRight: '15px', cursor: 'pointer', color: '#052e16' }}
                        onClick={() => handleView(product.id)}
                      >
                        <FontAwesomeIcon icon={faEye} title="View" />
                      </span>
                      <span 
                        style={{ marginRight: '15px', cursor: 'pointer', color: '#052e16' }}
                        onClick={() => handleEdit(product)}
                      >
                        <FontAwesomeIcon icon={faEdit} title="Edit" />
                      </span>
                      <span 
                        style={{ cursor: 'pointer', color: '#052e16' }}
                        onClick={() => handleDelete(product.id)}
                      >
                        <FontAwesomeIcon icon={faTrash} title="Delete" />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Inventory details section */}
            {selectedProduct && (
              <div className="inventory-details">
                <h3>Inventory Details for {products.find(p => p.id === selectedProduct).name}</h3>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Product ID</th>
                      <th>Quantity Available</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{selectedProduct}</td>
                      <td>{getInventoryDetails().quantityAvailable}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {/* Update product details after editing */}
            {editingProduct && (
              <div className="edit-product-container">
                <h3>Edit Product</h3>
                <button onClick={() => handleUpdate(editingProduct)}>Update</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProducts;
