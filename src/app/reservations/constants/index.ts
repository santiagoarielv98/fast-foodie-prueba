import type { StepConfigMap } from "../types/reservations";

export const stepConfigMap: StepConfigMap = {
  reservation: {
    title: "Table Reservation",
    backButtonLabel: "Cancel",
  },
  contact: {
    title: "Contact Information",
  },
  confirmation: {
    title: "Confirmation",
    confirmButtonLabel: "Confirm",
  },
};
