import React from 'react';
import { Table, Card } from 'react-bootstrap';

const RecentSalesOrder = () => {
  const salesOrders = [
    {
      id: "#065499",
      staff: "Eren Yeager",
      item: "1x Black Backpack",
      date: "21/07/2022 08:21",
      status: "Paid",
      price: "$101",
    },
    {
      id: "#065499",
      staff: "Levi Ackerman",
      item: "1x Distro Backpack",
      date: "21/07/2022 08:21",
      status: "Pending",
      price: "$144",
    },
    {
      id: "#065499",
      staff: "Rainer Brown",
      item: "1x New Backpack",
      date: "21/07/2022 08:21",
      status: "Paid",
      price: "$121",
    },
    {
      id: "#065499",
      staff: "Historia Reiss",
      item: "2x Black Backpack",
      date: "21/07/2022 08:21",
      status: "Overdue",
      price: "$300",
    },
  ];

  return (
    <Card className="mt-4">
      <Card.Body>
        <Card.Title>Recent Sales Orders</Card.Title>
        <Table responsive hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Id</th>
              <th>Staff</th>
              <th>Item Name</th>
              <th>Order Date</th>
              <th>Status</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {salesOrders.map((order, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{order.id}</td>
                <td>{order.staff}</td>
                <td>{order.item}</td>
                <td>{order.date}</td>
                <td>
                  <span className={`badge bg-${getStatusClass(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td>{order.price}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

// Helper function to assign different styles to status
const getStatusClass = (status) => {
  switch (status) {
    case "Paid":
      return "success";
    case "Pending":
      return "warning";
    case "Overdue":
      return "danger";
    default:
      return "secondary";
  }
};

export default RecentSalesOrder;
