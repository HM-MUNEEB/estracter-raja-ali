import React from "react";
import { Card } from "react-bootstrap";
const Stats = ({ heading, value, cls }) => {
  return (
    <Card style={{ width: "18rem" }} className={`${cls} text-white`}>
      <Card.Body>
        <Card.Title style={{ fontSize: "2rem", textAlign: "center" }}>
          {heading}
        </Card.Title>
        <Card.Text style={{ fontSize: "1.5rem", textAlign: "center" }}>
          {value}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Stats;
