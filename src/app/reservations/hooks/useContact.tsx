import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ContactSchema, ContactSchemaValues } from "../schemas/contact-schema";

export default function useContact(defaultValues?: Partial<ContactSchemaValues>) {
  return useForm<ContactSchemaValues>({
    resolver: zodResolver(ContactSchema),
    defaultValues,
  });
}
