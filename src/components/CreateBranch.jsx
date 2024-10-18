import React, { useState } from 'react';
import './CreateBranch.css'; // Add a CSS file for styling

const CreateBranch = () => {
  const [branchName, setBranchName] = useState('');
  const [location, setLocation] = useState('');
  const [manager, setManager] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Branch Created:", { branchName, location, manager });
  };

  return (
    <div className="create-branch-container">
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <div className="branch-name"><strong><h2>CREATE BRANCH</h2></strong></div>
          <label>Branch Name:</label>
          <input
            type="text"
            value={branchName}
            onChange={(e) => setBranchName(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Manager:</label>
          <input
            type="text"
            value={manager}
            onChange={(e) => setManager(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Create Branch</button>
      </form>
    </div>
  );
};

export default CreateBranch;
