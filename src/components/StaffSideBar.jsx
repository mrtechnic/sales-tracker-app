import React, { useState } from 'react';
import './staffsidebar.css';

const StaffSidebar = ({ onSelectCategory, selectedCategory }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  // Function to handle both category selection and dropdown toggle
  const handleCategoryClick = (category) => {
    if (openDropdown === category) {
      // Close the dropdown if it's open
      setOpenDropdown(null);
      onSelectCategory(null);  // Deselect the category
    } else {
      // Open the dropdown and select the category
      setOpenDropdown(category);
      onSelectCategory(category);
    }
  };

  return (
    <div className="sidebar-bg">
      <div className="sidebar-heading">
        <a href="/StaffDashboard" className="text-decoration-none mb-4">
          <h4 className="fs-4 text-white" style={{ padding: '0 15px', margin: '10px' }}><strong> DASHBOARD </strong></h4>
        </a>
      </div>
      <div className="dash-items">
        <ul className="nav nav-pills flex-column mb-auto">

          {/* Sales Order */}
          <li className="side-item mb-2">
            <a
              href="#"
              className={`side-link d-flex justify-content-between ${selectedCategory === "SalesOrder" ? "active bg-light text-dark" : "text-white"}`}
              onClick={() => handleCategoryClick("SalesOrder")}
            >
              <div><i className="bi bi-file-earmark-text me-2"></i> Sales Records</div>
              <i className={`bi ${openDropdown === "SalesOrder" ? "bi-caret-up-fill" : "bi-caret-down-fill"}`}></i>
            </a>
            <div className={`dropdown-content ${openDropdown === "SalesOrder" ? "open" : ""}`}>
              <ul className="nav flex-column ms-3">
                <li className="side-item">
                  <a href="/StaffRecordPage" className={`side-link ${selectedCategory === "CreateSalesOrder" ? "bg-light text-dark" : "text-white"}`} onClick={() => onSelectCategory("CreateSalesOrder")}>
                    <i className="bi bi-pencil-square me-2"></i> Create Sales Record
                  </a>
                </li>
                <li className="side-item">
                  <a href="/ViewSalesRecord" className={`side-link ${selectedCategory === "ViewSalesOrders" ? "bg-light text-dark" : "text-white"}`} onClick={() => onSelectCategory("ViewSalesOrders")}>
                    <i className="bi bi-eye-fill me-2"></i> View Sales Record
                  </a>
                </li>
              </ul>
            </div>
          </li>

          {/* Inventory */}
          <li className="side-item mb-2">
            <a
              href="#"
              className={`side-link d-flex justify-content-between ${selectedCategory === "Inventory" ? "active bg-light text-dark" : "text-white"}`}
              onClick={() => handleCategoryClick("Inventory")}
            >
              <div><i className="bi bi-clipboard me-2"></i> Inventory</div>
              <i className={`bi ${openDropdown === "Inventory" ? "bi-caret-up-fill" : "bi-caret-down-fill"}`}></i>
            </a>
            <div className={`dropdown-content ${openDropdown === "Inventory" ? "open" : ""}`}>
              <ul className="nav flex-column ms-3">
                <li className="side-item">
                  <a href="/CreateInventoryStaff" className={`side-link ${selectedCategory === "ViewMyInventory" ? "bg-light text-dark" : "text-white"}`} onClick={() => onSelectCategory("ViewMyInventory")}>
                    <i className="bi bi-archive-fill me-2"></i> Create Inventory
                  </a>
                </li>
                <li className="side-item">
                  <a href="/StaffViewInventory" className={`side-link ${selectedCategory === "ViewMyInventory" ? "bg-light text-dark" : "text-white"}`} onClick={() => onSelectCategory("ViewMyInventory")}>
                    <i className="bi bi-boxes me-2"></i> View My Inventory
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StaffSidebar;