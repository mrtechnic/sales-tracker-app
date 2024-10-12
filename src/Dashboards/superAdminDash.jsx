import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Sidebar from '../components/SideBar';
import Navbar from '../components/NavBar';

const SuperAdminDash = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Example data for products, staff, inventory, and analytics tools
  const products = ["Product A", "Product B", "Product C"];
  const staffMembers = ["Staff 1", "Staff 2", "Staff 3"];
  const inventoryItems = ["Item 1", "Item 2", "Item 3"];
  const analyticsTools = ["Tool 1", "Tool 2", "Tool 3"];

  // Function to handle category selection
  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <Navbar />
      <Container fluid className="vh-100"> {/* Full height of the viewport */}
        <Row className="h-100">
          {/* Sidebar with fixed width and full height */}
          <Col md={3} className="p-0 bg-light sidebar">
            <Sidebar onSelectCategory={handleSelectCategory} />
          </Col>

          {/* Main content area */}
          <Col md={9}>
            <Row className="mt-4">
              <Col>
                {selectedCategory === "Products" && (
                  <Card>
                    <Card.Body>
                      <Card.Title>Products</Card.Title>
                      <ul>
                        {products.map((product, index) => (
                          <li key={index}>{product}</li>
                        ))}
                      </ul>
                    </Card.Body>
                  </Card>
                )}
                {selectedCategory === "Staff" && (
                  <Card>
                    <Card.Body>
                      <Card.Title>Staff</Card.Title>
                      <ul>
                        {staffMembers.map((staff, index) => (
                          <li key={index}>{staff}</li>
                        ))}
                      </ul>
                    </Card.Body>
                  </Card>
                )}
                {selectedCategory === "Inventory" && (
                  <Card>
                    <Card.Body>
                      <Card.Title>Inventory</Card.Title>
                      <ul>
                        {inventoryItems.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </Card.Body>
                  </Card>
                )}
                {selectedCategory === "Analytics" && (
                  <Card>
                    <Card.Body>
                      <Card.Title>Analytics</Card.Title>
                      <ul>
                        {analyticsTools.map((tool, index) => (
                          <li key={index}>{tool}</li>
                        ))}
                      </ul>
                    </Card.Body>
                  </Card>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SuperAdminDash;
