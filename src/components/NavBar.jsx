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
        <h1 className="h6" style={{ color: 'grey', margin: 0 }}><strong>Welcome, Back!</strong></h1> {/* Changed color to grey */}

        {/* Right side - Fullscreen and Profile Dropdown */}
        <div className="d-flex align-items-center" style={{ padding: '5px' }}>
          {/* Full-Screen Toggle */}
          <button
            className="btn btn-outline-secondary"
            onClick={toggleFullScreen}
            style={{
              margin: 0,           // Remove all margins
              padding: '10px',     // Keep padding for a clean look
              border: 'none',      // Remove border
              backgroundColor: 'transparent', // Ensure the background is transparent
              cursor: 'pointer',    // Show pointer on hover
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'} // Light background on hover
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'} // Revert on mouse out
          >
            <i className="fas fa-expand" id='toggle-screen' aria-hidden="true"></i> {/* Fullscreen icon */}
          </button>

          {/* Profile Dropdown with Logout */}
          <Dropdown>
            <Dropdown.Toggle
              className="btn btn-outline-secondary"
              id="dropdown-basic"
              style={{
                margin: 0,           // Remove all margins
                padding: '10px',     // Keep padding for a clean look
                border: 'none',      // Remove border
                backgroundColor: 'transparent', // Ensure the background is transparent
                cursor: 'pointer',    // Show pointer on hover
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'} // Light background on hover
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'} // Revert on mouse out
            >
              <i className="fas fa-user" aria-hidden="true"></i> {/* Updated profile icon */}
            </Dropdown.Toggle>

            <Dropdown.Menu align="end"> {/* Align dropdown to the right */}
              <Dropdown.Item href="#/profile">Profile</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="/">
                <i className="fas fa-sign-out-alt" aria-hidden="true"></i> Logout {/* Updated logout icon */}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
