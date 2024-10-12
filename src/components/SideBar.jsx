// src/components/SideBar.js
import React from 'react';

const Sidebar = ({ onSelectCategory }) => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-dark" style={{ width: '280px', height: '100%' }}>
      <h2 className="fs-4" style={{color: "#1a78ab"}} >Dashboard</h2>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a 
            href="#products" 
            className="nav-link active" 
            onClick={() => onSelectCategory("Products")}
          >
            Products
          </a>
        </li>
        <li className="nav-item">
          <a 
            href="#staff" 
            className="nav-link" 
            onClick={() => onSelectCategory("Staff")}
          >
            Staff
          </a>
        </li>
        <li className="nav-item">
          <a 
            href="#inventory" 
            className="nav-link" 
            onClick={() => onSelectCategory("Inventory")}
          >
            Inventory
          </a>
        </li>
        <li className="nav-item">
          <a 
            href="#analytics" 
            className="nav-link" 
            onClick={() => onSelectCategory("Analytics")}
          >
            Analytics
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
