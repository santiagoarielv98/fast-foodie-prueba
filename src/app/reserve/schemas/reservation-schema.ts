import { date, z } from "zod";

export const reservationSchema = z.object({
  numberOfPeople: z.coerce.number().int().positive(),
  date: z.string().date(),
  time: z.string().time(),
  comment: z.string().max(255).optional(),
});

export type ReservationSchemaValues = z.infer<typeof reservationSchema>;
