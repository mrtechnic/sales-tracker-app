import React from 'react';
import './viewbranches.css'; 

const ViewBranches = () => {
  // Sample static data for branches
  const branches = [
    { id: 1, name: 'Branch 1', location: 'Location 1', manager: 'Manager 1' },
    { id: 2, name: 'Branch 2', location: 'Location 2', manager: 'Manager 2' },
    { id: 3, name: 'Branch 3', location: 'Location 3', manager: 'Manager 3' },
  ];

  return (
    <div className="view-branches-container">
      <div className='branches-list'><h2>Branches List</h2></div>
      {branches.length === 0 ? (
        <p>No branches available.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Branch Name</th>
              <th>Location</th>
              <th>Manager</th>
            </tr>
          </thead>
          <tbody>
            {branches.map((branch) => (
              <tr key={branch.id}>
                <td>{branch.name}</td>
                <td>{branch.location}</td>
                <td>{branch.manager}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewBranches;
