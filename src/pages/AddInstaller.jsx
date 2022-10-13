import { Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./../assets/LoginPage.css";
import { useForm } from "react-hook-form";
import InstallerAdd from "../components/InstallerAdd";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import CustomModal from "../components/Modal";
const AddInstaller = ({ user, setisLoggedIn }) => {
  // modal = { modal };
  // handleClose = { handleClose };
  // message = { message };
  // modalHeading = { modalHeading };
  const [modal, setModal] = useState(false);
  const handleClose = () => setModal(false);
  const [message, setMessage] = useState("");
  const [modalHeading, setModalHeading] = useState("");
  useEffect(() => {}, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/user/add-installer`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status == 201) {
      setModal(true);
      setModalHeading("Success");
      setMessage("Installer added successfully");
    } else {
      setModal(true);
      setModalHeading("Error");
      setMessage("Error inserting installer");
    }
  };

  return (
    <>
      <section className="grid">
        <Sidebar email={user?.email} name={user.name} role={user?.role} />
        <section className="section-two">
          <NavBar
            className="navbar"
            email={user?.email}
            setisLoggedIn={setisLoggedIn}
          />
          <InstallerAdd
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmit}
          />
        </section>
      </section>
      <CustomModal
        modal={modal}
        handleClose={handleClose}
        message={message}
        modalHeading={modalHeading}
      />
    </>
  );
};

export default AddInstaller;
