import { UseFormReturn } from "react-hook-form";

import { FloatingLabel, Form } from "react-bootstrap";

import type { ContactSchemaValues } from "../schemas/contact-schema";

export interface ContactFormProps {
  form: UseFormReturn<ContactSchemaValues>;
}

export default function ContactForm({ form }: ContactFormProps) {
  return (
    <div>
      <FloatingLabel controlId="name" label="Name" className="mb-3">
        <Form.Control {...form.register("name")} isInvalid={!!form.formState.errors.name} />
      </FloatingLabel>
      <FloatingLabel controlId="lastName" label="Last Name" className="mb-3">
        <Form.Control {...form.register("lastName")} isInvalid={!!form.formState.errors.lastName} />
      </FloatingLabel>
      <FloatingLabel controlId="email" label="Email" className="mb-3">
        <Form.Control {...form.register("email")} isInvalid={!!form.formState.errors.email} />
      </FloatingLabel>
      <FloatingLabel controlId="phone" label="Phone" className="mb-3">
        <Form.Control {...form.register("phone")} isInvalid={!!form.formState.errors.phone} />
      </FloatingLabel>
    </div>
  );
}
