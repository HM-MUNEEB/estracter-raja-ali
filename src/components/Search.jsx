import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import SearchForm from "./SearchForm";
import { useNavigate } from "react-router-dom";
import CustomModal from "./Modal";
const Search = ({ heading }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const parts = ["Heatpump", "Stoves", "Ventilation", "Underfloor", "Oil & UF"];
  const [modal, setModal] = useState(false);
  const handleClose = () => setModal(false);
  const [message, setMessage] = useState("");
  const [modalHeading, setModalHeading] = useState("");
  const onSubmit = async (data) => {
    let obj = removeEmpty(data);
    const user = await fetch(`${import.meta.env.VITE_API_URL}/user/search`, {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "content-type": "application/json",
      },
    });

    if (user.status == 200) {
      const u = await user.json();
      if (typeof user != "undefined") navigate(`/user/${u?.id}`);
    } else {
      setModal(true);
      setModalHeading("Error");
      setMessage("No user found!");
    }
  };

  const counties = [
    "Wexford",
    "Cork",
    "Waterford",
    "Kerry",
    "Tipperary",
    "Clare",
    "Limerick",
    "Carlow",
    "Kilkenny",
    "Loais",
    "Offaly",
    "Westmeath",
    "Meath",
    "Dublin",
    "Louth",
    "Longford",
    "Kildare",
    "Roscommon",
    "Mayo",
    "Galway",
    "Sligo",
    "Leitrim",
    "Cavan",
    "Monaghan",
    "Donegal",
    "Wicklow",
    "Down",
    "Derry",
    "Antrim",
    "Armagh",
    "Fermanagh",
    "Tyrone",
  ];

  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async () => {
      const rawData = await fetch(`${import.meta.env.VITE_API_URL}/user/all`);
      const returnedUsers = await rawData.json();
      setUsers(returnedUsers);
    })();
  }, []);
  function removeEmpty(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != ""));
  }
  return (
    <>
      <main>
        <p className="heading">{heading}</p>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h3>Search User</h3>
            <hr />
            <SearchForm
              counties={counties}
              register={register}
              errors={errors}
              users={users}
            />
          </div>
        </Form>
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

export default Search;
