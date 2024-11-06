import React, { useState } from 'react';
import Sidebar from './SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash, faSave } from '@fortawesome/free-solid-svg-icons';
import './viewproducts.css';

const ViewProducts = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: '$10.00', description: 'Description of Product 1' },
    { id: 2, name: 'Product 2', price: '$20.00', description: 'Description of Product 2' },
    { id: 3, name: 'Product 3', price: '$30.00', description: 'Description of Product 3' },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const paginatedProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  )

  const [inventory] = useState([
    { productId: 1, quantityAvailable: 100 },
    { productId: 2, quantityAvailable: 50 },
    { productId: 3, quantityAvailable: 25 },
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null);
  const [productFormData, setProductFormData] = useState({ name: '', price: '', description: '' });

  const getRemainingQuantity = (productId) => {
    const productInventory = inventory.find(item => item.productId === productId);
    return productInventory ? productInventory.quantityAvailable : 0;
  };

  const handleView = (productId) => {
    setSelectedProduct((prev) => (prev === productId ? null : productId));
  };

  const handleEdit = (product) => {
    setEditingProduct(product.id);
    setProductFormData({ name: product.name, price: product.price, description: product.description });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setProductFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveChanges = (productId) => {
    setProducts((prev) =>
      prev.map(product =>
        product.id === productId ? { ...product, ...productFormData } : product
      )
    );
    setEditingProduct(null);
    setProductFormData({ name: '', price: '', description: '' });
  };

  const handleDelete = (id) => {
    setProducts((prev) => prev.filter(product => product.id !== id));
    if (selectedProduct === id) setSelectedProduct(null);
  };

  const getInventoryDetails = () => {
    return inventory.find(item => item.productId === selectedProduct);
  };

  return (
    <div>
      <div className="app-body">
        <Sidebar />
        <div className="view-products-container">
          <h2><strong>PRODUCTS</strong></h2>
          <input
            type="text"
            placeholder="Search Products"
            style={{ marginTop: '20px', border: 'solid 2px', width: '10%' }}
          />
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Description</th>
                <th>Remaining Inventory</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedProducts.map((product) => (
                <tr key={product.id}>
                  <td>
                    {editingProduct === product.id ? (
                      <input
                        type="text"
                        name="name"
                        value={productFormData.name}
                        onChange={handleFormChange}
                      />
                    ) : (
                      product.name
                    )}
                  </td>
                  <td>
                    {editingProduct === product.id ? (
                      <input
                        type="text"
                        name="price"
                        value={productFormData.price}
                        onChange={handleFormChange}
                      />
                    ) : (
                      product.price
                    )}
                  </td>
                  <td>
                    {editingProduct === product.id ? (
                      <input
                        type="text"
                        name="description"
                        value={productFormData.description}
                        onChange={handleFormChange}
                      />
                    ) : (
                      product.description
                    )}
                  </td>
                  <td>{getRemainingQuantity(product.id)}</td>
                  <td>
                    <div className="action-btn">
                      <button 
                        className="view-btn"
                        onClick={() => handleView(product.id)}
                      >
                        <FontAwesomeIcon icon={faEye} title="View" />
                      </button>
                      {editingProduct === product.id ? (
                        <button 
                          className="save-btn"
                          onClick={() => handleSaveChanges(product.id)}
                        > Save
                        </button>
                      ) : (
                        <button 
                          className="edit-btn"
                          onClick={() => handleEdit(product)}
                        >
                          <FontAwesomeIcon icon={faEdit} title="Edit" />
                        </button>
                      )}
                      <button 
                        className="del-btn"
                        onClick={() => handleDelete(product.id)}
                      >
                        <FontAwesomeIcon icon={faTrash} title="Delete" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

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

          {selectedProduct && (
            <div className="inventory-details">
              <h3>Inventory Details for {products.find(p => p.id === selectedProduct).name}</h3>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Product ID</th>
                    <th>Quantity Available</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{selectedProduct}</td>
                    <td>{getInventoryDetails().quantityAvailable}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewProducts;
