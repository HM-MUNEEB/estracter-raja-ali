import React from "react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import "./../assets/Dashboard.css";
const AddCustomer = ({ user, heading, setisLoggedIn }) => {
  return (
    <section className="grid">
      <Sidebar email={user?.email} name={user.name} role={user?.role} />
      <section className="section-two">
        <NavBar
          className="navbar"
          email={user?.email}
          setisLoggedIn={setisLoggedIn}
        />
        <Main className="main" heading={heading} search={true} />
      </section>
    </section>
  );
};

export default AddCustomer;
