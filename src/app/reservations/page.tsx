"use client";

import ContactForm from "./components/form/ContactForm";
import ReservationForm from "./components/form/ReservationForm";
import useReservation from "./hooks/useReservation";

export default function ReservationIndexPage() {
  const { currentStep, currentStepConfig, onNext, onBack } = useReservation();

  const renderStep = () => {
    switch (currentStep) {
      case "reservation":
        return <ReservationForm />;
      case "contact":
        return <ContactForm />;
      case "confirmation":
        return <></>;
    }
  };

  return (
    <div className="container">
      <h1>Reservations</h1>
      <div className="modal position-static d-block" tabIndex={-1} role="dialog">
        <div className="modal-dialog" role="form">
          <div className="modal-content rounded-4 shadow">
            <div className="modal-header border-bottom-0">
              <h1 className="modal-title fs-5">Table Reservation</h1>
            </div>
            <div className="modal-body py-0">{renderStep()}</div>
            <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">
              <button type="button" className="btn btn-lg btn-primary" onClick={onNext}>
                {currentStepConfig.confirmButtonLabel ?? "Next"}
              </button>
              <button type="button" className="btn btn-lg btn-secondary" data-bs-dismiss="modal" onClick={onBack}>
                {currentStepConfig.backButtonLabel ?? "Back"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
