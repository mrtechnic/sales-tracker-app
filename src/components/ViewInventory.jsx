import React from 'react';
import './viewinventory.css'; 

const ViewInventory = () => {
  // Sample static data for inventory items
  const inventory = [
    { id: 1, productName: 'Product 1', quantity: 100, location: 'Warehouse A' },
    { id: 2, productName: 'Product 2', quantity: 50, location: 'Warehouse B' },
    { id: 3, productName: 'Product 3', quantity: 200, location: 'Warehouse C' },
  ];

  return (
    <div className="view-inventory-container">
      <div className='inventory-list'><h2>Inventory List</h2></div>
      {inventory.length === 0 ? (
        <p>No inventory items available.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item) => (
              <tr key={item.id}>
                <td>{item.productName}</td>
                <td>{item.quantity}</td>
                <td>{item.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewInventory;
