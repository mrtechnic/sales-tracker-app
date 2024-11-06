import React, { useState } from 'react';
import { Table, Card, Form } from 'react-bootstrap';
// import Navbar from './NavBar';
import Sidebar from './SideBar';
import './viewsalesrecords.css';

const ViewSalesRecords = () => {
  const [selectedBranch, setSelectedBranch] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const recordsPerPage = 7;

  const records = [
    { date: "22/07/2022 09:15", branch: "Branch A", items: "2x Black T-Shirt", staff: "Mikasa Ackerman", amount: 60, type: "Sale" },
    { date: "23/07/2022 10:30", branch: "Branch B", items: "1x Red T-Shirt", staff: "Jean Kirstein", amount: 30, type: "Sale" },
    { date: "23/07/2022 14:20", branch: "Branch A", items: "1x Blue Jeans", staff: "Sasha Blouse", amount: 45, type: "Return" },
    { date: "24/07/2022 08:00", branch: "Branch C", items: "3x Sneakers", staff: "Armin Arlert", amount: 135, type: "Sale" },
    { date: "25/07/2022 11:15", branch: "Branch A", items: "5x White T-Shirt", staff: "Eren Yeager", amount: 75, type: "Sale" },
    { date: "26/07/2022 09:00", branch: "Branch B", items: "2x Hoodies", staff: "Levi Ackerman", amount: 90, type: "Sale" },
    { date: "26/07/2022 15:45", branch: "Branch A", items: "1x Black Sneakers", staff: "Mikasa Ackerman", amount: 60, type: "Sale" },
    { date: "27/07/2022 12:30", branch: "Branch C", items: "4x Running Shoes", staff: "Armin Arlert", amount: 180, type: "Sale" },
    { date: "28/07/2022 10:00", branch: "Branch B", items: "3x Caps", staff: "Jean Kirstein", amount: 45, type: "Sale" },
    { date: "29/07/2022 16:20", branch: "Branch C", items: "2x Blue Jeans", staff: "Sasha Blouse", amount: 90, type: "Return" },
    { date: "30/07/2022 14:10", branch: "Branch A", items: "1x Jacket", staff: "Eren Yeager", amount: 120, type: "Sale" },
    { date: "31/07/2022 13:00", branch: "Branch B", items: "1x Watch", staff: "Levi Ackerman", amount: 250, type: "Sale" },
    { date: "01/08/2022 17:30", branch: "Branch C", items: "1x Cap", staff: "Armin Arlert", amount: 25, type: "Sale" },
    { date: "02/08/2022 11:45", branch: "Branch A", items: "1x Hoodie", staff: "Mikasa Ackerman", amount: 55, type: "Return" },
  ];

  const filteredRecords = records
    .filter(record => selectedBranch === "All" || record.branch === selectedBranch)
    .filter(record =>
      record.items.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.staff.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.date.includes(searchTerm)
    );

  // Calculate total sales, considering returns
  const totalSales = filteredRecords.reduce((total, record) => {
    if (record.type === "Sale") {
      return total + record.amount;
    } else if (record.type === "Return") {
      return total - record.amount; // Subtract returns
    }
    return total;
  }, 0);

  // Calculate the index for the current page
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredRecords.slice(indexOfFirstRecord, indexOfLastRecord);

  // Calculate total pages
  const totalPages = Math.ceil(filteredRecords.length / recordsPerPage);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  return (
    <div>
      {/* <Navbar /> */}
      <div className="app-body">
        <Sidebar />
        <div className="app-container">
          <Card className="sales-records-card mt-4">
            <Card.Body>
              <Card.Title><strong>SALES RECORDS</strong></Card.Title>
              <Form.Group controlId="branchSelect" style={{ width: '10%' }}>
                <Form.Label>Select Branch:</Form.Label>
                <Form.Control as="select" style={{ backgroundColor: '#052e16', color: 'white' }} value={selectedBranch} onChange={(e) => {
                  setSelectedBranch(e.target.value);
                  setCurrentPage(1); // Reset to first page on branch change
                }}>
                  <option value="All">All Branches</option>
                  <option value="Branch A">Branch A</option>
                  <option value="Branch B">Branch B</option>
                  <option value="Branch C">Branch C</option>
                </Form.Control>
              </Form.Group>

              {/* Search Bar */}
              <Form.Group controlId="searchbar" style={{ marginTop: '10px', width: '20%', textDecoration: 'none' }}>
                <Form.Label>Search Orders</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Search by items, staff, or date"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                />
              </Form.Group>

              <Table responsive="sm" hover className="mt-4">
                <thead>
                  <tr>
                    <th>Transaction Date</th>
                    <th>Items</th>
                    <th>Staff</th>
                    <th>Amount</th>
                    <th>Type</th>
                    <th>Branch</th>
                  </tr>
                </thead>
                <tbody>
                  {currentRecords.map((record, index) => (
                    <tr key={index} className={record.type === "Return" ? "return-row" : ""}>
                      <td>{record.date}</td>
                      <td>{record.items}</td>
                      <td>{record.staff}</td>
                      <td>${record.amount}</td>
                      <td className={`type-${record.type.toLowerCase()}`}>{record.type}</td>
                      <td>{record.branch}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>

              <div className="total-sales">
                <p><strong>Total Sales for {selectedBranch === "All" ? "All Branches" : selectedBranch}: </strong>${totalSales.toFixed(2)}</p>
              </div>

              {/* Custom Pagination Controls */}
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
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ViewSalesRecords;
