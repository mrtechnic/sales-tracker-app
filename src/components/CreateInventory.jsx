import React, { useState } from 'react';
import Navbar from './NavBar';
import Sidebar from './SideBar';
import './createinventory.css'; 

const CreateInventory = () => {
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [branch, setBranch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Inventory Item Created:", { productName, quantity, branch });
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
          <div className="inventory-title"><h2><strong>CREATE INVENTORY</strong></h2></div>
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
          <label>Branch:</label>
          <input
            type="text"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn-inventory">Create Inventory Item</button>
      </form>
    </div>
    </div>
    </div>
    </div>
  );
};

export default CreateInventory;
