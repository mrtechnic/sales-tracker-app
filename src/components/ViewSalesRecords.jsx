import React, { useState } from 'react';
import { Table, Card, Form } from 'react-bootstrap';
import Navbar from './NavBar';
import Sidebar from './SideBar';
import './viewsalesrecords.css';

const ViewSalesRecords = () => {
  const [selectedBranch, setSelectedBranch] = useState("All");

  const records = [
    { date: "22/07/2022 09:15", branch: "Branch A", items: "2x Black T-Shirt", staff: "Mikasa Ackerman", amount: 60, type: "Sale" },
    { date: "23/07/2022 10:30", branch: "Branch B", items: "1x Red T-Shirt", staff: "Jean Kirstein", amount: 30, type: "Sale" },
    { date: "23/07/2022 14:20", branch: "Branch A", items: "1x Blue Jeans", staff: "Sasha Blouse", amount: 45, type: "Return" },
    { date: "24/07/2022 08:00", branch: "Branch C", items: "3x Sneakers", staff: "Armin Arlert", amount: 135, type: "Sale" },
  ];

  const filteredRecords = selectedBranch === "All" ? records : records.filter(record => record.branch === selectedBranch);
  const totalSales = filteredRecords.filter(record => record.type === "Sale").reduce((total, record) => total + record.amount, 0);
  const branchTotals = records.reduce((totals, record) => {
    if (record.type === "Sale") {
      totals[record.branch] = (totals[record.branch] || 0) + record.amount;
    }
    return totals;
  }, {});

  return (
    <div className="app-container">
      <Navbar />
      <div className="app-body">
        <Sidebar />
        <div className="content">
          <Card className="sales-records-card mt-4">
            <Card.Body>
              <Card.Title><strong>Sales & Refund Records</strong></Card.Title>
              <Form.Group controlId="branchSelect">
                <Form.Label>Select Branch:</Form.Label>
                <Form.Control as="select" id="branch" value={selectedBranch} onChange={(e) => setSelectedBranch(e.target.value)}>
                  <option value="All">All Branches</option>
                  <option value="Branch A">Branch A</option>
                  <option value="Branch B">Branch B</option>
                  <option value="Branch C">Branch C</option>
                </Form.Control>
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
                  {filteredRecords.map((record, index) => (
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
                <p><strong>Total Sales for {selectedBranch === "All" ? "All Branches" : selectedBranch}: </strong>${totalSales}</p>
                {selectedBranch === "All" && (
                  <div>
                    {Object.entries(branchTotals).map(([branch, total]) => (
                      <p key={branch}><strong>Total Sales for {branch}:</strong> ${total}</p>
                    ))}
                  </div>
                )}
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ViewSalesRecords;
