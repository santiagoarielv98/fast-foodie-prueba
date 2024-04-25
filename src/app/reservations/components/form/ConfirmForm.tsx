"use client";

import React from "react";

import { Button, Collapse, ListGroup } from "react-bootstrap";
import ContactForm from "./ContactForm";
import clsx from "clsx";
import useContact from "../../hooks/useContact";
import useReservation from "../../hooks/useReservation";

export default function ConfirmForm() {
  const [openContact, setOpenContact] = React.useState(false);
  const [openTableSize, setOpenTableSize] = React.useState(false);
  const [openTimeChoice, setOpenTimeChoice] = React.useState(false);

  const {
    register: registerReservation,
    formState: { errors: reservationErrors, isValid: isReservationValid },
    getValues: getReservationValues,
    handleSubmit: handleReservationSubmit,
  } = useReservation({
    date: "2024-10-01",
    comments: "",
    numberOfPeople: 2,
    time: "08:00:00",
  });

  const {
    register: registerContact,
    formState: { errors: contactErrors, isValid: isContactValid },
    getValues: getContactValues,
    handleSubmit: handleContactSubmit,
  } = useContact();

  const toggleContact = () => setOpenContact(!openContact);
  const toggleTableSize = () => setOpenTableSize(!openTableSize);
  const toggleTimeChoice = () => setOpenTimeChoice(!openTimeChoice);

  return (
    <div>
      <ListGroup>
        <ListGroup.Item>
          <div className="gap-3 d-flex position-relative align-items-center mb-2">
            <i className="bi bi-person fs-5"></i>
            <h5 className="flex-fill mb-0">Contact</h5>

            <Button
              variant={clsx(openContact ? "outline-danger" : "outline-primary")}
              size="sm"
              onClick={toggleContact}
            >
              {openContact ? <i className="bi bi-x"></i> : <i className="bi bi-pencil"></i>}
            </Button>
          </div>
          <Collapse in={!openContact}>
            <div className="tw-ml-9">
              <small>santiago villanueva</small>
              <br />
              <small>santiagoarielvillanueva@gmail.com</small>
              <br />
              <small>+54 2202 52 9223</small>
            </div>
          </Collapse>
          <Collapse in={openContact}>
            <div>
              <ContactForm register={registerContact} errors={contactErrors} />
              <Button variant="primary" size="lg" onClick={toggleContact} className="w-100">
                Save
              </Button>
            </div>
          </Collapse>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="gap-3 d-flex position-relative align-items-center mb-2">
            <i className="bi bi-person fs-5"></i>
            <h5 className="flex-fill mb-0">Table Size</h5>
            <Button
              variant={clsx(openTableSize ? "outline-danger" : "outline-primary")}
              size="sm"
              onClick={toggleTableSize}
            >
              {openTableSize ? <i className="bi bi-x"></i> : <i className="bi bi-pencil"></i>}
            </Button>
          </div>
          <Collapse in={!openTableSize}>
            <div className="tw-ml-9">
              <small>6 Persons</small>
            </div>
          </Collapse>
          <Collapse in={openTableSize}>
            <div>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-people"></i>
                </span>
                <select id="numberOfPeople" className="form-select">
                  <option value=""> Select number of people </option>
                  <option value="2">2 persons</option>
                  <option value="3">3 persons</option>
                  <option value="4">4 persons</option>
                  <option value="5">5 persons</option>
                  <option value="6">6 persons</option>
                </select>
                <div className="invalid-feedback">Please select the number of people</div>
              </div>
            </div>
          </Collapse>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="gap-3 d-flex position-relative align-items-center mb-2">
            <i className="bi bi-person fs-5"></i>
            <h5 className="flex-fill mb-0">Avarible Time Choice</h5>
            <Button
              variant={clsx(openTimeChoice ? "outline-danger" : "outline-primary")}
              size="sm"
              onClick={toggleTimeChoice}
            >
              {openTimeChoice ? <i className="bi bi-x"></i> : <i className="bi bi-pencil"></i>}
            </Button>
          </div>
          <Collapse in={!openTimeChoice}>
            <div className="tw-ml-9">
              <small>Ocotber 1, 2024 - 8:00 AM</small>
            </div>
          </Collapse>
          <Collapse in={openTimeChoice}>
            <div>
              <div className="mb-2">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-calendar"></i>
                  </span>
                  <select id="select" className="form-select">
                    <option value=""> Select date </option>
                    <option value="2024-10-01">October 1, 2024</option>
                    <option value="2024-10-02">October 2, 2024</option>
                    <option value="2024-10-03">October 3, 2024</option>
                    <option value="2024-10-04">October 4, 2024</option>
                    <option value="2024-10-05">October 5, 2024</option>
                  </select>
                  <div className="invalid-feedback">Please select the date</div>
                </div>
              </div>
              <div>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-clock"></i>
                  </span>
                  <select id="time" className="form-select">
                    <option value=""> Select time</option>
                    <option value="08:00">8:00 AM</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                  </select>
                  <div className="invalid-feedback">Please select the time</div>
                </div>
              </div>
            </div>
          </Collapse>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
