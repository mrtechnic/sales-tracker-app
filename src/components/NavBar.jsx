import React from 'react';

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
        <h1 className="h6" style={{ color: '#004b2f', margin: 0 }}>
          <strong>Welcome, Back!</strong>
        </h1> 

        {/* Right side - Fullscreen and Logout */}
        <div className="d-flex align-items-center" style={{ padding: '5px' }}>
          {/* Full-Screen Toggle */}
          <button
            className="btn btn-outline-secondary toggle-button"
            onClick={toggleFullScreen}
            style={{
              margin: '0 10px 0 0',  
              padding: '10px',    
              border: 'none',     
              backgroundColor: 'transparent', 
              cursor: 'pointer',
              transition: 'transform 0.2s',  // Transition for smooth scaling
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}  // Scale on hover
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}    // Back to original size
          >
            <i className="fas fa-expand" aria-hidden="true" style={{color: '#004b2f'}}></i>
          </button>

          {/* Logout Button */}
          <button
            className="btn btn-outline-secondary toggle-button"
            style={{
              padding: '10px',     
              border: 'none',      
              backgroundColor: 'transparent', 
              cursor: 'pointer',
              transition: 'transform 0.2s',  // Transition for smooth scaling
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}  // Scale on hover
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}    // Back to original size
            onClick={() => window.location.href = '/'}  // Replace with actual logout logic
          >
            <i className="fas fa-sign-out-alt" aria-hidden="true" style={{color: '#004b2f'}}></i>
            <strong style={{ color: '#004b2f' }}> Sign Out</strong>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
