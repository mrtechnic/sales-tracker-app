import React, { useState } from 'react';
import './staffviewinventory.css'; 
import StaffSidebar from './StaffSideBar';

const StaffViewInventory = () => {
  const [inventory] = useState([
    {
      branch: 'Branch A',
      items: [
        { id: 1, productName: 'Product A', quantity: 100, location: 'Branch A' },
        { id: 2, productName: 'Product B', quantity: 50, location: 'Branch A' },
        { id: 3, productName: 'Product C', quantity: 50, location: 'Branch A' },
        { id: 4, productName: 'Product D', quantity: 120, location: 'Branch A' },
      ],
    },
  ]);

  const currentBranch = inventory[0]; // assuming you are displaying for Branch A

  return (
    <div>
      <div className="app-body">
        <StaffSidebar />
          <div className="staff-view-inventory-container">
            <h2><strong>INVENTORY - {currentBranch.branch}</strong></h2>
            {currentBranch.items.length === 0 ? (
              <p>No inventory items available for this branch.</p>
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
                  {currentBranch.items.map((item) => (
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
        </div>
      </div>
  );
};

export default StaffViewInventory;
