import React from "react";
import { Accordion, Table } from "react-bootstrap";
const UserCard = ({ name, email, phone, address, county, account_number }) => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>{name}</Accordion.Header>
        <Accordion.Body>
          <Table striped responsive bordered>
            <tbody>
              <tr>
                <td>Email</td>
                <td>{email}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>{phone}</td>
              </tr>
              <tr>
                <td>address</td>
                <td>{address}</td>
              </tr>
              <tr>
                <td>County</td>
                <td>{county}</td>
              </tr>
              <tr>
                <td>account_number</td>
                <td>{account_number}</td>
              </tr>
            </tbody>
          </Table>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default UserCard;
