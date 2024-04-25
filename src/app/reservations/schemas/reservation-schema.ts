import { z } from "zod";

export const ReservationSchema = z.object({
  numberOfPeople: z.number().int().positive(),
  date: z.string().date(),
  time: z.string().time(),
  comment: z.string().optional(),
});

export type ReservationSchemaValues = z.infer<typeof ReservationSchema>;
