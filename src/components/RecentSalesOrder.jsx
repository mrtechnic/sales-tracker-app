import React from 'react';
import { Table, Card } from 'react-bootstrap';

const RecentSalesOrder = () => {
  const salesOrders = [
    {
      date: "21/07/2022 08:21",
      items: "1x Black Backpack",
      staff: "Eren Yeager",
      amount: "$101",
      status: "Instagram",
    },
    {
      date: "21/07/2022 08:21",
      items: "1x Distro Backpack",
      staff: "Levi Ackerman",
      amount: "$100",
      status: "Web",
    },
    {
      date: "21/07/2022 08:21",
      items: "1x New Backpack",
      staff: "Rainer Brown",
      amount: "$150",
      status: "Facebook",
    },
    {
      date: "21/07/2022 08:21",
      items: "2x Black Backpack",
      staff: "Historia Reiss",
      amount: "$200",
      status: "Store",
    },
  ];

  return (
    <Card className="mt-4">
      <Card.Body>
        <Card.Title style={{color: '#e02f2f'}}><strong>Recent Sales Orders</strong></Card.Title>
        <Table responsive hover>
          <thead style={{color: '#e02f2f'}}>
            <tr>
              <th>Order Date</th>
              <th>Items</th>
              <th>Staff</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody style={{color: '#e02f2f'}}>
            {salesOrders.map((order, index) => (
              <tr key={index}>
                <td>{order.date}</td>
                <td>{order.items}</td>
                <td>{order.staff}</td>
                <td>{order.amount}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};


// const getStatusClass = (status) => {
//   switch (status) {
//     case "Paid":
//       return "success";
//     case "Pending":
//       return "warning";
//     case "Overdue":
//       return "danger";
//     default:
//       return "secondary";
//   }
// };

export default RecentSalesOrder;
