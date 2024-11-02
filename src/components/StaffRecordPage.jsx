import React, { useState } from 'react';
import Navbar from './NavBar';
import StaffSidebar from './StaffSideBar';
import './staffrecordpage.css';

const branches = {
  'user1@branch1.com': 'Branch A',
  'user2@branch2.com': 'Branch B',
  'user3@branch3.com': 'Branch C',
  // Add more email-branch mappings as necessary
};

// Assuming the email is derived from a user context or prop
const userEmail = 'user1@branch1.com'; // Replace with actual user email

const StaffRecordPage = () => {
  const [items, setItems] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('Sale'); // Default type to Sale
  const [branch, setBranch] = useState(branches[userEmail]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format the date and time to the desired format
    const formattedDate = new Date().toLocaleString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).replace(',', '');

    // Create a formatted sales record
    const salesRecord = `${formattedDate}\t${items}\t${userEmail.split('@')[0]}\t$${amount}\t${type}\t${branch}`;

    // Logic to handle the formatted sales record
    console.log(salesRecord); // Log the formatted sales record
    
    // Reset form after submission
    setItems('');
    setAmount('');
    setType('Sale');
  };

  return (
    <div>
      <Navbar />
      <div className="record-page-container">
        <StaffSidebar />
        <div className="content">
          <div className="form-container">
            <h2><strong>Create Sales Record</strong></h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="transaction-date">Transaction Date</label>
                <input 
                  type="text" 
                  id="transaction-date" 
                  value={new Date().toLocaleString('en-GB')} // Display current date and time
                  readOnly 
                />
              </div>

              <div className="form-group">
                <label htmlFor="items">Items</label>
                <input 
                  type="text" 
                  id="items" 
                  placeholder="Enter item description" 
                  value={items} 
                  onChange={(e) => setItems(e.target.value)} 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="staff">Staff</label>
                <input 
                  type="text" 
                  id="staff" 
                  value={userEmail.split('@')[0]} // Use the staff's name from the email
                  readOnly 
                />
              </div>

              <div className="form-group">
                <label htmlFor="amount">Amount</label>
                <input 
                  type="number" 
                  id="amount" 
                  placeholder="Enter amount" 
                  value={amount} 
                  onChange={(e) => setAmount(e.target.value)} 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="type">Type</label>
                <select 
                  id="type" 
                  value={type} 
                  onChange={(e) => setType(e.target.value)} 
                  required
                >
                  <option value="Sale">Sale</option>
                  <option value="Refund">Refund</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="branch">Branch</label>
                <input 
                  type="text" 
                  id="branch-name" 
                  value={branch} 
                  readOnly // Make it read-only since it's determined by the email
                />
              </div>

              <button type="submit" className="submit-button">
                Create Record
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffRecordPage;
