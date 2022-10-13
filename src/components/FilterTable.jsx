import Table from "react-bootstrap/Table";
import TableRow from "./TableRow";
const FilterTable = ({ filter, parts, headers, register, type }) => {
  return (
    <Table striped bordered hover size="md" className="filter-table">
      <thead>
        <tr>
          <th>All</th>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <TableRow
          heading={"HeatPump"}
          headers={headers}
          register={register}
          type={type}
        />
        <TableRow
          heading={"Stoves"}
          headers={headers}
          register={register}
          type={type}
        />
        <TableRow
          heading={"Ventilation"}
          headers={headers}
          register={register}
          type={type}
        />
        <TableRow
          heading={"Underfloor"}
          headers={headers}
          register={register}
          type={type}
        />
        <TableRow
          heading={"Oil & UF"}
          headers={headers}
          register={register}
          type={type}
        />
      </tbody>
    </Table>
  );
};

export default FilterTable;
