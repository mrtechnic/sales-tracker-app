import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/NavBar';
import StaffSidebar from '../components/StaffSideBar';
import RecentSalesOrder from '../components/RecentSalesOrder';
import './staffdashboard.css';

const StaffDashboard = () => {
  const productInventory = [
    { id: 1, name: 'Product A', quantity: 60 },
    { id: 2, name: 'Product B', quantity: 30 },
    { id: 3, name: 'Product C', quantity: 80 },
    { id: 4, name: 'Product D', quantity: 20 },
  ];

  return (
    <div>
      <Navbar />
      <div className="app-body">
        <StaffSidebar />
        <div className="staff-dashboard-container">
          <Container fluid>
            <div className="product-inventory-row">
              {productInventory.map((product) => (
                <Card className="product-inventory-card" key={product.id}>
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <div className="inventory-info">
                      <span className="product-number">{product.quantity} in stock</span>
                      <span className="arrow-indicator">
                        <FontAwesomeIcon 
                          icon={product.quantity > 50 ? faArrowUp : faArrowDown} 
                          className={product.quantity > 50 ? 'green-arrow' : 'red-arrow'} 
                        />
                      </span>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
            <div className="recent-sales">
              <RecentSalesOrder />
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default StaffDashboard;
