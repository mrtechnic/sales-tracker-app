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
    <nav className="navbar navbar-expand-lg navbar-dark bg-light py-1"> {/* Navbar background and padding */}
      <div className="container-fluid d-flex justify-content-between align-items-center"> {/* Align items correctly */}
        {/* Left side - Welcome message */}
        <h1 className="h6 text-info mb-0">Welcome, Onyi!</h1>

        {/* Right side - Fullscreen and Profile Dropdown */}
        <div className="d-flex align-items-center">
          {/* Full-Screen Toggle */}
          <button
            className="btn btn-outline-secondary me-3" // Margin end for spacing
            onClick={toggleFullScreen}
          >
            <i className="fa fa-expand" aria-hidden="true"></i>
          </button>

          {/* Profile Dropdown with Logout */}
          <Dropdown>
            <Dropdown.Toggle
              className="btn btn-outline-secondary"
              id="dropdown-basic"
            >
              <i className="fa fa-user-circle" aria-hidden="true"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu align="end"> {/* Align dropdown to the right */}
              <Dropdown.Item href="#/profile">Profile</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="/">
                <i className="fa fa-sign-out" aria-hidden="true"></i> Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
