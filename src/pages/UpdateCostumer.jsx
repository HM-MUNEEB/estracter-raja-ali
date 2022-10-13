import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React from "react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import "./../assets/Dashboard.css";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

const UpdateCostumer = ({ user, setisLoggedIn }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState([]);
  useEffect(() => {
    (async () => {
      const rawData = await fetch(`${import.meta.env.VITE_API_URL}/user/all`);
      const users = await rawData.json();
      setUsers(users);
    })();
  }, []);
  const filterUser = (data) => {
    let tempUser = [...users];
    const returnedUser = tempUser?.filter((item) =>
      item.name.toLowerCase().includes(data.toLowerCase())
    );
    setSingleUser(returnedUser);
  };
  const onSubmit = async (data) => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/user/update`, {
      method: "PUT",
      body: JSON.stringify({
        email: singleUser[0].email,
        ...data,
      }),
      headers: {
        "content-type": "application/json",
      },
    });
    const d = await res.json();
    if (d.status == 201) {
      alert("Updated User Successfully");
    } else {
      alert("Error Updating");
    }
  };
  return (
    <section className="grid">
      <Sidebar email={user.email} name={user.name} role={user?.role} />
      <section className="section-two">
        <NavBar
          className="navbar"
          email={user?.email}
          setisLoggedIn={setisLoggedIn}
        />
        <div className="container">
          <div className="form-group">
            <div className="wrapper">
              <h1>Update Customer</h1>
            </div>

            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  autoComplete="off"
                  placeholder="Username"
                  onChange={(e) => filterUser(e.target.value)}
                />
                <Form.Select aria-label="Selected users">
                  {singleUser?.map((user, index) => (
                    <option key={index}>{user.name}</option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Change Username</Form.Label>
                <Form.Control
                  type="text"
                  autoComplete="off"
                  placeholder="New Username"
                  {...register("name", {
                    required: "Username is required",
                  })}
                />
                <small>{errors?.name?.message}</small>
              </Form.Group>

              <Form.Label>Privilages</Form.Label>
              <Form.Group className="mb-3 privilages" controlId="priviliges">
                <span className="privilages">
                  <Form.Check
                    type="radio"
                    name="privilages"
                    value="admin"
                    {...register("privilages")}
                  />{" "}
                  Admin
                </span>
                <span className="privilages">
                  <Form.Check
                    type="radio"
                    name="privilages"
                    value="user"
                    {...register("privilages")}
                  />{" "}
                  User
                </span>
              </Form.Group>
              <Form.Group className="form-btn-container">
                <Button variant="primary" type="submit">
                  Update Customer
                </Button>
              </Form.Group>
            </Form>
          </div>
        </div>
      </section>
    </section>
  );
};

export default UpdateCostumer;
