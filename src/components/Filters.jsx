import React from "react";
import { Form } from "react-bootstrap";
const Filters = ({ filteredTickets, allTickets, setFilteredTickets }) => {
  const filterData = (str) => {
    if (str == "all") return setFilteredTickets(allTickets);
    const tempArr = [...allTickets];
    let arr = tempArr.filter((ticket) =>
      ticket?.stage?.toLowerCase().includes(str.toLowerCase())
    );
    setFilteredTickets(arr);
  };
  return (
    <Form.Select aria-label="Stage field" className="mb-3">
      <option onClick={(e) => filterData(e.target.value)} value="all">
        All
      </option>
      <option onClick={(e) => filterData(e.target.value)} value="Message">
        Message
      </option>
      <option onClick={(e) => filterData(e.target.value)} value="Enquiry">
        Enquiry
      </option>
      <option onClick={(e) => filterData(e.target.value)} value="Deposit Paid">
        Deposit Paid
      </option>
      <option onClick={(e) => filterData(e.target.value)} value="Survey">
        Survey
      </option>
      <option onClick={(e) => filterData(e.target.value)} value="Sold">
        Sold
      </option>
      <option
        onClick={(e) => filterData(e.target.value)}
        value="Install 1st Fix"
      >
        Install 1st Fix
      </option>
      <option
        onClick={(e) => filterData(e.target.value)}
        value="Install 2nd Fix"
      >
        Install 2nd Fix
      </option>
      <option onClick={(e) => filterData(e.target.value)} value="Delivered">
        Delivered
      </option>
      <option onClick={(e) => filterData(e.target.value)} value="Commission">
        Commission
      </option>
      <option
        onClick={(e) => filterData(e.target.value)}
        value="Commission Done"
      >
        CommDone
      </option>
      <option onClick={(e) => filterData(e.target.value)} value="Issue">
        Issue
      </option>
      <option onClick={(e) => filterData(e.target.value)} value="Service">
        Service
      </option>
      <option onClick={(e) => filterData(e.target.value)} value="Service Due">
        Service Due
      </option>
      <option onClick={(e) => filterData(e.target.value)} value="Part Order">
        Part Order
      </option>
      <option
        onClick={(e) => filterData(e.target.value)}
        value="Part Installed"
      >
        Part Installed
      </option>
      <option onClick={(e) => filterData(e.target.value)} value="Resolved">
        Resolved
      </option>
      <option onClick={(e) => filterData(e.target.value)} value="Unpaid">
        Unpaid
      </option>
      <option onClick={(e) => filterData(e.target.value)} value="OOH">
        OOH
      </option>
      <option onClick={(e) => filterData(e.target.value)} value="Cosmetic">
        Cosmetic
      </option>
      <option
        onClick={(e) => filterData(e.target.value)}
        value="Plumber CallBack"
      >
        Plumber CallBack
      </option>
      <option onClick={(e) => filterData(e.target.value)} value="Phone Support">
        Phone Support
      </option>
      <option onClick={(e) => filterData(e.target.value)} value="Serviced">
        Serviced
      </option>
    </Form.Select>
  );
};

export default Filters;
