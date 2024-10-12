import React from 'react'
import { Container, Row, Col, Navbar, Card } from 'react-bootstrap';
import SalesChart from '../components/SalesChart';
import Sidebar from '../components/SideBar';
import Header from '../components/Header';


const SuperAdminDash = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Super Admin Dashboard</Navbar.Brand>
      </Navbar>
      <Header />
      <Container fluid>
        <Row className="mt-4">
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Total Sales</Card.Title>
                <Sidebar />
                <SalesChart />
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Users</Card.Title>
                <SalesChart />
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Revenue</Card.Title>
                <SalesChart />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SuperAdminDash