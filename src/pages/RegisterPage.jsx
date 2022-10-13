import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../assets/LoginPage.css";
import { useForm } from "react-hook-form";
import ProgressBar from "react-bootstrap/ProgressBar";

const RegisterPage = () => {
  const [error, setError] = useState("");
  const [toggle, setModalToggle] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/user/register`,
        {
          method: "POST",
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            password: data.password,
            address: data.address,
            phone: data.phone,
            county: data.county,
            account_number: data.account_number,
          }),
          headers: {
            "content-type": "application/json",
          },
        }
      );
      const r = await response.json();
      if (r.status == 201) {
        setError("");
        navigate("/");
      } else {
        setError(r.error);

        setTimeout(() => {
          setError("");
        }, 5000);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container">
      <div className="form-group">
        <div className="wrapper">
          <h1>Sign Up</h1>
          <div>
            Already have an account? <Link to={"/"}>Sign In</Link>
          </div>
        </div>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="fullName">
            <Form.Label>
              Full Name: <sup>*</sup>
            </Form.Label>
            <Form.Control
              type="text"
              autoComplete="off"
              placeholder="e.g Jane Doe"
              {...register("name", {
                required: "This field is required",
                minLength: {
                  value: 3,
                  message: "Full name should be atleast 3 characters",
                },
              })}
            />
            <small>{errors?.name?.message}</small>
          </Form.Group>
          <Form.Group className="mb-3" controlId="address">
            <Form.Label>
              Address: <sup>*</sup>
            </Form.Label>
            <Form.Control
              type="text"
              autoComplete="off"
              placeholder="xyz"
              {...register("address", {
                required: "This field is required",
                minLength: {
                  value: 3,
                  message: "Adress should be atleast 3 characters",
                },
              })}
            />
            <small>{errors?.address?.message}</small>
          </Form.Group>
          <Form.Group className="mb-3" controlId="phone">
            <Form.Label>
              Phone: <sup>*</sup>
            </Form.Label>
            <Form.Control
              type="text"
              autoComplete="off"
              placeholder=""
              {...register("phone", {
                required: "This field is required",
                minLength: {
                  value: 3,
                  message: "Phone should be atleast 3 characters",
                },
              })}
            />
            <small>{errors?.phone?.message}</small>
          </Form.Group>
          <Form.Group className="mb-3" controlId="county">
            <Form.Label>
              county: <sup>*</sup>
            </Form.Label>
            <Form.Control
              type="text"
              autoComplete="off"
              placeholder=""
              {...register("county", {
                required: "This field is required",
                minLength: {
                  value: 3,
                  message: "county should be atleast 3 characters",
                },
              })}
            />
            <small>{errors?.country?.message}</small>
          </Form.Group>
          <Form.Group className="mb-3" controlId="account_number">
            <Form.Label>
              account_number: <sup>*</sup>
            </Form.Label>
            <Form.Control
              type="text"
              autoComplete="off"
              placeholder=""
              {...register("account_number", {
                required: "This field is required",
                minLength: {
                  value: 3,
                  message: "account_number should be atleast 3 characters",
                },
              })}
            />
            <small>{errors?.account_number?.message}</small>
          </Form.Group>
          <Form.Group className="mb-3" controlId="emailAddress">
            <Form.Label>
              Email address: <sup>*</sup>
            </Form.Label>
            <Form.Control
              type="text"
              autoComplete="off"
              placeholder="Email Address"
              {...register("email", {
                required: "This is required.",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            <small>{errors?.email?.message}</small>
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>
              Password: <sup>*</sup>
            </Form.Label>
            <Form.Control
              type="password"
              autoComplete="off"
              placeholder="Password"
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
            />
            <small>{errors?.password?.message}</small>
          </Form.Group>
          <Form.Group className="form-btn-container">
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form.Group>
        </Form>

        <p className="error-para">{error}</p>
      </div>
    </div>
  );
};

export default RegisterPage;
