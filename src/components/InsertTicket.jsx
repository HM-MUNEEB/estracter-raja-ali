import { useState } from "react";
import { Table, Form, Button } from "react-bootstrap";
import { IoMdAdd } from "react-icons/io";
import "./../assets/search.css";
const InsertTicket = ({ register, errors }) => {
  const [date, setDate] = useState(new Date());
  console.log(date);
  return (
    <>
      <Table responsive bordered hover>
        <thead>
          <tr>
            <th>Date Entered</th>
            <th>Type</th>
            <th>Stage</th>
            <th>Stove/HP Type</th>
            <th>Comments</th>
            <th>Date Resolved</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Form.Group className="mb-3" controlId="dateEntered">
                <Form.Control
                  type="date"
                  placeholder="Date Entered"
                  {...register("date_entered", {
                    required: "This field is required",
                    default: new Date(),
                  })}
                />
                <small>{errors?.date_entered?.message}</small>
              </Form.Group>
            </td>
            <td>
              <Form.Group className="mb-3" controlId="type">
                <Form.Select
                  aria-label="Type field"
                  {...register("type", {
                    required: "Type field is required",
                  })}
                >
                  <option value="Heatpump">Heatpump</option>
                  <option value="Stove">Stove</option>
                  <option value="Ventilation">Ventilation</option>
                  <option value="Underfloor">Underfloor</option>
                  <option value="Oil and UF">Oil and UF</option>
                  <option value="Contact">Contact</option>
                  <option value="Other">Other</option>
                </Form.Select>
                <small>{errors?.type?.message}</small>
              </Form.Group>
            </td>
            <td>
              <Form.Group className="mb-3" controlId="stage">
                <Form.Select
                  aria-label="Stage field"
                  {...register("stage", {
                    required: "Stage field is required",
                  })}
                >
                  <option value="Message">Message</option>
                  <option value="Enquiry">Enquiry</option>
                  <option value="Deposit Paid">Deposit Paid</option>
                  <option value="Survey">Survey</option>
                  <option value="Sold">Sold</option>
                  <option value="Install 1st Fix">Install 1st Fix</option>
                  <option value="Install 2nd Fix">Install 2nd Fix</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Commission">Commission</option>
                  <option value="Commission Done">CommDone</option>
                  <option value="Issue">Issue</option>
                  <option value="Service">Service</option>
                  <option value="Service Due">Service Due</option>
                  <option value="Part Order">Part Order</option>
                  <option value="Part Installed">Part Installed</option>
                  <option value="Resolved">Resolved</option>
                  <option value="Unpaid">Unpaid</option>
                  <option value="OOH">OOH</option>
                  <option value="Cosmetic">Cosmetic</option>
                  <option value="Plumber CallBack">Plumber CallBack</option>
                  <option value="Phone Support">Phone Support</option>
                  <option value="Serviced">Serviced</option>
                </Form.Select>
                <small>{errors?.stage?.message}</small>
              </Form.Group>
            </td>
            <td>
              <Form.Group className="mb-3" controlId="stove/hptype">
                <Form.Control
                  type="text"
                  placeholder="Enter Type"
                  {...register("stove_hp_type", {
                    required: "Stove/Hp field is required",
                  })}
                />
                <small>{errors?.stove_hp_type?.message}</small>
              </Form.Group>
            </td>
            <td>
              <Form.Group className="mb-3" controlId="comments">
                <Form.Control
                  type="text"
                  placeholder="Enter Comments"
                  {...register("comments", {
                    required: "Comments field is required",
                  })}
                />
                <small>{errors?.comments?.message}</small>
              </Form.Group>
            </td>
            <td>
              <Form.Group className="mb-3" controlId="dateResolved">
                <Form.Control
                  type="date"
                  placeholder="Date Resolved"
                  {...register("date_resolved", {
                    required: "Date field is required",
                  })}
                />
                <small>{errors?.date_resolved?.message}</small>
              </Form.Group>
            </td>
            <td>
              <Button variant="success" type="submit" className="btnSuccess">
                <IoMdAdd />
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default InsertTicket;
