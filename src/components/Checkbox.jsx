import React from "react";
import { Form } from "react-bootstrap";
const Checkbox = ({ heading, register, header, types }) => {
  return (
    <Form.Group className=" checkbox-table" controlId="checkbox">
      <Form.Check
        type="checkbox"
        {...register(
          `${types}_${heading.split(" ").join("").replace("&", "and")}_${header
            .split(" ")
            .join("")}`
        )}
      />
    </Form.Group>
  );
};

export default Checkbox;
