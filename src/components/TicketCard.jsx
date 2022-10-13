import React from "react";
import { Card, Table } from "react-bootstrap";
const TicketCard = ({
  date_resolved,
  date_entered,
  type,
  stage,
  comments,
  stove_hp_type,
  index,
}) => {
  return (
    <Card style={{ maxWidth: "18rem" }} className="m-3" key={index}>
      <Card.Header>Ticket</Card.Header>
      <Card.Body>
        <Table striped bordered hover>
          <tbody>
            <tr>
              <td>Date Resolved</td>
              <td>{date_resolved}</td>
            </tr>
            <tr>
              <td>Date Entered</td>
              <td>{date_entered}</td>
            </tr>
            <tr>
              <td>Type</td>
              <td>{type}</td>
            </tr>
            <tr>
              <td>Stage</td>
              <td>{stage}</td>
            </tr>
            <tr>
              <td>Comments</td>
              <td>{comments}</td>
            </tr>
            <tr>
              <td>Stove/Hp Type</td>
              <td>{stove_hp_type}</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default TicketCard;
