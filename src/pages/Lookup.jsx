import React from "react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import Search from "../components/Search";
import "./../assets/Dashboard.css";
const Lookup = ({ user, heading, setisLoggedIn }) => {
  return (
    <section className="grid">
      <Sidebar email={user.email} name={user.name} role={user?.role} />
      <section className="section-two">
        <NavBar
          className="navbar"
          email={user?.email}
          setisLoggedIn={setisLoggedIn}
        />
        <Search />
      </section>
    </section>
  );
};

export default Lookup;
