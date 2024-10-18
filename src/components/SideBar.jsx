import React, { useState, useRef } from 'react';
import './sidebar.css';


const Sidebar = ({ onSelectCategory, selectedCategory }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  // Function to toggle dropdowns
  const toggleDropdown = (category) => {
    setOpenDropdown(openDropdown === category ? null : category);
  };

  return (
    <div className="d-flex flex-column flex-shrink-0 p-3" style={{ width: '250px', height: '100vh', backgroundColor: '#e02f2f' }}>
      <div className="dash">
        <a href="/superAdminDash" className="text-decoration-none mb-4">
          <h4 className="fs-4 text-white" style={{ padding: '0 15px', margin: '10px' }}><strong>DASHBOARD</strong></h4>
        </a>
      </div>
      <div className="dash-items">
        <ul className="nav nav-pills flex-column mb-auto">

          {/* Products with dropdown */}
          <li className="nav-item mb-2">
            <a
              href="#products"
              className={`nav-link d-flex justify-content-between ${selectedCategory === "Products" ? "active bg-light text-dark" : "text-white"}`}
              onClick={() => toggleDropdown("Products")}
            >
              <div><i className="bi bi-box-seam me-2"></i> Products</div>
              <i className={`bi ${openDropdown === "Products" ? "bi-caret-up-fill" : "bi-caret-down-fill"}`}></i>
            </a>
            <div className={`dropdown-content ${openDropdown === "Products" ? "open" : ""}`}>
              <ul className="nav flex-column ms-3">
                <li className="nav-item">
                  <a href="/CreateProduct" className="nav-link text-white" onClick={() => onSelectCategory("Createproduct")}>
                    <i className="bi bi-basket-fill me-2"></i> Create Product
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/ViewProducts" className="nav-link text-white" onClick={() => onSelectCategory("Viewproducts")}>
                    <i className="bi bi-bag-fill me-2"></i> View Products
                  </a>
                </li>
              </ul>
            </div>
          </li>

          {/* Branch with dropdown */}
          <li className="nav-item mb-2">
            <a
              href="#branch"
              className={`nav-link d-flex justify-content-between ${selectedCategory === "Branch" ? "active bg-light text-dark" : "text-white"}`}
              onClick={() => toggleDropdown("Branch")}
            >
              <div><i className="bi bi-building me-2"></i> Branch</div>
              <i className={`bi ${openDropdown === "Branch" ? "bi-caret-up-fill" : "bi-caret-down-fill"}`}></i>
            </a>
            <div className={`dropdown-content ${openDropdown === "Branch" ? "open" : ""}`}>
              <ul className="nav flex-column ms-3">
                <li className="nav-item">
                  <a href="/CreateBranch" className="nav-link text-white" onClick={() => onSelectCategory("Createbranch")}>
                    <i className="bi bi-building me-2"></i> Create Branch
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/ViewBranches" className="nav-link text-white" onClick={() => onSelectCategory("Viewbranches")}>
                    <i className="bi bi-shop me-2"></i> View Branches
                  </a>
                </li>
              </ul>
            </div>
          </li>

          {/* Inventory with dropdown */}
          <li className="nav-item mb-2">
            <a
              href="#inventory"
              className={`nav-link d-flex justify-content-between ${selectedCategory === "Inventory" ? "active bg-light text-dark" : "text-white"}`}
              onClick={() => toggleDropdown("Inventory")}
            >
              <div><i className="bi bi-clipboard me-2"></i> Inventory</div>
              <i className={`bi ${openDropdown === "Inventory" ? "bi-caret-up-fill" : "bi-caret-down-fill"}`}></i>
            </a>
            <div className={`dropdown-content ${openDropdown === "Inventory" ? "open" : ""}`}>
              <ul className="nav flex-column ms-3">
              <li className="nav-item">
                  <a href="/CreateInventory" className="nav-link text-white" onClick={() => onSelectCategory("Createinventory")}>
                    <i className="bi bi-archive-fill me-2"></i> Create Inventory
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/ViewInventory" className="nav-link text-white" onClick={() => onSelectCategory("Viewinventory")}>
                    <i className="bi bi-boxes me-2"></i> View Inventory
                  </a>
                </li>
              </ul>
            </div>
          </li>

          {/* Staffs with dropdown */}
          <li className="nav-item mb-2">
            <a
              href="#staffs"
              className={`nav-link d-flex justify-content-between ${selectedCategory === "Staffs" ? "active bg-light text-dark" : "text-white"}`}
              onClick={() => toggleDropdown("Staffs")}
            >
              <div><i className="bi bi-person-square me-2"></i> Staffs</div>
              <i className={`bi ${openDropdown === "Staffs" ? "bi-caret-up-fill" : "bi-caret-down-fill"}`}></i>
            </a>
            <div className={`dropdown-content ${openDropdown === "Staffs" ? "open" : ""}`}>
              <ul className="nav flex-column ms-3">
                <li className="nav-item">
                  <a href="/CreateStaff" className="nav-link text-white" onClick={() => onSelectCategory("Createstaff")}>
                    <i className="bi bi-pie-chart-fill me-2"></i> Create Staff
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/ViewStaffs" className="nav-link text-white" onClick={() => onSelectCategory("Viewstaffs")}>
                    <i className="bi bi-bar-chart-line-fill me-2"></i> View Staffs
                  </a>
                </li>
              </ul>
            </div>
          </li>

          {/* Analytics */}
          <li className="nav-item mb-2">
            <a
              href="#analytics"
              className={`nav-link d-flex justify-content-between ${selectedCategory === "Analytics" ? "active bg-light text-dark" : "text-white"}`}
              onClick={() => toggleDropdown("Analytics")}
            >
              <div><i className="bi bi-graph-up-arrow me-2"></i> Analytics</div>
              <i className={`bi ${openDropdown === "Analytics" ? "bi-caret-up-fill" : "bi-caret-down-fill"}`}></i>
            </a>
            <div className={`dropdown-content ${openDropdown === "Analytics" ? "open" : ""}`}>
              <ul className="nav flex-column ms-3">
                <li className="nav-item">
                  <a href="#subitem1" className="nav-link text-white" onClick={() => onSelectCategory("Subitem1")}>
                    <i className="bi bi-bar-chart-line-fill me-2"></i> Subitem 1
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#subitem2" className="nav-link text-white" onClick={() => onSelectCategory("Subitem2")}>
                    <i className="bi bi-pie-chart-fill me-2"></i> Subitem 2
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

export default Sidebar;
