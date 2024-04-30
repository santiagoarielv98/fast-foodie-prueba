import { z } from "zod";
import { isMobilePhone } from "validator";

export const contactSchema = z.object({
  name: z.string().min(3).max(50),
  lastName: z.string().min(3).max(50),
  email: z.string().email(),
  phone: z.string().refine(isMobilePhone),
});

export type ContactSchemaValues = z.infer<typeof contactSchema>;
