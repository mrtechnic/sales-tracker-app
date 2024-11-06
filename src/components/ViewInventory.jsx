import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./SideBar";
import "./viewinventory.css";

const ViewInventory = () => {
  const [selectedBranch, setSelectedBranch] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [inventory, setInventory] = useState([
    {
      branch: "Branch A",
      items: [
        {
          id: 1,
          productName: "Product A",
          quantity: 100,
          location: "Branch A",
        },
        { id: 2, productName: "Product B", quantity: 50, location: "Branch A" },
        { id: 3, productName: "Product C", quantity: 50, location: "Branch A" },
        {
          id: 8,
          productName: "Product D",
          quantity: 120,
          location: "Branch A",
        },
      ],
    },
    {
      branch: "Branch B",
      items: [
        {
          id: 4,
          productName: "Product E",
          quantity: 200,
          location: "Branch B",
        },
        { id: 5, productName: "Product F", quantity: 75, location: "Branch B" },
        { id: 6, productName: "Product G", quantity: 69, location: "Branch B" },
      ],
    },
    {
      branch: "Branch C",
      items: [
        {
          id: 7,
          productName: "Product H",
          quantity: 150,
          location: "Branch C",
        },
        { id: 8, productName: "Product I", quantity: 80, location: "Branch C" },
        { id: 9, productName: "Product J", quantity: 90, location: "Branch C" },
      ],
    },
  ]);

  const filteredInventory =
    selectedBranch === "All"
      ? inventory.flatMap((branch) => branch.items)
      : inventory.find((branch) => branch.branch === selectedBranch)?.items ||
        [];

  const paginatedInventory = filteredInventory.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredInventory.length / itemsPerPage);

  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    productName: "",
    quantity: "",
    location: "",
  });

  const handleBranchChange = (event) => {
    setSelectedBranch(event.target.value);
    setCurrentPage(1);
  };

  const handleEdit = (item) => {
    setEditingItem(item.id);
    setFormData({
      productName: item.productName,
      quantity: item.quantity,
      location: item.location,
    });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveChanges = (id) => {
    const updatedInventory = inventory.map((branch) => {
      if (branch.branch === selectedBranch || selectedBranch === "All") {
        const updatedItems = branch.items.map((item) =>
          item.id === id ? { ...item, ...formData } : item
        );
        return { ...branch, items: updatedItems };
      }
      return branch;
    });
    setInventory(updatedInventory);
    setEditingItem(null);
  };

  const handleDelete = (id) => {
    const updatedInventory = inventory.map((branch) => {
      if (branch.branch === selectedBranch || selectedBranch === "All") {
        const updatedItems = branch.items.filter((item) => item.id !== id);
        return { ...branch, items: updatedItems };
      }
      return branch;
    });
    setInventory(updatedInventory);
  };

  return (
    <div>
      <div className="app-body">
        <Sidebar />
        <div className="view-inventory-container">
          <h2>
            <strong>INVENTORY</strong>
          </h2>
          <div className="branch-selector">
            <label htmlFor="branch">
              <strong>Branch:</strong>
            </label>
            <select
              id="branch"
              value={selectedBranch}
              onChange={handleBranchChange}
            >
              <option value="All">All Branches</option>
              {inventory.map((branch) => (
                <option key={branch.branch} value={branch.branch}>
                  {branch.branch}
                </option>
              ))}
            </select>
          </div>

          {paginatedInventory.length === 0 ? (
            <p>No inventory items available for this branch.</p>
          ) : (
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Location</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedInventory.map((item) => (
                  <tr key={item.id}>
                    <td>
                      {editingItem === item.id ? (
                        <input
                          type="text"
                          name="productName"
                          value={formData.productName}
                          onChange={handleFormChange}
                        />
                      ) : (
                        item.productName
                      )}
                    </td>
                    <td>
                      {editingItem === item.id ? (
                        <input
                          type="number"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleFormChange}
                        />
                      ) : (
                        item.quantity
                      )}
                    </td>
                    <td>
                      {editingItem === item.id ? (
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleFormChange}
                        />
                      ) : (
                        item.location
                      )}
                    </td>
                    <td>
                      <div className="action-btn">
                        <button className="view-btn">
                          <FontAwesomeIcon icon={faEye} title="View" />
                        </button>
                        {editingItem === item.id ? (
                          <button
                            className="save-btn"
                            onClick={() => handleSaveChanges(item.id)}
                          >
                            Save
                          </button>
                        ) : (
                          <button
                            className="edit-btn"
                            onClick={() => handleEdit(item)}
                          >
                            <FontAwesomeIcon icon={faEdit} />
                          </button>
                        )}
                        <button
                          className="del-btn"
                          onClick={() => handleDelete(item.id)}
                        >
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
              onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                className={`pagination-btn-g ${
                  currentPage === index + 1 ? "active" : ""
                }`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}

            <button
              className="pagination-btn-g"
              onClick={() =>
                setCurrentPage(Math.min(currentPage + 1, totalPages))
              }
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

export default ViewInventory;
