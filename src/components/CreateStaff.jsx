import React, { useState } from 'react';
// import Navbar from './NavBar';
import Sidebar from './SideBar';
import './CreateStaff.css'; // Add a CSS file for styling

const CreateStaff = () => {
  const [staffName, setStaffName] = useState('');
  const [department, setDepartment] = useState('');
  const [branch, setBranch] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Staff Created:", { staffName, department, branch, email, address, phoneNumber });
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div className="app-body">
        <Sidebar />
        <div className="content">
    <div className="create-staff-container">
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <div className="staff-title"><strong><h2>CREATE STAFF</h2></strong></div>
          <label>Staff Name:</label>
          <input
            type="text"
            value={staffName}
            onChange={(e) => setStaffName(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Department:</label>
          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Branch:</label>
          <input
            type="text"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn-staff">Create Staff</button>
      </form>
    </div>
    </div>
    </div>
    </div>
  );
};

export default CreateStaff;
