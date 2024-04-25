import { z } from "zod";

export const ReservationSchema = z.object({
  numberOfPeople: z.coerce.number().int().positive(),
  date: z.string().date(),
  time: z.string().time(),
  comments: z.string().optional(),
});

export type ReservationSchemaValues = z.infer<typeof ReservationSchema>;
