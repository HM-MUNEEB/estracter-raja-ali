import { useState, useEffect } from "react";
import LoginPage from "./LoginPage";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./RegisterPage";
import Protected from "../components/Protected";
import Dashboard from "./dashboard";
import Lookup from "./Lookup";
import UpdateCostumer from "./UpdateCostumer";
import SearchedUser from "./SearchedUser";
import List from "./List";
import AddCustomer from "./AddCustomer";
import AddInstaller from "./AddInstaller";
const Pages = () => {
  const [isLoggedIn, setisLoggedIn] = useState(null);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")) || null);
    if (user == null) {
      setisLoggedIn(false);
    } else {
      setisLoggedIn(true);
    }
  }, [isLoggedIn]);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <LoginPage
              isLoggedIn={isLoggedIn}
              setisLoggedIn={setisLoggedIn}
              user={user}
            />
          }
        />

        <Route path="/register" element={<RegisterPage />} />
        {user?.role == "admin" && (
          <>
            <Route
              path="/add-customer"
              element={
                <Protected isLoggedIn={isLoggedIn}>
                  <AddCustomer
                    user={user}
                    heading={"Add Customer"}
                    setisLoggedIn={setisLoggedIn}
                  />
                </Protected>
              }
            ></Route>
            <Route
              path="/dashboard"
              element={
                <Protected isLoggedIn={isLoggedIn}>
                  <Dashboard
                    user={user}
                    heading={"Search Customer"}
                    setisLoggedIn={setisLoggedIn}
                  />
                </Protected>
              }
            />
            <Route
              path="/lookup"
              element={
                <Protected isLoggedIn={isLoggedIn}>
                  <Lookup
                    user={user}
                    heading={"Search Customer"}
                    setisLoggedIn={setisLoggedIn}
                  />
                </Protected>
              }
            ></Route>
            <Route
              path="/update-customer"
              element={
                <UpdateCostumer user={user} setisLoggedIn={setisLoggedIn} />
              }
            />
            <Route
              path="/user/:id"
              element={
                <Protected isLoggedIn={isLoggedIn}>
                  <SearchedUser user={user} setisLoggedIn={setisLoggedIn} />
                </Protected>
              }
            ></Route>
            <Route
              path="/list/:id"
              element={
                <Protected isLoggedIn={isLoggedIn}>
                  <List user={user} setisLoggedIn={setisLoggedIn} />
                </Protected>
              }
            ></Route>
            <Route
              path="/add-installer"
              element={
                <Protected isLoggedIn={isLoggedIn}>
                  <AddInstaller setisLoggedIn={setisLoggedIn} user={user} />
                </Protected>
              }
            ></Route>
          </>
        )}
        {user?.role == "user" && (
          <>
            <Route
              path={`/dashboard/:id`}
              element={
                <Protected isLoggedIn={isLoggedIn}>
                  <SearchedUser user={user} setisLoggedIn={setisLoggedIn} />
                </Protected>
              }
            ></Route>
            <Route
              path="/list/:id"
              element={
                <Protected isLoggedIn={isLoggedIn}>
                  <List user={user} setisLoggedIn={setisLoggedIn} />
                </Protected>
              }
            ></Route>
          </>
        )}
      </Routes>
    </>
  );
};

export default Pages;
