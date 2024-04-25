"use client";

import React from "react";

import { Button, Collapse, ListGroup } from "react-bootstrap";
import ContactForm from "./ContactForm";

export default function ConfirmForm() {
  const [openContact, setOpenContact] = React.useState(false);

  const toggleContact = () => setOpenContact(!openContact);

  return (
    <div>
      <ListGroup>
        <ListGroup.Item>
          <div className="gap-3 d-flex position-relative align-items-center mb-2">
            <i className="bi bi-person fs-5"></i>
            <h5 className="flex-fill mb-0">Contact</h5>

            <Button variant="outline-primary" size="sm" onClick={toggleContact}>
              <i className="bi bi-pencil"></i>
            </Button>
          </div>
          <Collapse in={!openContact}>
            <div className="tw-ml-9">
              <small>santiago villanueva</small>
              <br />
              <small>santiagoarielvillanueva@gmail.com</small>
              <br />
              <small>+54 2202 52 9223</small>
            </div>
          </Collapse>
          <Collapse in={openContact}>
            <ContactForm />
          </Collapse>
        </ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </div>
  );
}
