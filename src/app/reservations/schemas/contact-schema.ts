import { z } from "zod";

import { isMobilePhone } from "validator";

export const ContactSchema = z.object({
  name: z.string().min(2),
  lastName: z.string().optional(),
  email: z.string().email(),
  phone: z.string().refine(isMobilePhone),
});

export type ContactSchemaValues = z.infer<typeof ContactSchema>;
