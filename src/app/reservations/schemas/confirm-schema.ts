import { z } from "zod";
import { ContactSchema } from "./contact-schema";
import { ReservationSchema } from "./reservation-schema";

export const ConfirmSchema = z.object({}).merge(ContactSchema).merge(ReservationSchema);

export type ConfirmSchemaValues = z.infer<typeof ConfirmSchema>;
