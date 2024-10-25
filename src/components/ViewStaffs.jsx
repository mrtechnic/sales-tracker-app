import React from 'react';
import './viewstaffs.css'; 
import Navbar from './NavBar';
import Sidebar from './SideBar';

const ViewStaffs = () => {
  // Sample static data for staff members
  const staffs = [
    { 
      id: 1, 
      staffName: 'John Doe', 
      department: 'Sales', 
      branch: 'Branch A', 
      email: 'john@example.com', 
      address: '123 Street, City', 
      phoneNumber: '123-456-7890' 
    },
    { 
      id: 2, 
      staffName: 'Jane Smith', 
      department: 'HR', 
      branch: 'Branch B', 
      email: 'jane@example.com', 
      address: '456 Avenue, City', 
      phoneNumber: '987-654-3210' 
    },
    { 
      id: 3, 
      staffName: 'Mark Johnson', 
      department: 'IT', 
      branch: 'Branch C', 
      email: 'mark@example.com', 
      address: '789 Boulevard, City', 
      phoneNumber: '555-555-5555' 
    }
  ];

  return (
    <div>
      <Navbar />
      <div className="app-body">
        <Sidebar />
        <div className="content">
    <div className="view-staffs-container">
      <div className="staffs-list"><h2>STAFFS</h2></div>
      {staffs.length === 0 ? (
        <p>No staffs available.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Staff Name</th>
              <th>Department</th>
              <th>Branch</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {staffs.map((staff) => (
              <tr key={staff.id}>
                <td>{staff.staffName}</td>
                <td>{staff.department}</td>
                <td>{staff.branch}</td>
                <td>{staff.email}</td>
                <td>{staff.address}</td>
                <td>{staff.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </div>
    </div>
    </div>
  );
};

export default ViewStaffs;
