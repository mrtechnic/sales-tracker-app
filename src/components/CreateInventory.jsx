import React, { useState } from 'react';
import Navbar from './NavBar';
import Sidebar from './SideBar';
import './CreateInventory.css'; // Add a CSS file for styling

const CreateInventory = () => {
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Inventory Item Created:", { productName, quantity, location });
  };

  return (
    <div>
      <Navbar />
      <div className="app-body">
        <Sidebar />
        <div className="content">
    <div className="create-inventory-container">
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <div className="inventory-title"><strong><h2>CREATE INVENTORY ITEM</h2></strong></div>
          <label>Product Name:</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Create Inventory Item</button>
      </form>
    </div>
    </div>
    </div>
    </div>
  );
};

export default CreateInventory;
