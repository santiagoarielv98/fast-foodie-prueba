"use client";

import React from "react";
import { ReservationState, StepReservation } from "../types/reservations";

import { stepConfigMap } from "../constants";

export const reservationContext = React.createContext<ReservationState | undefined>(undefined);

export default function ReservationContext({ children }: { children: React.ReactNode }) {
  const [currentStep, setCurrentStep] = React.useState<StepReservation>("reservation");

  const handleSubmit = React.useCallback(() => {
    switch (currentStep) {
      case "reservation":
        setCurrentStep("contact");
        break;
      case "contact":
        setCurrentStep("confirmation");
        break;
    }
  }, [currentStep]);

  const handleCancel = React.useCallback(() => {
    switch (currentStep) {
      case "reservation":
        break;
      case "contact":
        setCurrentStep("reservation");
        break;
      case "confirmation":
        setCurrentStep("contact");
        break;
    }
  }, [currentStep]);

  const values = React.useMemo(
    () => ({
      currentStep,
      currentStepConfig: stepConfigMap[currentStep],
      onNext: handleSubmit,
      onBack: handleCancel,
    }),
    [currentStep, handleSubmit, handleCancel]
  );

  return <reservationContext.Provider value={values}>{children}</reservationContext.Provider>;
}
