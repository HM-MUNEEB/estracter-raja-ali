import { Button, Form } from "react-bootstrap";
import "./../assets/LoginPage.css";

const InstallerAdd = ({ errors, register, handleSubmit, onSubmit }) => {
  return (
    <div className="container">
      <div className="form-group">
        <div className="wrapper">
          <h1>Add Installer</h1>
        </div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Installer Name</Form.Label>
            <Form.Control
              {...register("installer", {
                required: "This is required.",
              })}
              type="text"
              autoComplete="off"
              placeholder="Installer Name"
            />
            <small>{errors?.installer?.message}</small>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Number</Form.Label>
            <Form.Control
              {...register("number", {
                required: "Number is required",
                pattern: {
                  value: /^[0-9-]*$/,
                  message: "Number can contain number and - only",
                },
              })}
              type="text"
              autoComplete="off"
              placeholder="Number"
            />
            <small>{errors?.number?.message}</small>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Area Covered</Form.Label>
            <Form.Control
              {...register("area_covered", {
                required: "This is required.",
              })}
              type="text"
              autoComplete="off"
              placeholder="Area Covered"
            />
            <small>{errors?.area_covered?.message}</small>
          </Form.Group>
          <Form.Group className="form-btn-container">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default InstallerAdd;
