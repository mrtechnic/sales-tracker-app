// Import necessary libraries and components
import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Card, Container, Row, Col } from 'react-bootstrap';

// Mock sales data (replace this with your actual data source)
const salesData = [
    { name: 'Product A', sales: 8000, branch1: 3000, branch2: 2000, branch3: 1500, branch4: 1500 },
    { name: 'Product B', sales: 7000, branch1: 2000, branch2: 2500, branch3: 1000, branch4: 1500 },
    { name: 'Product C', sales: 8000, branch1: 2500, branch2: 3000, branch3: 800, branch4: 1700 },
    { name: 'Product D', sales: 9000, branch1: 4000, branch2: 3000, branch3: 1000, branch4: 1000 },
  ];

// Yearly sales trend data
const salesTrendData = [
  { year: 2020, productA: 12000, productB: 11000, productC: 9000, productD: 15000 },
  { year: 2021, productA: 15000, productB: 14000, productC: 10000, productD: 17000 },
  { year: 2022, productA: 13000, productB: 12000, productC: 10500, productD: 16000 },
  { year: 2023, productA: 17000, productB: 15500, productC: 11500, productD: 19000 },
];

// Monthly sales trend data for each product in each year
const monthlySalesData = [
  { month: 'January', productA: 1200, productB: 1100, productC: 900, productD: 1500, year: 2020 },
  { month: 'February', productA: 1300, productB: 1150, productC: 950, productD: 1600, year: 2020 },
  // ...Add data for the rest of 2020
  { month: 'December', productA: 1700, productB: 1550, productC: 1200, productD: 1900, year: 2020 },
  // Repeat for 2021, 2022, 2023...
];

const pieData = [
  { name: 'Product A', value: 8000 },
  { name: 'Product B', value: 7000 },
  { name: 'Product C', value: 8000 },
  { name: 'Product D', value: 9000 },
];

const COLORS = ['#140CA8', '#C912B7', '#EDf514', '#EB3437', '#088724'];

const Analytics = () => {
  // Handle dynamic data loading with useEffect
  const [data, setData] = useState([]);
  const [selectedYear, setSelectedYear] = useState(2020); // State for selected year

  useEffect(() => {
    setData(salesData); // Use mock data for now
  }, []);

  const filteredMonthlyData = monthlySalesData.filter(item => item.year === selectedYear);

  return (
    <Container fluid>
      <Row className="mt-4">
        {/* Bar Chart for Sales by Product */}
        <Col md={6}>
          <Card>
            <h4 className="text-center">Sales by Product</h4>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#088724" />
                <Bar dataKey="branch1" fill="#140CA8" />
                <Bar dataKey="branch2" fill="#C912B7" />
                <Bar dataKey="branch3" fill="#EDf514" />
                <Bar dataKey="branch4" fill="#EB3437" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>

        {/* Pie Chart for Best-Selling Products */}
        <Col md={6}>
          <Card>
            <h4 className="text-center">Best-Selling Products</h4>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
  {/* Line Chart for Yearly Sales Trends */}
  <Col md={6}>
    <Card>
      <h4 className="text-center">Sales Trends Over Time</h4>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={salesTrendData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" label={{ value: "Year", position: "insideBottomRight", offset: 0 }} />
          <YAxis label={{ value: "Sales", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="productA" stroke="#140CA8" name="Product A" />
          <Line type="monotone" dataKey="productB" stroke="#C912B7" name="Product B" />
          <Line type="monotone" dataKey="productC" stroke="#EDf514" name="Product C" />
          <Line type="monotone" dataKey="productD" stroke="#EB3437" name="Product D" />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  </Col>

  {/* Line Chart for Monthly Sales Trends (January to December) */}
  <Col md={6}>
    <Card>
      <h4 className="text-center">Monthly Sales Trends (January to December)</h4>
      <div className="d-flex justify-content-center mb-3">
        {/* Dropdown to select year */}
        <select onChange={(e) => setSelectedYear(parseInt(e.target.value))} value={selectedYear}>
          <option value={2020}>2020</option>
          <option value={2021}>2021</option>
          <option value={2022}>2022</option>
          <option value={2023}>2023</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={360}>
        <LineChart data={filteredMonthlyData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" label={{ value: "Month", position: "insideBottomRight", offset: 0 }} />
          <YAxis label={{ value: "Sales", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="productA" stroke="#8884d8" name="Product A" />
          <Line type="monotone" dataKey="productB" stroke="#82ca9d" name="Product B" />
          <Line type="monotone" dataKey="productC" stroke="#ffc658" name="Product C" />
          <Line type="monotone" dataKey="productD" stroke="#ff8042" name="Product D" />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  </Col>
</Row>

    </Container>
  );
};

export default Analytics;
