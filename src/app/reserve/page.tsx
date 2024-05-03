"use client";

import useCreateReservation from "./hooks/useCreateReservation";

import { Button, Modal } from "react-bootstrap";
import ConfirmationForm from "./components/confirmation-form";
import ContactForm from "./components/contact-form";
import ReservationForm from "./components/reservation-form";

import type { StepConfig } from "./types/step";
import React from "react";

export const stepConfig: StepConfig = {
  reservation: {
    title: "Reservation",
    back: "Cancel",
  },
  contact: {
    title: "Contact",
  },
  confirmation: {
    title: "Confirmation",
    next: "Submit",
  },
};

export default function ReservePage() {
  const {
    reservationForm,
    contactForm,
    confirmationForm,
    step,
    show,
    cancelForm,
    isDisabled,
    nextStep,
    prevStep,
    closeModal,
    submitForm,
  } = useCreateReservation();

  const renderStep = () => {
    switch (step) {
      case "reservation":
        return <ReservationForm form={reservationForm} />;
      case "contact":
        return <ContactForm form={contactForm} />;
      case "confirmation":
        return <ConfirmationForm form={confirmationForm} onClose={cancelForm} />;
    }
  };

  return (
    <form onSubmit={nextStep()}>
      <div className="modal show" style={{ display: "block", position: "initial" }}>
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>{stepConfig[step].title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{renderStep()}</Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={prevStep}>
              {stepConfig[step].back ?? "Back"}
            </Button>
            <Button variant="primary" type="submit" disabled={isDisabled()}>
              {stepConfig[step].next ?? "Next"}
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Reservation Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Do you want to submit your reservation?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Cancel
          </Button>
          <Button variant="primary" type="submit" onClick={submitForm}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </form>
  );
}
