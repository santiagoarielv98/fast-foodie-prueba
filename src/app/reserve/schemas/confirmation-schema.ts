import { z } from "zod";

import { contactSchema } from "./contact-schema";
import { reservationSchema } from "./reservation-schema";

export const confirmationSchema = z.object({}).merge(reservationSchema).merge(contactSchema);

export type ConfirmationSchemaValues = z.infer<typeof confirmationSchema>;
