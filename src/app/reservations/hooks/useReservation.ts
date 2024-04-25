import { useForm } from "react-hook-form";
import { ReservationSchema, ReservationSchemaValues } from "../schemas/reservation-schema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function useReservation(defaultValues?: Partial<ReservationSchemaValues>) {
  return useForm<ReservationSchemaValues>({
    resolver: zodResolver(ReservationSchema),
    defaultValues,
  });
}
