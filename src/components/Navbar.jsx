import React from "react";
import { GoSignOut } from "react-icons/go";
import { Navigate } from "react-router-dom";
const NavBar = ({ email, setisLoggedIn }) => {
  const signOut = () => {
    localStorage.removeItem("user");
    setisLoggedIn(false);
    console.log("hello world");
    return <Navigate to="/" replace />;
  };
  return (
    <nav>
      <div className="email-section">{/* <p>{email}</p> */}</div>
      <div className="email-section">
        <button className="btn-logout" onClick={signOut}>
          <GoSignOut />
          Signout
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
