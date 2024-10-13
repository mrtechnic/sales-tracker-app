import React from 'react';
import './Sidebar.css'; // Import the custom CSS

const Sidebar = ({ onSelectCategory, selectedCategory }) => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3" style={{ width: '200px', height: '100%', backgroundColor: 'grey' }}>
      <a href="/superAdminDash" style={{ textDecoration: 'none' }}> {/* No underline */}
        <h3 className="fs-4" style={{ color: "#fff" }}><strong>Dashboard</strong></h3>
      </a>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a 
            href="#products" 
            className={`nav-link ${selectedCategory === "Products" ? "active" : ""}`}
            onClick={() => onSelectCategory("Products")}
          >
            Products
          </a>
        </li>
        <li className="nav-item">
          <a 
            href="#staff" 
            className={`nav-link ${selectedCategory === "Staff" ? "active" : ""}`} 
            onClick={() => onSelectCategory("Staff")}
          >
            Staff
          </a>
        </li>
        <li className="nav-item">
          <a 
            href="#inventory" 
            className={`nav-link ${selectedCategory === "Inventory" ? "active" : ""}`} 
            onClick={() => onSelectCategory("Inventory")}
          >
            Inventory
          </a>
        </li>
        <li className="nav-item">
          <a 
            href="#analytics" 
            className={`nav-link ${selectedCategory === "Analytics" ? "active" : ""}`} 
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
