import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faSave, faTrash, faEye } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './SideBar';
import './viewbranches.css';

const ViewBranches = () => {
  
  const [branches, setBranches] = useState([
    { id: 1, name: 'Branch A', location: 'Location 1', manager: 'Manager 1' },
    { id: 2, name: 'Branch B', location: 'Location 2', manager: 'Manager 2' },
    { id: 3, name: 'Branch C', location: 'Location 3', manager: 'Manager 3' },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const branchesPerPage = 3;
  const totalPages = Math.ceil(branches.length / branchesPerPage);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const paginatedBranches = branches.slice(
    (currentPage - 1) * branchesPerPage,
    currentPage * branchesPerPage
  )

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

  const handleSaveChanges = (id) => {
    setBranches((prev) =>
      prev.map(branch => (branch.id === id ? { ...branch, ...branchFormData } : branch))
    );
    setEditingBranch(null);
  };

  const handleDelete = (id) => {
    setBranches((prev) => prev.filter(branch => branch.id !== id));
  };

  return (
    <div>
      <div className="app-body">
        <Sidebar />
        <div className="view-branches-container">
          <div className="branches-list">
            <h2><strong>BRANCHES</strong></h2>
          </div>
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
                {paginatedBranches.map((branch) => (
                  <tr key={branch.id}>
                    <td>
                      {editingBranch === branch.id ? (
                        <input
                          type="text"
                          name="name"
                          value={branchFormData.name}
                          onChange={handleFormChange}
                        />
                      ) : (
                        branch.name
                      )}
                    </td>
                    <td>
                      {editingBranch === branch.id ? (
                        <input
                          type="text"
                          name="location"
                          value={branchFormData.location}
                          onChange={handleFormChange}
                        />
                      ) : (
                        branch.location
                      )}
                    </td>
                    <td>
                      {editingBranch === branch.id ? (
                        <input
                          type="text"
                          name="manager"
                          value={branchFormData.manager}
                          onChange={handleFormChange}
                        />
                      ) : (
                        branch.manager
                      )}
                    </td>
                    <td>
                      <div className="action-btn">
                      <button className="view-btn">
                          <FontAwesomeIcon icon={faEye} />
                        </button>
                        {editingBranch === branch.id ? (
                          <button className="save-btn" onClick={() => handleSaveChanges(branch.id)}>
                            Save
                          </button>
                        ) : (
                          <button className="edit-btn" onClick={() => handleEdit(branch)}>
                            <FontAwesomeIcon icon={faEdit} />
                          </button>
                        )}
                        <button className="del-btn" onClick={() => handleDelete(branch.id)}>
                          <FontAwesomeIcon icon={faTrash} />
                        </button>

                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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

export default ViewBranches;
