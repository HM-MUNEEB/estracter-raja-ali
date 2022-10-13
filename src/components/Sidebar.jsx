import { useState } from "react";
import { FaWrench } from "react-icons/fa";
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineUserAdd,
  AiOutlineEdit,
} from "react-icons/ai";
import { GiGasStove, GiHeatHaze } from "react-icons/gi";
import { MdMiscellaneousServices, MdOutlinePaid } from "react-icons/md";
import avatar from "./../assets/profile.png";
import { Link } from "react-router-dom";

const Sidebar = ({ email, name, role, id }) => {
  const [activeLink, setActiveLink] = useState("home");
  return (
    <aside>
      <div className="brand-section">
        <FaWrench />
        <h1>Servicex</h1>
      </div>
      <div className="link-section">
        <p>Menu</p>
        <ul className="link-container">
          {role == "admin" && (
            <>
              <Link
                to={"/dashboard"}
                className="link-wrapper"
                onClick={() => setActiveLink("home")}
              >
                <li className="link">
                  <AiOutlineHome />
                  Home
                </li>
              </Link>

              <Link
                to={"/lookup"}
                className="link-wrapper"
                onClick={() => setActiveLink("lookup")}
              >
                <li className="link">
                  <AiOutlineSearch />
                  Lookup
                </li>
              </Link>

              <Link
                to={"/add-customer"}
                className="link-wrapper"
                onClick={() => setActiveLink("addCustomer")}
              >
                <li className="link">
                  <AiOutlineUserAdd />
                  Add Customer
                </li>
              </Link>
              <Link
                to={"/add-installer"}
                className="link-wrapper"
                onClick={() => setActiveLink("addCustomer")}
              >
                <li className="link">
                  <AiOutlineUserAdd />
                  Add Installer
                </li>
              </Link>
              <Link
                to={"/update-customer"}
                className="link-wrapper"
                onClick={() => setActiveLink("updateCustomer")}
              >
                <li className="link">
                  <AiOutlineEdit />
                  Update Customer
                </li>
              </Link>
            </>
          )}
          {role !== "admin" && (
            <>
              <Link
                to={`/dashboard/${id}`}
                className="link-wrapper"
                onClick={() => setActiveLink("home")}
              >
                <li className="link">
                  <AiOutlineHome />
                  Home
                </li>
              </Link>
            </>
          )}
          <hr className="breakline" />
          {/* <Link
            to={"/stove-parts"}
            className="link-wrapper"
            onClick={() => setActiveLink("stoveParts")}
          >
            <li className="link">
              <GiGasStove />
              Stove Parts
            </li>
          </Link>
          <Link
            to={"/heatpump-parts"}
            className="link-wrapper"
            onClick={() => setActiveLink("heatpumpParts")}
          >
            <li className="link">
              <GiHeatHaze />
              HeatPump Parts
            </li>
          </Link>
          <Link
            to={"/ooh"}
            className="link-wrapper"
            onClick={() => setActiveLink("ooh")}
          >
            <li className="link">
              <MdMiscellaneousServices />
              OOH
            </li>
          </Link>
          <Link
            to={"/unpaid"}
            className="link-wrapper"
            onClick={() => setActiveLink("unpaid")}
          >
            <li className="link">
              <MdOutlinePaid />
              Unpaid
            </li>
          </Link> */}
        </ul>
      </div>
      <hr />
      <div className="user-section">
        <img src={avatar} alt="" />
        <p>{name}</p>
      </div>
    </aside>
  );
};

export default Sidebar;
