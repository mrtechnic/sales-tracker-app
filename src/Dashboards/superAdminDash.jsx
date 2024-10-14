import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Sidebar from '../components/SideBar';
import Navbar from '../components/NavBar';
import BarChart from '../components/BarChart'; 
import DoughnutChart from '../components/DoughnutChart'; 

const SuperAdminDash = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  // Example best-selling products data
  const bestSellingProducts = [
    { name: 'Product A', sales: 30000 },
    { name: 'Product B', sales: 25000 },
    { name: 'Product C', sales: 18000 },
  ];

  // Prepare data for the Doughnut chart
  const doughnutData = {
    labels: bestSellingProducts.map(product => product.name), // Product names
    datasets: [
      {
        label: 'Best Selling Products',
        data: bestSellingProducts.map(product => product.sales), // Sales figures
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'], // Colors for each segment
        hoverOffset: 3,
      },
    ],
  };

  // Example sales data for the Bar chart
  const salesData = [30000, 50000, 70000, 90000, 120000]; // Sales numbers
  const branchLabels = ["Branch A", "Branch B", "Branch C", "Branch D", "Branch E"]; // Corresponding branch labels

  // Prepare data for the Bar chart
  const barData = {
    labels: branchLabels,
    datasets: [
      {
        label: 'Sales per Branch',
        data: salesData,
        backgroundColor: '#42A5F5',
        borderColor: '#1E88E5',
        borderWidth: 1,
      },
    ],
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const cardHeight = { height: '300px' };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  };

  return (
    <div>
      <Navbar />
      <Container fluid className="vh-100"> 
        <Row className="h-100">
          <Col md={2} className="p-0 bg-light sidebar">
            <Sidebar onSelectCategory={handleSelectCategory} />
          </Col>

          <Col md={9}>
            <Row className="mt-4">
              <Col>
                <Row>
                  <Col md={6} className="mb-4">
                    <Card style={cardHeight}> 
                      <Card.Body>
                        <Card.Title>Sales per Branch </Card.Title>
                        <BarChart data={barData} options={barOptions} />
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col md={6} className="mb-4">
                    <Card style={cardHeight}>
                      <Card.Body>
                        <Card.Title>Best Selling Products</Card.Title>
                        <DoughnutChart data={doughnutData} options={doughnutOptions} />
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>

                {selectedCategory === "Products" && (
                  <Card className="mt-4">
                    <Card.Body>
                      <Card.Title>Products</Card.Title>
                      <ul>
                        {bestSellingProducts.map((product, index) => (
                          <li key={index}>{product.name}</li>
                        ))}
                      </ul>
                    </Card.Body>
                  </Card>
                )}
                {/* Other category rendering goes here... */}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SuperAdminDash;
