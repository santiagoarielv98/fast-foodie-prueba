"use client";

import ConfirmForm from "./components/form/ConfirmForm";
import ContactForm from "./components/form/ContactForm";
import ReservationForm from "./components/form/ReservationForm";
import useConfirm from "./hooks/useConfirm";
import useContact from "./hooks/useContact";
import useReservation from "./hooks/useReservation";
import useStep from "./hooks/useStep";

export default function ReservationIndexPage() {
  const { currentStep, currentStepConfig, onNext, onBack } = useStep();

  const reservationForm = useReservation({
    date: "2024-10-01",
    comments: "",
    numberOfPeople: 2,
    time: "08:00:00",
  });

  const contactForm = useContact({
    name: "Santiago",
    lastName: "Villanueva",
    email: "santiagovillanuevaariel@gmail.com",
    phone: "02202529223",
  });

  const confirmForm = useConfirm({ ...reservationForm.getValues(), ...contactForm.getValues() });

  const values = confirmForm.watch();

  const handleSubmit = () => {
    switch (currentStep) {
      case "reservation":
        return reservationForm.handleSubmit((values) => {
          console.log(values);
          onNext();
        });
      case "contact":
        return contactForm.handleSubmit((values) => {
          console.log(values);
          onNext();
        });
      case "confirmation":
        return confirmForm.handleSubmit((values) => {
          console.log(values);
          onNext();
        });
      default:
        return (ev: React.FormEvent) => ev.preventDefault();
    }
  };

  const handleCancel = (formSave: string) => {
    switch (formSave) {
      case "contact":
        const contactValues = contactForm.getValues();
        confirmForm.setValue("name", contactValues.name);
        confirmForm.setValue("lastName", contactValues.lastName);
        confirmForm.setValue("email", contactValues.email);
        confirmForm.setValue("phone", contactValues.phone);
    }
  };

  const handleSave = (formSave: string) => {
    switch (formSave) {
      case "contact":
        if (!confirmForm.formState.isValid) return false;
        contactForm.setValue("name", values.name);
        contactForm.setValue("lastName", values.lastName);
        contactForm.setValue("email", values.email);
        confirmForm.setValue("name", values.name);
        confirmForm.setValue("lastName", values.lastName);
        confirmForm.setValue("email", values.email);
        confirmForm.setValue("phone", values.phone);
        return true;
      default:
        return false;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case "reservation":
        return <ReservationForm register={reservationForm.register} errors={reservationForm.formState.errors} />;
      case "contact":
        return <ContactForm register={contactForm.register} errors={contactForm.formState.errors} />;
      case "confirmation":
        return (
          <ConfirmForm
            register={confirmForm.register}
            errors={confirmForm.formState.errors}
            values={{ ...confirmForm.getValues() }}
            onCancel={handleCancel}
            onSave={handleSave}
          />
        );
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
