"use client";

import React from "react";
import { StepState, StepReservation } from "../types/reservations";

import { stepConfigMap } from "../constants";

export const stepContext = React.createContext<StepState | undefined>(undefined);

export default function StepContext({ children }: { children: React.ReactNode }) {
  const [currentStep, setCurrentStep] = React.useState<StepReservation>("confirmation");

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

  return <stepContext.Provider value={values}>{children}</stepContext.Provider>;
}
