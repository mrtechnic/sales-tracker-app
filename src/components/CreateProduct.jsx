import React, { useState } from 'react';
// import Navbar from './NavBar';
import Sidebar from './SideBar';
import './createproduct.css'; 

const CreateProduct = () => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Created:", { productName, price, description });
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div className="app-body">
        <Sidebar />
        <div className="content">
    <div className="create-product-container">
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
            <div className="product-name"><strong><h2>CREATE PRODUCT</h2></strong></div>
          <label>Product Name:</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn-product">Create Product</button>
      </form>
    </div>
    </div>
    </div>
    </div>
  );
};

export default CreateProduct;
