// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="d-flex justify-content-between align-items-center p-3 bg-light border-bottom">
      <h1 className="h4">Welcome Onyi!</h1>
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="#profile">Profile</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#settings">Create Staff</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#settings">Delete Staff</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#logout">Logout</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
