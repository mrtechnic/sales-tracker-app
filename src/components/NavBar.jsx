import React from 'react';
import { Dropdown } from 'react-bootstrap'; // Import Bootstrap Dropdown for profile menu

const Navbar = () => {
  // Toggle full-screen mode
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark py-1"> {/* Reduced vertical padding */}
      <a className="navbar-brand d-flex align-items-center" href="/">
        <img
          src="https://via.placeholder.com/30"  // Placeholder for your profile logo
          alt="Profile"
          className="rounded-circle me-2" // Margin end for spacing
        />
        <h1 className="h6 text-info mb-0">Welcome, Onyi!</h1> {/* Reduced font size and removed margin */}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse" // Use data-bs-* for Bootstrap 5
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto"> {/* Changed to ms-auto for Bootstrap 5 */}
          {/* Full-Screen Toggle */}
          <li className="nav-item">
            <button
              className="btn btn-outline-secondary me-3" // Margin end for spacing
              onClick={toggleFullScreen}
            >
              <i className="fa fa-expand" aria-hidden="true"></i>
            </button>
          </li>

          {/* Profile Dropdown with Logout */}
          <li className="nav-item dropdown">
            <Dropdown>
              <Dropdown.Toggle
                className="btn btn-outline-secondary"
                id="dropdown-basic"
              >
                <i className="fa fa-user-circle" aria-hidden="true"></i>
              </Dropdown.Toggle>

              <Dropdown.Menu align="right">
                <Dropdown.Item href="#/profile">Profile</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/logout">
                  <i className="fa fa-sign-out" aria-hidden="true"></i> Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
