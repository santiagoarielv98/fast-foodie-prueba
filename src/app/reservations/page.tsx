"use client";

import ConfirmForm from "./components/form/ConfirmForm";
import ContactForm from "./components/form/ContactForm";
import ReservationForm from "./components/form/ReservationForm";
import useContact from "./hooks/useContact";
import useReservation from "./hooks/useReservation";
import useStep from "./hooks/useStep";

export default function ReservationIndexPage() {
  const { currentStep, currentStepConfig, onNext, onBack } = useStep();

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

  const handleSubmit = () => {
    switch (currentStep) {
      case "reservation":
        return handleReservationSubmit((values) => {
          console.log(values);
          onNext();
        });
      case "contact":
        return handleContactSubmit((values) => {
          console.log(values);
          onNext();
        });
      default:
        return (ev: React.FormEvent) => ev.preventDefault();
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case "reservation":
        return <ReservationForm register={registerReservation} errors={reservationErrors} />;
      case "contact":
        return <ContactForm register={registerContact} errors={contactErrors} />;
      case "confirmation":
        return <ConfirmForm />;
    }
  };

  return (
    <div className="container">
      <h1>Reservations</h1>
      <div className="modal position-static d-block" tabIndex={-1} role="dialog">
        <div className="modal-dialog" role="form">
          <form className="modal-content rounded-4 shadow" onSubmit={handleSubmit()}>
            <div className="modal-header border-bottom-0">
              <h1 className="modal-title fs-5">{currentStepConfig.title}</h1>
            </div>
            <div className="modal-body py-0">{renderStep()}</div>
            <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">
              <button type="submit" className="btn btn-lg btn-primary">
                {currentStepConfig.confirmButtonLabel ?? "Next"}
              </button>
              <button type="button" className="btn btn-lg btn-secondary" data-bs-dismiss="modal" onClick={onBack}>
                {currentStepConfig.backButtonLabel ?? "Back"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
