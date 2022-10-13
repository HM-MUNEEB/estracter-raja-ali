import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import Stats from "../components/Stats";
import "./../assets/Dashboard.css";
const dashboard = ({ user, heading, setisLoggedIn }) => {
  const [stats, setStats] = useState({});
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    (async () => {
      const rawData = await await fetch(
        `${import.meta.env.VITE_API_URL}/user/stats`
      );
      const d = await rawData.json();
      setStats(d);
    })();
  }, []);
  return (
    <section className="grid">
      <Sidebar email={user?.email} name={user.name} role={user?.role} />
      <section className="section-two">
        <NavBar
          className="navbar"
          email={user?.email}
          setisLoggedIn={setisLoggedIn}
        />
        <div className="flex">
          <Stats heading="Admin" value={stats.admin} cls="bg-primary" />
          <Stats heading="User" value={stats.user} cls="bg-success" />
          <Stats heading="Tickets" value={stats.tickets} cls="bg-danger" />
        </div>
      </section>
    </section>
  );
};

export default dashboard;
