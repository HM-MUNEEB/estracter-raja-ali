import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

const CustomerForm = ({ counties, search, register, errors }) => {
  return (
    <div className="customer-details-form">
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          {...register("name", {
            required: "Name is required",
          })}
          type="text"
          placeholder="Customer Name"
        />
        <small>{errors?.name?.message}</small>
      </Form.Group>
      <Form.Group className="mb-3" controlId="phone">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          {...register("phone", {
            required: "Phone is required",
            pattern: {
              value: /^[0-9-]*$/,
              message: "Phone number can contain number and - only",
            },
          })}
          type="text"
          placeholder="Phone"
        />
        <small>{errors?.phone?.message}</small>
      </Form.Group>
      <Form.Group className="mb-3" controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control
          {...register("address", {
            required: "Address is required",
          })}
          as="textarea"
          rows={3}
        />
        <small>{errors?.address?.message}</small>
      </Form.Group>
      <Form.Group className="mb-3" controlId="customerName">
        <Form.Label>Eircode</Form.Label>
        <Form.Control
          {...register("eircode", {
            required: "Eircode is required",
          })}
          type="text"
          placeholder="Eircode"
        />
        <small>{errors?.eircode?.message}</small>
      </Form.Group>
      <Form.Group className="mb-3" controlId="accountNumber">
        <Form.Label>Account Number</Form.Label>
        <Form.Control
          {...register("account_number", {
            required: "Account number is required",
            pattern: {
              value: /^[0-9-]*$/,
              message: "Account number can contain number and - only",
            },
          })}
          type="text"
          placeholder="Account Number"
        />
        <small>{errors?.account_number?.message}</small>
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          {...register("email", {
            required: "Email is required.",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          type="text"
          placeholder="Enter Email"
        />
        <small>{errors?.email?.message}</small>
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Password</Form.Label>
        <Form.Control
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be atleast 8 characters",
            },
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              message: "Password must contain atleast 1 letter & 1 number",
            },
          })}
          type="password"
          placeholder="Enter Password"
        />
        <small>{errors?.password?.message}</small>
      </Form.Group>
      <Form.Group className="mb-3 " controlId="counties">
        <Form.Label>County</Form.Label>
        <Form.Select {...register("county")}>
          {counties.map((county, index) => (
            <option key={index}>{county}</option>
          ))}
        </Form.Select>
      </Form.Group>
      {search && (
        <Button variant="primary" type="submit">
          Add Customer
        </Button>
      )}
      {!search && (
        <Button variant="success" type="submit">
          Search
        </Button>
      )}
    </div>
  );
};

export default CustomerForm;
