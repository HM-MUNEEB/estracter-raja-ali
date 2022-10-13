import { Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./../assets/LoginPage.css";
import { useForm } from "react-hook-form";

const LoginPage = ({ isLoggedIn, setisLoggedIn, user }) => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    console.log("change");
    if (isLoggedIn && user?.role == "admin" && user != null) {
      navigate("/dashboard");
    } else if (isLoggedIn && user?.role !== "admin" && user != null) {
      navigate(`/dashboard/${user.id}`);
    } else {
      navigate(`/`);
    }
  }, [isLoggedIn]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/user/login`, {
      method: "POST",
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const r = await response.json();
    if (r.status == 200) {
      const { token, email, name, role, id } = r;
      const userData = {
        token,
        email,
        name,
        role,
        id,
      };
      localStorage.setItem("user", JSON.stringify(userData));
      setisLoggedIn(true);
      return <Navigate to="/dashboard" replace></Navigate>;
    } else {
      setError(r?.error);

      setTimeout(() => {
        setError("");
      }, 10000);
    }
  };

  return (
    <div className="container">
      <div className="form-group">
        <div className="wrapper" style={{ marginTop: "2rem" }}>
          <h1>Sign In</h1>
          <div>
            Don't have an account? <Link to={"/register"}>Sign Up</Link>
          </div>
        </div>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              {...register("email", {
                required: "This is required.",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              type="text"
              autoComplete="off"
              placeholder="Email address"
            />
            <small>{errors?.email?.message}</small>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
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
              autoComplete="off"
              placeholder="Password"
            />
            <small>{errors?.password?.message}</small>
          </Form.Group>
          <Form.Group className="form-btn-container">
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form.Group>
        </Form>

        <p className="error-para ">{error}</p>
      </div>
    </div>
  );
};

export default LoginPage;
