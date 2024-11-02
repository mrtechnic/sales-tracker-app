import React, { useState } from 'react';
import Navbar from './NavBar';
import Sidebar from './SideBar';
import './viewbranches.css'; 

const ViewBranches = () => {
  // Sample static data for branches
  const [branches, setBranches] = useState([
    { id: 1, name: 'Branch A', location: 'Location 1', manager: 'Manager 1' },
    { id: 2, name: 'Branch B', location: 'Location 2', manager: 'Manager 2' },
    { id: 3, name: 'Branch C', location: 'Location 3', manager: 'Manager 3' },
  ]);

  const [editingBranch, setEditingBranch] = useState(null);
  const [branchFormData, setBranchFormData] = useState({ name: '', location: '', manager: '' });

  const handleEdit = (branch) => {
    setEditingBranch(branch.id);
    setBranchFormData({ name: branch.name, location: branch.location, manager: branch.manager });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setBranchFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = (id) => {
    setBranches((prev) => prev.map(branch => (branch.id === id ? { ...branch, ...branchFormData } : branch)));
    setEditingBranch(null);
  };

  const handleDelete = (id) => {
    setBranches((prev) => prev.filter(branch => branch.id !== id));
  };

  return (
    <div>
      <Navbar />
      <div className="app-body">
        <Sidebar />
        <div className="content">
          <div className="view-branches-container">
            <div className='branches-list'><h2><strong>BRANCHES</strong></h2></div>
            {branches.length === 0 ? (
              <p>No branches available.</p>
            ) : (
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Branch Name</th>
                    <th>Location</th>
                    <th>Manager</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {branches.map((branch) => (
                    <tr key={branch.id}>
                      <td>{editingBranch === branch.id ? (
                        <input
                          type="text"
                          name="name"
                          value={branchFormData.name}
                          onChange={handleFormChange}
                        />
                      ) : (
                        branch.name
                      )}</td>
                      <td>{editingBranch === branch.id ? (
                        <input
                          type="text"
                          name="location"
                          value={branchFormData.location}
                          onChange={handleFormChange}
                        />
                      ) : (
                        branch.location
                      )}</td>
                      <td>{editingBranch === branch.id ? (
                        <input
                          type="text"
                          name="manager"
                          value={branchFormData.manager}
                          onChange={handleFormChange}
                        />
                      ) : (
                        branch.manager
                      )}</td>
                      <td>
                        <div className="action-btn">
                          {editingBranch === branch.id ? (
                            <button className="edit-btn" onClick={() => handleUpdate(branch.id)}>Save</button>
                          ) : (
                            <button className="edit-btn" onClick={() => handleEdit(branch)}>Edit</button>
                          )}
                          <button className="del-btn" onClick={() => handleDelete(branch.id)}>Delete</button>
                        </div>
                      </td>
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

export default ViewBranches;
