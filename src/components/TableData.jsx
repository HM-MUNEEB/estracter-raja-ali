import React from "react";
import Checkbox from "./Checkbox";
const TableData = ({ heading, register, header, type }) => {
  return (
    <td>
      <Checkbox
        heading={heading}
        register={register}
        header={header}
        types={type}
      />
    </td>
  );
};

export default TableData;
