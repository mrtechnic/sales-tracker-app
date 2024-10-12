// src/components/Sidebar.js
import React from 'react';

const Sidebar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: '280px', height: '100vh' }}>
      <h2 className="fs-4">Sidebar</h2>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="#dashboard" className="nav-link active" aria-current="page">
            Dashboard
          </a>
        </li>
        <li>
          <a href="#sales" className="nav-link text-dark">
            Sales
          </a>
        </li>
        <li>
          <a href="#reports" className="nav-link text-dark">
            Reports
          </a>
        </li>
        <li>
          <a href="#settings" className="nav-link text-dark">
            Settings
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
