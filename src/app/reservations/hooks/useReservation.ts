import React from "react";

import { reservationContext } from "../contexts/ReservationContext";

export default function useReservation() {
  const context = React.useContext(reservationContext);
  if (context === undefined) {
    throw new Error("useReservation must be used within a ReservationProvider");
  }
  return context;
}
