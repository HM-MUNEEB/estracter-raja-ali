import { Table, Alert, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Details = ({ allTickets, user }) => {
  const navigate = useNavigate();
  return (
    <>
      {allTickets.length > 0 && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Date Entered</th>
              <th>Type</th>
              <th>Stage</th>
              <th>Stove/HP Type</th>
              <th>Comments</th>
              <th>Date Resolved</th>
            </tr>
          </thead>
          <tbody>
            {allTickets.map((ticket, index) => {
              return (
                <>
                  {index < 5 && (
                    <tr key={index}>
                      <td>{ticket?.date_entered}</td>
                      <td>{ticket?.type}</td>
                      <td>{ticket?.stage}</td>
                      <td>{ticket?.stove_hp_type}</td>
                      <td>{ticket?.comments}</td>
                      <td>{ticket?.date_resolved}</td>
                    </tr>
                  )}
                </>
              );
            })}
            <tr className="text-center">
              <td colSpan="6">
                <Button
                  variant="primary"
                  onClick={() =>
                    navigate(`/list/${user[0]?.user_id}`, {
                      state: [...allTickets],
                    })
                  }
                >
                  View Complete List
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      )}
      {allTickets.length == 0 && (
        <Alert variant="primary" key={1}>
          No data matches the filter
        </Alert>
      )}
    </>
  );
};

export default Details;
