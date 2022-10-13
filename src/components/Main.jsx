import { useState, useEffect } from "react";
import CustomerForm from "./CustomerForm";
import Installer from "./Installer";
import FilterTable from "./FilterTable";
import { Form } from "react-bootstrap";
import { useForm, useFieldArray, useWatch } from "react-hook-form";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
const Main = ({ heading, search }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [filter, setFilter] = useState("servicing");
  const parts = ["Heatpump", "Stoves", "Ventilation", "Underfloor", "Oil & UF"];
  const [modal, setModal] = useState(false);
  const [modalHeading, setModalHeading] = useState("");
  const [message, setMessage] = useState("");
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });
  const handleClose = () => {
    setModal(false);
  };
  const [inputFields, setInputFields] = useState([{ name: "", phone: "" }]);

  const onSubmit = async (data) => {
    if (search == true) {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/user/add-user`,
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "content-type": "application/json",
          },
        }
      );
      if (response.status == 500) {
        setModal(true);
        setModalHeading("Error");
        setMessage("User with this email already exists");
      } else if (response.status == 412) {
        setModal(true);
        setModalHeading("Error");
        setMessage("Input data is incomplete");
      } else if (response.status == 201) {
        setModal(true);
        setModalHeading("Success");
        setMessage("User Created Successfully");
      }
    } else if (search == false) {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/user/search`,
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "content-type": "application/json",
          },
        }
      );
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
  return (
    <>
      <main>
        <p className="heading">{heading}</p>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="top-section">
            <CustomerForm
              counties={counties}
              search={search}
              register={register}
              errors={errors}
            />
            <section className="table-container">
              <p className="heading-sub mb-3">Installers</p>
              <Installer
                register={register}
                errors={errors}
                inputFields={inputFields}
                setInputFields={setInputFields}
                fields={fields}
                append={append}
                remove={remove}
              />
            </section>
          </div>
          {/* <Filters filter={filter} setFilter={setFilter} register={register} /> */}
          <h3>Servicing</h3>
          <hr />
          <FilterTable
            filter={filter}
            parts={parts}
            headers={[
              "Issue",
              "Phone Call",
              "Cosmetic",
              "Resolved",
              "Plumber Callout",
              "Service",
              "Commission",
            ]}
            register={register}
            type={"servicing"}
          />
          <hr />
          <h3>Sales</h3>
          <hr />
          <FilterTable
            filter={filter}
            parts={parts}
            headers={[
              "Enquiry",
              "Phone Call",
              "Survey",
              "Deposit Paid",
              "Sold",
              "Delivery",
              "Commission",
            ]}
            register={register}
            type={"sales"}
          />
        </Form>
      </main>
      <Modal show={modal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalHeading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Main;
