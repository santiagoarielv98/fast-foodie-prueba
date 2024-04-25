import React from "react";

import { stepContext } from "../contexts/StepContext";

export default function useReservation() {
  const context = React.useContext(stepContext);
  if (context === undefined) {
    throw new Error("useReservation must be used within a ReservationProvider");
  }
  return context;
}
