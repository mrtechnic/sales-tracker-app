import React, { useState } from 'react';
import './viewstaffs.css'; 
import Sidebar from './SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const ViewStaffs = () => {
  const [staffs, setStaffs] = useState([
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
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const staffsPerPage = 3;
  const totalPages = Math.ceil(staffs.length / staffsPerPage);

  const handlePageClick = (page) => {
  setCurrentPage(page);
  };

  const paginatedStaffs = staffs.slice(
    (currentPage -1) * staffsPerPage,
    currentPage * staffsPerPage
  )



  const [selectedStaffId, setSelectedStaffId] = useState(null);
  const [editableStaff, setEditableStaff] = useState(null);

  const toggleViewOrders = (staffId) => {
    setSelectedStaffId(selectedStaffId === staffId ? null : staffId);
  };

  const handleEditClick = (staff) => {
    setEditableStaff(staff);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableStaff((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveChanges = () => {
    setStaffs((prev) =>
      prev.map((staff) => (staff.id === editableStaff.id ? editableStaff : staff))
    );
    setEditableStaff(null); // Close the edit mode
  };

  return (
    <div>
      <div className="app-body">
        <Sidebar />
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
                  {paginatedStaffs.map((staff) => (
                    <tr key={staff.id}>
                      {editableStaff && editableStaff.id === staff.id ? (
                        <>
                          <td>
                            <input 
                              type="text" 
                              name="staffName" 
                              value={editableStaff.staffName} 
                              onChange={handleInputChange} 
                            />
                          </td>
                          <td>
                            <input 
                              type="text" 
                              name="department" 
                              value={editableStaff.department} 
                              onChange={handleInputChange} 
                            />
                          </td>
                          <td>
                            <input 
                              type="text" 
                              name="branch" 
                              value={editableStaff.branch} 
                              onChange={handleInputChange} 
                            />
                          </td>
                          <td>
                            <input 
                              type="email" 
                              name="email" 
                              value={editableStaff.email} 
                              onChange={handleInputChange} 
                            />
                          </td>
                          <td>
                            <input 
                              type="text" 
                              name="address" 
                              value={editableStaff.address} 
                              onChange={handleInputChange} 
                            />
                          </td>
                          <td>
                            <input 
                              type="text" 
                              name="phoneNumber" 
                              value={editableStaff.phoneNumber} 
                              onChange={handleInputChange} 
                            />
                          </td>
                          <td>
                            <button onClick={handleSaveChanges}>Save</button>
                          </td>
                        </>
                      ) : (
                        <>
                          <td>{staff.staffName}</td>
                          <td>{staff.department}</td>
                          <td>{staff.branch}</td>
                          <td>{staff.email}</td>
                          <td>{staff.address}</td>
                          <td>{staff.phoneNumber}</td>
                          <td>
                            <div className="action-btn">
                              <button className="view-btn" onClick={() => toggleViewOrders(staff.id)}>
                                <FontAwesomeIcon icon={faEye} />
                              </button>
                              <button className="edit-btn" onClick={() => handleEditClick(staff)}>
                                <FontAwesomeIcon icon={faEdit} />
                              </button>
                              <button className="del-btn">
                                <FontAwesomeIcon icon={faTrash} />
                              </button>
                            </div>
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
              {selectedStaffId && (
                <div className="orders-section">
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
          <div className="pagination-container-g">
            <button
            className="pagination-btn-g"
            onClick={() => handlePageClick(Math.max(currentPage - 1, 1))}
            disabled={currentPage === 1}
            >
              Previous
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
              key={index + 1}
              className={`pagination-btn-g ${currentPage === index + 1 ? 'active' : ''}`}
              onClick={() => handlePageClick(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button
            className="pagination-btn-g"
            onClick={() => handlePageClick(Math.min(currentPage + 1, totalPages))}
            disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewStaffs;
