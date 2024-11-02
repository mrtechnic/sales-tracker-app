import React, { useState } from 'react';
import './viewstaffs.css'; 
import Navbar from './NavBar';
import Sidebar from './SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const ViewStaffs = () => {
  const staffs = [
    { 
      id: 1, 
      staffName: 'John Doe', 
      department: 'Sales', 
      branch: 'Branch A', 
      email: 'john@example.com', 
      address: '123 Street, City', 
      phoneNumber: '123-456-7890',
      salesOrders: [
        { orderId: 101, product: 'Product A', date: '2024-01-15', amount: 100 },
        { orderId: 102, product: 'Product B', date: '2024-01-20', amount: 150 }
      ]
    },
    { 
      id: 2, 
      staffName: 'Jane Smith', 
      department: 'HR', 
      branch: 'Branch B', 
      email: 'jane@example.com', 
      address: '456 Avenue, City', 
      phoneNumber: '987-654-3210',
      salesOrders: [
        { orderId: 201, product: 'Product C', date: '2024-02-05', amount: 200 }
      ]
    },
    { 
      id: 3, 
      staffName: 'Mark Johnson', 
      department: 'IT', 
      branch: 'Branch C', 
      email: 'mark@example.com', 
      address: '789 Boulevard, City', 
      phoneNumber: '555-555-5555',
      salesOrders: [
        { orderId: 301, product: 'Product D', date: '2024-03-10', amount: 300 },
        { orderId: 302, product: 'Product E', date: '2024-03-15', amount: 350 }
      ]
    }
  ];

  const [selectedStaffId, setSelectedStaffId] = useState(null);

  const handleViewOrders = (staffId) => {
    setSelectedStaffId(selectedStaffId === staffId ? null : staffId);
  };

  return (
    <div>
      <Navbar />
      <div className="app-body">
        <Sidebar />
        <div className="content">
          <div className="view-staffs-container">
            <div className="staffs-list"><h2><strong>STAFFS</strong></h2></div>
            
            {staffs.length === 0 ? (
              <p>No staffs available.</p>
            ) : (
              <>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Staff Name</th>
                      <th>Department</th>
                      <th>Branch</th>
                      <th>Email</th>
                      <th>Address</th>
                      <th>Phone Number</th>
                      <th>Actions</th>
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
                        <td>
                          <FontAwesomeIcon 
                            icon={faEye} 
                            onClick={() => handleViewOrders(staff.id)} 
                            className="icon-button"
                          />
                          <FontAwesomeIcon 
                            icon={faEdit} 
                            className="icon-button" 
                          />
                          <FontAwesomeIcon 
                            icon={faTrash} 
                            className="icon-button" 
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {selectedStaffId && (
                  <div>
                    <h3>Sales Orders for Selected Staff:</h3>
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Order ID</th>
                          <th>Product</th>
                          <th>Date</th>
                          <th>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {staffs.find(staff => staff.id === selectedStaffId).salesOrders.map(order => (
                          <tr key={order.orderId}>
                            <td>{order.orderId}</td>
                            <td>{order.product}</td>
                            <td>{order.date}</td>
                            <td>${order.amount}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewStaffs;
