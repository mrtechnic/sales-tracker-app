import React from 'react';
import { Dropdown } from 'react-bootstrap'; 

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
    <nav className="navbar navbar-expand-lg navbar-dark bg-light py-1"> 
      <div className="container-fluid d-flex justify-content-between align-items-center"> 
        {/* Left side - Welcome message */}
        <h1 className="h6" style={{ color: '#e02f2f', margin: 0 }}><strong>Welcome, Back!</strong></h1> 

        {/* Right side - Fullscreen and Profile Dropdown */}
        <div className="d-flex align-items-center" style={{ padding: '5px' }}>
          {/* Full-Screen Toggle */}
          <button
            className="btn btn-outline-secondary"
            onClick={toggleFullScreen}
            style={{
              margin: 0,          
              padding: '10px',    
              border: 'none',     
              backgroundColor: 'transparent', 
              cursor: 'pointer',    
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e02f2f'} 
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'} 
          >
            <i className="fas fa-expand" id='toggle-screen' aria-hidden="true" style={{color: '#e02f2f'}}></i> {/* Fullscreen icon */}
          </button>

          {/* Profile Dropdown with Logout */}
          <Dropdown>
            <Dropdown.Toggle
              className="btn btn-outline-secondary"
              id="dropdown-basic"
              style={{
                margin: 0,           
                padding: '10px',     
                border: 'none',      
                backgroundColor: 'transparent', 
                color: 'white',
                cursor: 'pointer',    
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e02f2f'} 
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'} 
            >
              <i className="fas fa-user" aria-hidden="true" style={{color: '#e02f2f'}}></i>
            </Dropdown.Toggle>

            <Dropdown.Menu align="end"> 
              <Dropdown.Item href="#/profile" >Profile</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="/">
                <i className="fas fa-sign-out-alt" aria-hidden="true"></i> Logout 
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
