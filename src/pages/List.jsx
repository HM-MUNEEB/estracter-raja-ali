import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import "./../assets/Dashboard.css";
import { useLocation, useParams } from "react-router-dom";
import TicketCard from "../components/TicketCard";
import UserCard from "../components/UserCard";
const List = ({ user, setisLoggedIn }) => {
  const { state } = useLocation();
  const { id } = useParams();
  const [singleUser, setUser] = useState(null);
  useEffect(() => {
    (async () => {
      const rawData = await fetch(
        `${import.meta.env.VITE_API_URL}/user/search/${id}`
      );
      const u = await rawData.json();
      console.log(u);
      setUser(u);
    })();
  }, []);
  return (
    <section className="grid">
      <Sidebar email={user.email} name={user.name} role={user?.role} />
      <section className="section-two">
        <NavBar
          className="navbar"
          email={user?.email}
          setisLoggedIn={setisLoggedIn}
        />
        <UserCard
          name={singleUser?.[0]?.name || "--"}
          email={singleUser?.[0]?.email || "--"}
          county={singleUser?.[0]?.county || "--"}
          address={singleUser?.[0]?.address || "--"}
          phone={singleUser?.[0]?.phone || "--"}
          account_number={singleUser?.[0]?.account_number || "--"}
        />
        <div className="flex">
          {state.map((ticket, index) => (
            <>
              <TicketCard
                date_resolved={ticket?.date_resolved}
                date_entered={ticket?.date_entered}
                type={ticket?.type}
                comments={ticket?.comments}
                stage={ticket?.stage}
                stove_hp_type={ticket?.stove_hp_type}
                index={index}
              />
            </>
          ))}
        </div>
      </section>
    </section>
  );
};

export default List;
