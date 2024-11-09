import React, { useState, useEffect } from 'react';
// import Navbar from './NavBar';
import Sidebar from './SideBar';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer,
} from 'recharts';
import { Card, Container } from 'react-bootstrap';

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

const COLORS = ['#022c22', '#4ade80', '#16a34a', '#14532d', '#22c55e'];

const Analytics = () => {
  const [data, setData] = useState([]);
  const [selectedYear, setSelectedYear] = useState(2020); // State for selected year
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    setData(salesData); // Use mock data for now
  }, []);

  const filteredMonthlyData = monthlySalesData.filter(item => item.year === selectedYear);

  const handleSelectCategory = (category) => setSelectedCategory(category);

  return (
    <div>
      {/* <Navbar /> */}
      <div className="app-body">
        <Sidebar />
        <div className="dashboard-container">
          <Container>
            {/* Top row for charts */}
            <div className="charts-container">
              <Card className="chart-bar">
                <Card.Body>
                  <Card.Title><strong>Sales by Product</strong></Card.Title>
                  <ResponsiveContainer width="100%" height={200} style={{padding: '5px', marginTop: '-10px', marginLeft: '-10px'}}>
                    <BarChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="sales" fill="#022c22" />
                      <Bar dataKey="branch1" fill="#4ade80" />
                      <Bar dataKey="branch2" fill="#16a34a" />
                      <Bar dataKey="branch3" fill="#14532d" />
                      <Bar dataKey="branch4" fill="#22c55e" />
                    </BarChart>
                  </ResponsiveContainer>
                </Card.Body>
              </Card>

              <Card className="chart-bar">
                <Card.Body>
                  <Card.Title><strong>Best-Selling Products</strong></Card.Title>
                  <ResponsiveContainer width="100%" height={250} style={{padding: '30px', marginTop: '-40px'}}>
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => `${name}: ${value}`} // Fixed interpolation
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} /> // Corrected key
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </Card.Body>
              </Card>
            </div>

            {/* Bottom row for monthly sales trend */}
            <div className="charts-container">
              <Card className="chart-bar">
                <Card.Body>
                  <Card.Title><strong>Monthly Sales Trends (January to December)</strong></Card.Title>
                  <div className="d-flex justify-content-center mb-3">
                    {/* Dropdown to select year */}
                    <select onChange={(e) => setSelectedYear(parseInt(e.target.value))} value={selectedYear} style={{transform: 'scale(0.6)', marginTop: '-10px'}}>
                      <option value={2020}>2020</option>
                      <option value={2021}>2021</option>
                      <option value={2022}>2022</option>
                      <option value={2023}>2023</option>
                    </select>
                  </div>
                  <ResponsiveContainer width="100%" height={200} style={{padding: '10px', marginTop: '-30px', marginLeft: '-10px'}}>
                    <LineChart data={filteredMonthlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" label={{ value: "Month", position: "insideBottomRight", offset: 0 }} />
                      <YAxis label={{ value: "Sales", angle: -90, position: "insideLeft" }} />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="productA" stroke="#4ade80" name="Product A" />
                      <Line type="monotone" dataKey="productB" stroke="#16a34a" name="Product B" />
                      <Line type="monotone" dataKey="productC" stroke="#14532d" name="Product C" />
                      <Line type="monotone" dataKey="productD" stroke="#22c55e" name="Product D" />
                    </LineChart>
                  </ResponsiveContainer>
                </Card.Body>
              </Card>

              <Card className="chart-bar">
                <Card.Body>
                  <Card.Title><strong>Yearly Sales Trends</strong></Card.Title>
                  <ResponsiveContainer width="120%" height={200} style={{padding: '10px', marginTop: '10px', marginLeft: '-60px' }}>
                    <LineChart data={salesTrendData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="productA" stroke="#4ade80" name="Product A" />
                      <Line type="monotone" dataKey="productB" stroke="#16a34a" name="Product B" />
                      <Line type="monotone" dataKey="productC" stroke="#14532d" name="Product C" />
                      <Line type="monotone" dataKey="productD" stroke="#22c55e" name="Product D" />
                    </LineChart>
                  </ResponsiveContainer>
                </Card.Body>
              </Card>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
