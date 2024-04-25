import React from "react";
import ReservationContext from "./contexts/ReservationContext";

export default function ReservationLayout({ children }: { children: React.ReactNode }) {
  return <ReservationContext>{children}</ReservationContext>;
}
