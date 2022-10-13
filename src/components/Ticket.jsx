import { useState, useEffect } from "react";
import Installer from "./Installer";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import FillDataUser from "./FillDataUser";
import InsertTicket from "./InsertTicket";
import Details from "./Details";
import Filters from "./Filters";
import ShowInstaller from "../components/ShowInstaller";
import { MdSnippetFolder } from "react-icons/md";
import CustomModal from "./Modal";
const Ticket = ({
  user,
  heading,
  search,
  allTickets,
  filteredTickets,
  setFilteredTickets,
  role,
  ticketAdded,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [modal, setModal] = useState(false);
  const [modalHeading, setModalHeading] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleClose = () => {
    setModal(false);
  };
  const onSubmit = async (data) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/user/add-ticket/${user?.[0].user_id}`,
      {
        method: "POST",
        body: JSON.stringify({
          user_id: user[0]?.user_id,
          ...data,
        }),
        headers: {
          "content-type": "application/json",
        },
      }
    );
    if (response.status == 500) {
      setModal(true);
      setModalHeading("Error");
      setMessage("Internal Server Error");
    } else if (response.status == 412) {
      setModal(true);
      setModalHeading("Error");
      setMessage("Input data is incomplete");
    } else if (response.status == 201) {
      setModal(true);
      setModalHeading("Success");
      setMessage("Ticket added Successfully");
      ticketAdded(true);
      setSubmitted(true);
    }
  };
  useEffect(() => {
    reset();
  }, [submitted]);
  console.log(role);
  return (
    <>
      <main>
        <p className="heading">{heading}</p>

        <div className="top-section">
          <FillDataUser user={user?.[0]} />
          {role == "admin" && (
            <section className="table-container">
              <p className="heading-sub mb-3">Installers</p>
              <ShowInstaller singleUser={user} />
            </section>
          )}
        </div>
        <h3 className="m-3">All Tickets</h3>
        <Filters
          allTickets={allTickets}
          filteredTickets={filteredTickets}
          setFilteredTickets={setFilteredTickets}
        />

        <Details allTickets={filteredTickets} user={user} />
        <hr />
        {role == "admin" && (
          <>
            <h3 className="mb-3">Add Ticket</h3>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <InsertTicket register={register} errors={errors} reset={reset} />
            </Form>
          </>
        )}
        <hr />
      </main>
      <CustomModal
        modal={modal}
        handleClose={handleClose}
        message={message}
        modalHeading={modalHeading}
      />
    </>
  );
};

export default Ticket;
