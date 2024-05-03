import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormState, useForm } from "react-hook-form";

import { confirmationSchema, type ConfirmationSchemaValues } from "../schemas/confirmation-schema";
import { contactSchema, type ContactSchemaValues } from "../schemas/contact-schema";
import { reservationSchema, type ReservationSchemaValues } from "../schemas/reservation-schema";

import type { Step } from "../types/step";
import { useRouter } from "next/navigation";

const initialReservation: ConfirmationSchemaValues = {
  numberOfPeople: 0,
  date: "",
  time: "",
  comment: "",
  name: "",
  lastName: "",
  email: "",
  phone: "",
};

export default function useCreateReservation() {
  const router = useRouter();
  const [reservation, setReservation] = React.useState<ConfirmationSchemaValues>(initialReservation);
  const [step, setStep] = React.useState<Step>("reservation");

  const confirmationForm = useForm<ConfirmationSchemaValues>({
    resolver: zodResolver(confirmationSchema),
  });

  const reservationForm = useForm<ReservationSchemaValues>({
    resolver: zodResolver(reservationSchema),
  });

  const contactForm = useForm<ContactSchemaValues>({
    resolver: zodResolver(contactSchema),
  });

  const isDisabled = () => {
    switch (step) {
      case "reservation":
        return validateIsDisabled(reservationForm.formState);
      case "contact":
        return validateIsDisabled(contactForm.formState);
      case "confirmation":
        return validateIsDisabled(confirmationForm.formState);
    }
  };

  const nextStep = () => {
    switch (step) {
      case "reservation":
        return reservationForm.handleSubmit((values) => {
          const newValues = { ...reservation, ...values };
          setReservation(newValues);
          confirmationForm.reset(newValues);
          setStep("contact");
        });
      case "contact":
        return contactForm.handleSubmit((values) => {
          const newValues = { ...reservation, ...values };
          setReservation(newValues);
          confirmationForm.reset(newValues);
          setStep("confirmation");
        });
      case "confirmation":
        return confirmationForm.handleSubmit(async (values) => {
          const newValues = { ...reservation, ...values };
          setReservation(newValues);
          reservationForm.reset(newValues);
          contactForm.reset(newValues);
          await fetch("/api/reserve", { body: JSON.stringify(newValues), method: "POST" });
          router.push("/");
        });
    }
  };

  const prevStep = () => {
    switch (step) {
      case "reservation":
        break;
      case "contact":
        setStep("reservation");
        break;
      case "confirmation":
        setStep("contact");
        break;
    }
  };

  const cancelForm = () => {
    confirmationForm.reset(reservation);
  };

  return {
    confirmationForm,
    contactForm,
    reservationForm,
    step,

    cancelForm,
    isDisabled,
    nextStep,
    prevStep,
  };
}

function validateIsDisabled(formState: FormState<{}>) {
  return !formState.isValid || formState.isSubmitting;
}
