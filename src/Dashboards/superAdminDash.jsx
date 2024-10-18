import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Sidebar from '../components/SideBar';
import Navbar from '../components/NavBar';
import BarChart from '../components/BarChart'; 
import DoughnutChart from '../components/DoughnutChart'; 
import RecentSalesOrder from '../components/RecentSalesOrder'; 

const SuperAdminDash = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  
  const productsPerBranch = {
    branches: ["Branch A", "Branch B", "Branch C", "Branch D", "Branch E"],
    products: [
      { name: "Product A", sales: [5000, 10000, 7000, 8000, 6000] }, 
      { name: "Product B", sales: [4000, 9000, 6000, 7000, 5000] },  
      { name: "Product C", sales: [3000, 8000, 5000, 6000, 4000] },
      { name: "Product D", sales: [3000, 8000, 5000, 6000, 4000] },
      { name: "Product E", sales: [3000, 8000, 5000, 6000, 4000] }
    ],
  };

  
  const clusteredBarData = {
    labels: productsPerBranch.branches, 
    datasets: productsPerBranch.products.map((product, index) => ({
      label: product.name,
      data: product.sales,
      backgroundColor: ['#140CA8', '#C912B7', '#EDf514', '#EB3437', '#088724'][index],
      borderColor: '#1E88E5',
      borderWidth: 0,
    })),
  };

  // Bar chart options
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

  const doughnutData = {
    labels: ["Product A", "Product B", "Product C", "Product D", "Product E"],
    datasets: [{
      data: [30000, 25000, 18000, 40000, 18000],
      backgroundColor: ['#140CA8', '#C912B7', '#EDf514', '#EB3437', '#088724'],
    }],
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

  const handleSelectCategory = (category) => setSelectedCategory(category);

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
                    <Card style={{ height: '300px' }}>
                      <Card.Body>
                        <Card.Title style={{color: '#e02f2f'}}><strong>Sales per Branch</strong></Card.Title>
                        <BarChart data={clusteredBarData} options={barOptions} />
                      </Card.Body>
                    </Card>
                  </Col>
                  
                  <Col md={6} className="mb-4">
                    <Card style={{ height: '300px' }}>
                      <Card.Body>
                        <Card.Title style={{color: '#e02f2f'}}><strong>Best Selling Products</strong></Card.Title>
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
                        {productsPerBranch.products.map((product, index) => (
                          <li key={index}>{product.name}</li>
                        ))}
                      </ul>
                    </Card.Body>
                  </Card>
                )}
              </Col>
            </Row>


            <RecentSalesOrder />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SuperAdminDash;
