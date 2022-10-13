import Button from "react-bootstrap/Button";
import { Card, Table } from "react-bootstrap";

const FillDataUser = ({ user }) => {
  return (
    <div className="customer-details-form">
      <Card>
        <Card.Header>Information</Card.Header>
        <Card.Body>
          <Table striped bordered hover>
            <tbody>
              <tr>
                <td>Name</td>
                <td>{user?.name}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>{user?.phone || "--"}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{user?.email}</td>
              </tr>
              <tr>
                <td>Eircode</td>
                <td>{user?.eircode || "--"}</td>
              </tr>
              <tr>
                <td>Account Number</td>
                <td>{user?.account_number || "--"}</td>
              </tr>

              <tr>
                <td>County</td>
                <td>{user?.county || "--"}</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FillDataUser;
