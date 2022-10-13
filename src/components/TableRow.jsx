import React from "react";
import TableData from "./TableData";
const TableRow = ({ heading, register, headers, type }) => {
  return (
    <tr>
      <td>{heading}</td>
      {headers.map((header, index) => (
        <TableData
          key={index}
          heading={heading}
          register={register}
          header={header}
          type={type}
        />
      ))}
    </tr>
  );
};

export default TableRow;
