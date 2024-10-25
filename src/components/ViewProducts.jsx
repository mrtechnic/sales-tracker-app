import React from 'react';
import Navbar from './NavBar';
import Sidebar from './SideBar';
import './viewproducts.css'; 

const ViewProducts = () => {
  // Sample static data
  const products = [
    { id: 1, name: 'Product 1', price: '$10.00', description: 'Description of Product 1' },
    { id: 2, name: 'Product 2', price: '$20.00', description: 'Description of Product 2' },
    { id: 3, name: 'Product 3', price: '$30.00', description: 'Description of Product 3' },
  ];

  return (
    <div>
      <Navbar />
      <div className="app-body">
        <Sidebar />
        <div className="content">
    <div className="view-products-container">
      <div className='products-list'><h2>PRODUCTS</h2></div>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </div>
    </div>
    </div>
  );
};

export default ViewProducts;
