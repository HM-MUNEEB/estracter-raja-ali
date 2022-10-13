import React from "react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import { useParams } from "react-router-dom";
import "./../assets/Dashboard.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import Ticket from "../components/Ticket";

const SearchedUser = ({ user, setisLoggedIn }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { id } = useParams();
  const [allTickets, setAllTickets] = useState([]);
  const [singleUser, setSingleUser] = useState(null);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    (async () => {
      const rawData = await fetch(
        `${import.meta.env.VITE_API_URL}/user/search/${id}`
      );
      const u = await rawData.json();
      setSingleUser(u);
      const rData = await fetch(
        `${import.meta.env.VITE_API_URL}/user/get-ticket-details/${id}`
      );
      const allTicketsData = await rData.json();
      setAllTickets(allTicketsData);
      setFilteredTickets(allTicketsData);
    })();
  }, [submitted]);
  return (
    <section className="grid">
      <Sidebar
        email={user.email}
        name={user.name}
        role={user?.role}
        id={user?.id}
      />
      <section className="section-two">
        <NavBar
          className="navbar"
          email={user?.email}
          setisLoggedIn={setisLoggedIn}
        />
        <Ticket
          ticketAdded={setSubmitted}
          role={user?.role}
          user={singleUser}
          register={register}
          errors={errors}
          allTickets={allTickets}
          filteredTickets={filteredTickets}
          setFilteredTickets={setFilteredTickets}
        />
      </section>
    </section>
  );
};

export default SearchedUser;
