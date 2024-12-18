import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Sidebar from '../components/SideBar';
import BarChart from '../components/BarChart'; 
import DoughnutChart from '../components/DoughnutChart'; 
import RecentSalesOrder from '../components/RecentSalesOrder';
import './superadmindash.css'; // Import the CSS file

const SuperAdminDash = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const productsPerBranch = {
    branches: ["Branch A", "Branch B", "Branch C", "Branch D", "Branch E"],
    products: [
      { name: "Product A", sales: [5000, 10000, 7000, 8000, 6000] }, 
      { name: "Product B", sales: [4000, 9000, 6000, 7000, 5000] },  
      { name: "Product C", sales: [3000, 8000, 5000, 6000, 4000] },
      { name: "Product D", sales: [3000, 8000, 5000, 6000, 4000] }
    ],
  };

  const clusteredBarData = {
    labels: productsPerBranch.branches, 
    datasets: productsPerBranch.products.map((product, index) => ({
      label: product.name,
      data: product.sales,
      backgroundColor: ['#022c22', '#4ade80', '#16a34a', '#14532d'][index],
      borderColor: '#1E88E5',
      borderWidth: 0,
    })),
  };

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
    labels: ["Product A", "Product B", "Product C", "Product D"],
    datasets: [{
      data: [30000, 25000, 40000, 18000],
      backgroundColor: ['#022c22', '#4ade80', '#16a34a', '#14532d'],
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
      <div className="app-body">
        <Sidebar />
        <div className="dashboard-container">
          <Container>
            {/* Charts section */}
            <div className="charts-container">
              <Card className="chart-bar">
                <Card.Body>
                  <Card.Title><strong>Sales per Branch</strong></Card.Title>
                  <BarChart data={clusteredBarData} options={barOptions} />
                </Card.Body>
              </Card>

              <Card className="chart-bar">
                <Card.Body>
                  <Card.Title><strong>Best Selling Products</strong></Card.Title>
                  <DoughnutChart data={doughnutData} options={doughnutOptions} />
                </Card.Body>
              </Card>
            </div>

            {/* Recent sales section */}
            <div className="recent-sales-container">
              <RecentSalesOrder />
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDash;
