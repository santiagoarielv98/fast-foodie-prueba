import React from "react";
import StepContext from "./contexts/StepContext";

export default function ReservationLayout({ children }: { children: React.ReactNode }) {
  return <StepContext>{children}</StepContext>;
}
