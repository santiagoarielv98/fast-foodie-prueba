import { UseFormReturn } from "react-hook-form";

import { FloatingLabel, Form } from "react-bootstrap";

import type { ReservationSchemaValues } from "../schemas/reservation-schema";

export interface ReserveFormProps {
  form: UseFormReturn<ReservationSchemaValues>;
}

export default function ReserveForm({ form }: ReserveFormProps) {
  return (
    <div>
      <FloatingLabel controlId="numberOfPeople" label="Number of people" className="mb-3">
        <Form.Select {...form.register("numberOfPeople")} isInvalid={!!form.formState.errors.numberOfPeople}>
          <option>Select</option>
          <option value="2">2 people</option>
          <option value="3">3 people</option>
          <option value="4">4 people</option>
          <option value="5">5 people</option>
          <option value="6">6 people</option>
        </Form.Select>
      </FloatingLabel>
      <FloatingLabel controlId="date" label="Date" className="mb-3">
        <Form.Select {...form.register("date")} isInvalid={!!form.formState.errors.numberOfPeople}>
          <option>Select</option>
          <option value="2022-01-01">January 1, 2022</option>
          <option value="2022-01-02">January 2, 2022</option>
          <option value="2022-01-03">January 3, 2022</option>
          <option value="2022-01-04">January 4, 2022</option>
          <option value="2022-01-05">January 5, 2022</option>
        </Form.Select>
      </FloatingLabel>
      <FloatingLabel controlId="time" label="Time" className="mb-3">
        <Form.Select {...form.register("time")} isInvalid={!!form.formState.errors.numberOfPeople}>
          <option>Select</option>
          <option value="12:00:00">12:00 PM</option>
          <option value="12:30:00">12:30 PM</option>
          <option value="13:00:00">1:00 PM</option>
          <option value="13:30:00">1:30 PM</option>
          <option value="14:00:00">2:00 PM</option>
        </Form.Select>
      </FloatingLabel>
      <FloatingLabel controlId="comment" label="Comment" className="mb-3">
        <Form.Control as="textarea" {...form.register("comment")} rows={3} className="h-100" />
      </FloatingLabel>
    </div>
  );
}
