import { UseFormReturn } from "react-hook-form";

import { FloatingLabel, Form, FormControl, InputGroup } from "react-bootstrap";

import type { ReservationSchemaValues } from "../schemas/reservation-schema";

export interface ReservationFormProps {
  form: UseFormReturn<ReservationSchemaValues>;
}

export default function ReservationForm({ form }: ReservationFormProps) {
  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Text>
          <i className="bi bi-people" />
        </InputGroup.Text>
        <Form.Select {...form.register("numberOfPeople")} isInvalid={!!form.formState.errors.numberOfPeople}>
          <option>Select number of people</option>
          <option value="2">2 people</option>
          <option value="3">3 people</option>
          <option value="4">4 people</option>
          <option value="5">5 people</option>
          <option value="6">6 people</option>
        </Form.Select>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text>
          <i className="bi bi-calendar" />
        </InputGroup.Text>
        <Form.Select {...form.register("date")} isInvalid={!!form.formState.errors.numberOfPeople}>
          <option>Select</option>
          <option value="2022-01-01">January 1, 2022</option>
          <option value="2022-01-02">January 2, 2022</option>
          <option value="2022-01-03">January 3, 2022</option>
          <option value="2022-01-04">January 4, 2022</option>
          <option value="2022-01-05">January 5, 2022</option>
        </Form.Select>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text>
          <i className="bi bi-clock" />
        </InputGroup.Text>
        <Form.Select {...form.register("time")} isInvalid={!!form.formState.errors.numberOfPeople}>
          <option>Select</option>
          <option value="12:00:00">12:00 PM</option>
          <option value="12:30:00">12:30 PM</option>
          <option value="13:00:00">1:00 PM</option>
          <option value="13:30:00">1:30 PM</option>
          <option value="14:00:00">2:00 PM</option>
        </Form.Select>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text className="align-items-start">
          <i className="bi bi-card-text" />
        </InputGroup.Text>
        <Form.Control as="textarea" {...form.register("comment")} rows={3} className="h-100" />
      </InputGroup>
    </div>
  );
}
