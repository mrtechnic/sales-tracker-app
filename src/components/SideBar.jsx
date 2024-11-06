import React, { useState } from "react";
import "./sidebar.css";

const Sidebar = ({ onSelectCategory, selectedCategory }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  
  const handleCategoryClick = (category) => {
    if (openDropdown === category) {
      setOpenDropdown(null);
      onSelectCategory(null); 
    } else {
      setOpenDropdown(category);
      onSelectCategory(category);
    }
  };

  return (
    <div
      className="parent-sidebar"
      style={{ width: "200px", backgroundColor: "#052e16" }}
    >
      <div className="admin-sidebar">
        <div>
          <div className="dash">
            <a href="/superAdminDash" className="text-decoration-none mb-4">
              <h4
                className="fs-4 text-white"
                style={{ padding: "0 15px", margin: "10px" }}
              >
                <strong> DASHBOARD </strong>
              </h4>
            </a>
          </div>
          <div className="dash-items">
            <ul className="nav nav-pills flex-column mb-auto">
              {/* Sales Records */}
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link d-flex justify-content-between ${
                    selectedCategory === "SalesRecords"
                      ? "active bg-light text-dark"
                      : "text-white"
                  }`}
                  onClick={() => handleCategoryClick("SalesRecords")}
                >
                  <div>
                    <i className="bi bi-clipboard-data me-2"></i> Sales Records
                  </div>
                  <i
                    className={`bi ${
                      openDropdown === "SalesRecords"
                        ? "bi-caret-up-fill"
                        : "bi-caret-down-fill"
                    }`}
                  ></i>
                </a>
                <div
                  className={`dropdown-content ${
                    openDropdown === "SalesRecords" ? "open" : ""
                  }`}
                >
                  <ul className="nav flex-column ms-3">
                    <li className="nav-item">
                      <a
                        href="/CreateSalesRecord"
                        className={`nav-link ${
                          selectedCategory === "CreateSalesRecord"
                            ? "bg-light text-dark"
                            : "text-white"
                        }`}
                        onClick={() => onSelectCategory("CreateSalesRecord")}
                      >
                        <i className="bi bi-pencil-square me-2"></i> Create
                        Sales Record
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="/ViewSalesRecords"
                        className={`nav-link ${
                          selectedCategory === "ViewSalesRecords"
                            ? "bg-light text-dark"
                            : "text-white"
                        }`}
                        onClick={() => onSelectCategory("ViewSalesRecords")}
                      >
                        <i className="bi bi-eye-fill me-2"></i> View Sales
                        Records
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Products with dropdown */}
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link d-flex justify-content-between ${
                    selectedCategory === "Products"
                      ? "active bg-light text-dark"
                      : "text-white"
                  }`}
                  onClick={() => handleCategoryClick("Products")}
                >
                  <div>
                    <i className="bi bi-box-seam me-2"></i> Products
                  </div>
                  <i
                    className={`bi ${
                      openDropdown === "Products"
                        ? "bi-caret-up-fill"
                        : "bi-caret-down-fill"
                    }`}
                  ></i>
                </a>
                <div
                  className={`dropdown-content ${
                    openDropdown === "Products" ? "open" : ""
                  }`}
                >
                  <ul className="nav flex-column ms-3">
                    <li className="nav-item">
                      <a
                        href="/CreateProduct"
                        className={`nav-link ${
                          selectedCategory === "Createproduct"
                            ? "bg-light text-dark"
                            : "text-white"
                        }`}
                        onClick={() => onSelectCategory("Createproduct")}
                      >
                        <i className="bi bi-basket-fill me-2"></i> Create
                        Product
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="/ViewProducts"
                        className={`nav-link ${
                          selectedCategory === "Viewproducts"
                            ? "bg-light text-dark"
                            : "text-white"
                        }`}
                        onClick={() => onSelectCategory("Viewproducts")}
                      >
                        <i className="bi bi-bag-fill me-2"></i> View Products
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Branch with dropdown */}
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link d-flex justify-content-between ${
                    selectedCategory === "Branch"
                      ? "active bg-light text-dark"
                      : "text-white"
                  }`}
                  onClick={() => handleCategoryClick("Branch")}
                >
                  <div>
                    <i className="bi bi-building me-2"></i> Branch
                  </div>
                  <i
                    className={`bi ${
                      openDropdown === "Branch"
                        ? "bi-caret-up-fill"
                        : "bi-caret-down-fill"
                    }`}
                  ></i>
                </a>
                <div
                  className={`dropdown-content ${
                    openDropdown === "Branch" ? "open" : ""
                  }`}
                >
                  <ul className="nav flex-column ms-3">
                    <li className="nav-item">
                      <a
                        href="/CreateBranch"
                        className={`nav-link ${
                          selectedCategory === "Createbranch"
                            ? "bg-light text-dark"
                            : "text-white"
                        }`}
                        onClick={() => onSelectCategory("Createbranch")}
                      >
                        <i className="bi bi-building me-2"></i> Create Branch
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="/ViewBranches"
                        className={`nav-link ${
                          selectedCategory === "Viewbranches"
                            ? "bg-light text-dark"
                            : "text-white"
                        }`}
                        onClick={() => onSelectCategory("Viewbranches")}
                      >
                        <i className="bi bi-shop me-2"></i> View Branches
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Inventory with dropdown */}
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link d-flex justify-content-between ${
                    selectedCategory === "Inventory"
                      ? "active bg-light text-dark"
                      : "text-white"
                  }`}
                  onClick={() => handleCategoryClick("Inventory")}
                >
                  <div>
                    <i className="bi bi-clipboard me-2"></i> Inventory
                  </div>
                  <i
                    className={`bi ${
                      openDropdown === "Inventory"
                        ? "bi-caret-up-fill"
                        : "bi-caret-down-fill"
                    }`}
                  ></i>
                </a>
                <div
                  className={`dropdown-content ${
                    openDropdown === "Inventory" ? "open" : ""
                  }`}
                >
                  <ul className="nav flex-column ms-3">
                    <li className="nav-item">
                      <a
                        href="/CreateInventory"
                        className={`nav-link ${
                          selectedCategory === "Createinventory"
                            ? "bg-light text-dark"
                            : "text-white"
                        }`}
                        onClick={() => onSelectCategory("Createinventory")}
                      >
                        <i className="bi bi-archive-fill me-2"></i> Create
                        Inventory
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="/ViewInventory"
                        className={`nav-link ${
                          selectedCategory === "Viewinventory"
                            ? "bg-light text-dark"
                            : "text-white"
                        }`}
                        onClick={() => onSelectCategory("Viewinventory")}
                      >
                        <i className="bi bi-boxes me-2"></i> View Inventory
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Staffs with dropdown */}
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link d-flex justify-content-between ${
                    selectedCategory === "Staffs"
                      ? "active bg-light text-dark"
                      : "text-white"
                  }`}
                  onClick={() => handleCategoryClick("Staffs")}
                >
                  <div>
                    <i className="bi bi-person-square me-2"></i> Staffs
                  </div>
                  <i
                    className={`bi ${
                      openDropdown === "Staffs"
                        ? "bi-caret-up-fill"
                        : "bi-caret-down-fill"
                    }`}
                  ></i>
                </a>
                <div
                  className={`dropdown-content ${
                    openDropdown === "Staffs" ? "open" : ""
                  }`}
                >
                  <ul className="nav flex-column ms-3">
                    <li className="nav-item">
                      <a
                        href="/CreateStaff"
                        className={`nav-link ${
                          selectedCategory === "Createstaff"
                            ? "bg-light text-dark"
                            : "text-white"
                        }`}
                        onClick={() => onSelectCategory("Createstaff")}
                      >
                        <i className="bi bi-pie-chart-fill me-2"></i> Create
                        Staff
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="/ViewStaffs"
                        className={`nav-link ${
                          selectedCategory === "Viewstaffs"
                            ? "bg-light text-dark"
                            : "text-white"
                        }`}
                        onClick={() => onSelectCategory("Viewstaffs")}
                      >
                        <i className="bi bi-bar-chart-line-fill me-2"></i> View
                        Staffs
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Analytics */}
              <li className="nav-item mb-2">
                <a
                  href="/Analytics"
                  className={`nav-link d-flex justify-content-between ${
                    selectedCategory === "Analytics"
                      ? "active bg-light text-dark"
                      : "text-white"
                  }`}
                  onClick={() => handleCategoryClick("Analytics")}
                >
                  <div>
                    <i className="bi bi-graph-up-arrow me-2"></i> Analytics
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <button
            className="btn btn-outline-secondary toggle-button"
            style={{
              padding: "10px",
              border: "none",
              backgroundColor: "transparent",
              cursor: "pointer",
              transition: "transform 0.2s", // Transition for smooth scaling
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.2)")
            } // Scale on hover
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")} // Back to original size
            onClick={() => (window.location.href = "/")} // Replace with actual logout logic
          >
            <i
              className="fas fa-sign-out-alt"
              aria-hidden="true"
              style={{ color: "#fff" }}
            ></i>
            <strong style={{ color: "#fff" }}> Sign Out</strong>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
