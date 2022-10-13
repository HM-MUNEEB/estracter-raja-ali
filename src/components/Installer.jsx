import { useState, useEffect } from "react";
import { Table, Form, Button } from "react-bootstrap";
import { IoMdAdd } from "react-icons/io";
import { IoIosRemove } from "react-icons/io";
const Installer = ({ register, errors, fields, append, remove }) => {
  const [allInstallers, setAllInstallers] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/user/all-installer`
      );
      const d = await response.json();
      setAllInstallers(d);
    })();
  }, []);

  return (
    <Table striped bordered hover size="sm" className="table-installer">
      <thead>
        <tr>
          <th>Installer</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        <>
          {fields.map(({ id, installer }, index) => {
            return (
              <>
                <tr>
                  <td>
                    <Form.Group
                      className="mb-3"
                      controlId="dateEntered"
                    ></Form.Group>
                    <Form.Select
                      type="date"
                      aria-label="Installer input"
                      key={id}
                      {...register(`items[${index}].installer`)}
                      defaultValue={installer}
                    >
                      {allInstallers.map((installer, indexx) => (
                        <option key={indexx} value={installer.id}>
                          {installer.installer}
                        </option>
                      ))}
                    </Form.Select>
                  </td>
                  <td className="tableRow">
                    <Button
                      className="mx-1"
                      variant="danger"
                      onClick={() => remove(index)}
                    >
                      <IoIosRemove />
                    </Button>
                  </td>
                </tr>
              </>
            );
          })}
          <tr>
            <td className="tableRow" colSpan="3">
              <Button
                variant="success"
                type="button"
                onClick={() => append({})}
              >
                <IoMdAdd />
              </Button>
            </td>
          </tr>
        </>
      </tbody>
    </Table>
  );
};

export default Installer;
