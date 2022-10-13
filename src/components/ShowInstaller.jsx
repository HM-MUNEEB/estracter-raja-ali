import { useState, useEffect } from "react";
import { Table, Form, Button } from "react-bootstrap";
const ShowInstaller = ({ singleUser }) => {
  useEffect(() => {}, []);
  console.log(singleUser?.installer);
  return (
    <>
      {singleUser?.[0]?.installers != "" && (
        <Table striped bordered hover size="sm" className="table-installer">
          <thead>
            <tr>
              <th>Installer</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            <>
              {singleUser?.installer.map((inst) => (
                <tr>
                  <>
                    <td>{inst.installer || "--"}</td>
                    <td>{inst.number || "--"}</td>
                  </>
                </tr>
              ))}
            </>
          </tbody>
        </Table>
      )}
      {singleUser?.[0]?.installers == "" && <p>No Installers</p>}
    </>
  );
};

export default ShowInstaller;
