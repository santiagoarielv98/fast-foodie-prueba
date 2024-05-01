import React from "react";

import { UseFormReturn } from "react-hook-form";

import ContactForm from "./contact-form";
import MultiCollapseEdit from "./multi-collapse-edit";

import type { ConfirmationSchemaValues } from "../schemas/confirmation-schema";
import type { ContactSchemaValues } from "../schemas/contact-schema";

import { Button, FloatingLabel, Form } from "react-bootstrap";
import type { FormType } from "../types/step";

export interface ConfirmationFormProps {
  form: UseFormReturn<ConfirmationSchemaValues>;
  onClose?: () => void;
}

export default function ConfirmationForm({ form, onClose }: ConfirmationFormProps) {
  const [open, setOpen] = React.useState<boolean | FormType>(false);
  const values = form.getValues();

  const handleSave = (formtype: FormType) => {
    form.trigger().then((isValid) => {
      if (isValid) {
        handleToggle(formtype);
      }
    });
  };

  const handleToggle = (formtype: FormType) => {
    if (open === formtype) {
      setOpen(false);
    } else {
      setOpen(formtype);
    }
  };
  const handleClose = (formtype: FormType) => {
    onClose?.();
    handleToggle(formtype);
  };

  return (
    <div>
      <MultiCollapseEdit
        title="Contact"
        icon="bi-person"
        open={open === "contact"}
        closeRender={
          <div className="tw-ml-9">
            <small className="capitalize">
              {values.name} {values.lastName}
            </small>
            <br />
            <small>{values.email}</small>
            <br />
            <small>{values.phone}</small>
          </div>
        }
        onToggle={() => {
          handleClose("contact");
        }}
        openRender={
          <>
            <ContactForm form={form as unknown as UseFormReturn<ContactSchemaValues>} />
            <ActionButtons
              onSave={() => {
                handleSave("contact");
              }}
            />
          </>
        }
      />
      <MultiCollapseEdit
        title="Number of people"
        icon="bi-people"
        open={open === "numberOfPeople"}
        closeRender={<div className="tw-ml-9">{values.numberOfPeople} people</div>}
        onToggle={() => {
          handleClose("numberOfPeople");
        }}
        openRender={
          <>
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
            <ActionButtons onSave={() => handleSave("numberOfPeople")} />
          </>
        }
      />
      <MultiCollapseEdit
        title="Date and Time"
        icon="bi-calendar"
        open={open === "datetime"}
        closeRender={
          <div className="tw-ml-9">
            <small className="capitalize">
              {values.date} {values.time}
            </small>
          </div>
        }
        onToggle={() => {
          handleClose("datetime");
        }}
        openRender={
          <>
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
            <ActionButtons onSave={() => handleSave("datetime")} />
          </>
        }
      />
    </div>
  );
}
export interface ActionButtonsProps {
  onSave: () => void;
}

function ActionButtons({ onSave }: ActionButtonsProps) {
  return (
    <div className="d-flex gap-2">
      <Button variant="primary" type="submit" onClick={onSave}>
        Save
      </Button>
    </div>
  );
}
