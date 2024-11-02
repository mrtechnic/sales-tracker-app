import React from 'react';
import { Table, Card } from 'react-bootstrap';
import './recentsalesorder.css';

const RecentSalesOrder = () => {
  const salesOrders = [
    {
      date: "22/07/2022 09:30",
      items: "3x Travel Backpack",
      staff: "Jean Kirstein",
      amount: "$300",
      status: "Instagram",
    },
    {
      date: "22/07/2022 10:15",
      items: "2x Leather Wallet",
      staff: "Mikasa Ackerman",
      amount: "$90",
      status: "Web",
    },
    {
      date: "22/07/2022 11:45",
      items: "1x Hiking Boots",
      staff: "Connie Springer",
      amount: "$120",
      status: "Store",
    },
    {
      date: "22/07/2022 12:30",
      items: "2x Messenger Bag",
      staff: "Armin Arlert",
      amount: "$180",
      status: "Facebook",
    },
    {
      date: "22/07/2022 13:50",
      items: "4x Canvas Tote",
      staff: "Sasha Blouse",
      amount: "$80",
      status: "Web",
    },
    {
      date: "22/07/2022 14:25",
      items: "2x Duffel Bag",
      staff: "Annie Leonhart",
      amount: "$140",
      status: "Instagram",
    },
    {
      date: "22/07/2022 15:40",
      items: "5x Eco-Friendly Bag",
      staff: "Erwin Smith",
      amount: "$60",
      status: "Facebook",
    },
    {
      date: "22/07/2022 16:10",
      items: "2x Laptop Sleeve",
      staff: "Floch Forster",
      amount: "$50",
      status: "Web",
    },
  ];
  

  return (
    <Card className="mt-4">
      <Card.Body>
        <Card.Title><strong>Recent Sales Orders</strong></Card.Title>
        <Table responsive="sm" hover>
          <thead>
            <tr>
              <th>Order Date</th>
              <th>Items</th>
              <th>Staff</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
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

export default RecentSalesOrder;
