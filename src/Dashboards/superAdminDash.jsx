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

  // Example sales data
  const totalSalesRevenue = 150000; // Total sales revenue in currency
  const previousTotalSalesRevenue = 120000; // Previous period's revenue

  // Calculate sales growth rate
  const salesGrowthRate = ((totalSalesRevenue - previousTotalSalesRevenue) / previousTotalSalesRevenue) * 100;

  // Example sales per rep and sales target data
  const salesPerRep = 75000; // Example sales per sales representative
  const salesTarget = 200000; // Example sales target

  // Example analytics tools
  const analyticsTools = [
    { name: "Sales Trends - Monthly" },
    { name: "Sales Trends - Yearly" }
  ];

  // Function to handle category selection
  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  // Define a constant for card height and smaller containers
  const cardHeight = { height: '120px' }; // Set the desired height for all cards
  const smallCardHeight = { height: '100px' }; // Smaller height for specific cards

  return (
    <div>
      <Navbar />
      <Container fluid className="vh-100"> {/* Full height of the viewport */}
        <Row className="h-100">
          {/* Sidebar with fixed width and full height */}
          <Col md={2} className="p-0 bg-light sidebar">
            <Sidebar onSelectCategory={handleSelectCategory} />
          </Col>

          {/* Main content area */}
          <Col md={9}>
            <Row className="mt-4">
              <Col>
                {/* Always display Analytics cards */}
                <Row className="mt-4">
                  {analyticsTools.map((tool, index) => (
                    <Col key={index} md={6} className="mb-3"> {/* 2 cards in a row */}
                      <Card style={cardHeight}>
                        <Card.Body>
                          <Card.Title>{tool.name}</Card.Title>
                          <Card.Text>
                            {/* Add any additional info about the tool here */}
                            Details about {tool.name}.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>

                {/* New container for Total Sales Revenue and Sales Growth Rate */}
                <Container className="mt-4">
                  <Row>
                    {/* Total Sales Revenue Card */}
                    <Col md={6} className="mb-3">
                      <Card style={smallCardHeight}> {/* Use smaller height here */}
                        <Card.Body>
                          <Card.Title>Total Sales Revenue</Card.Title>
                          <Card.Text>
                            ${totalSalesRevenue.toLocaleString()} {/* Format as currency */}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>

                    {/* Sales Growth Rate Card */}
                    <Col md={6} className="mb-3">
                      <Card style={smallCardHeight}> {/* Use smaller height here */}
                        <Card.Body>
                          <Card.Title>Sales Growth Rate</Card.Title>
                          <Card.Text>
                            {salesGrowthRate.toFixed(2)}% {/* Format to 2 decimal places */}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Container>

                {/* New container for Sales per Rep and Sales Target */}
                <Container className="mt-4">
                  <Row>
                    {/* Sales per Rep Card */}
                    <Col md={6} className="mb-3">
                      <Card style={smallCardHeight}> {/* Use smaller height here */}
                        <Card.Body>
                          <Card.Title>Sales per Rep</Card.Title>
                          <Card.Text>
                            ${salesPerRep.toLocaleString()} {/* Format as currency */}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>

                    {/* Sales Target Card */}
                    <Col md={6} className="mb-3">
                      <Card style={smallCardHeight}> {/* Use smaller height here */}
                        <Card.Body>
                          <Card.Title>Sales Target</Card.Title>
                          <Card.Text>
                            ${salesTarget.toLocaleString()} {/* Format as currency */}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Container>

                {selectedCategory === "Products" && (
                  <Card className="mt-4">
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
                  <Card className="mt-4">
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
                  <Card className="mt-4">
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
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SuperAdminDash;
