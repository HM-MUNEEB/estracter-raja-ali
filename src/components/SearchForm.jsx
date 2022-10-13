import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./../assets/search.css";
const SearchForm = ({ counties, register, errors, users }) => {
  const [singleUser, setSingleUser] = useState([]);
  const filterUser = (str) => {
    const returnedUser = users.filter((user) =>
      user?.name.toLowerCase()?.includes(str.toLowerCase())
    );
    setSingleUser(returnedUser);
  };

  return (
    <div>
      <Form.Group className="mb-3 row" controlId="name">
        <div className="col-4">
          <Form.Label>Name</Form.Label>
          <Form.Control
            {...register("name", {
              required: "Name is required",
            })}
            type="text"
            placeholder="Customer Name"
            list="users"
            onChange={(e) => filterUser(e.target.value)}
          />
          <datalist>
            {singleUser.map((user, index) => (
              <option user={user} key={index} className="data">
                {user.name}
              </option>
            ))}
          </datalist>
          <small>{errors?.name?.message}</small>
        </div>
        <div className="col-4">
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
        </div>
      </Form.Group>
      <Form.Group className="mb-3 row" controlId="phone">
        <div className="col-4">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            {...register("phone")}
            type="text"
            placeholder="Phone"
          />
          <small>{errors?.phone?.message}</small>
        </div>
        <div className="col-4">
          <Form.Group className="mb-3" controlId="customerName">
            <Form.Label>Eircode</Form.Label>
            <Form.Control
              {...register("eircode")}
              type="text"
              placeholder="Eircode"
            />
            <small>{errors?.eircode?.message}</small>
          </Form.Group>
        </div>
      </Form.Group>
      <Form.Group className="mb-3 col-4" controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control {...register("address")} as="textarea" rows={3} />
        <small>{errors?.address?.message}</small>
      </Form.Group>

      <Form.Group className="mb-3 col-4" controlId="accountNumber">
        <Form.Label>Account Number</Form.Label>
        <Form.Control
          {...register("account_number")}
          type="text"
          placeholder="Account Number"
        />
        <small>{errors?.account_number?.message}</small>
      </Form.Group>

      {/* <Form.Group className="mb-3 col-4" controlId="counties">
        <Form.Label>County</Form.Label>
        <Form.Select {...register("county")}>
          {counties.map((county, index) => (
            <option key={index}>{county}</option>
          ))}
        </Form.Select>
      </Form.Group> */}

      <Button variant="success" type="submit">
        Search
      </Button>
    </div>
  );
};

export default SearchForm;
