"use client";

import Link from "next/link";
import React from "react";

import Nav from "react-bootstrap/Nav";

export default function Navbar() {
  return (
    <header className="bg-body-tertiary py-2">
      <Nav variant="pills" defaultActiveKey="/" className="container">
        <Nav.Item>
          <Nav.Link as={Link} href="/">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} href="/reserve" eventKey="link-1">
            Create Reservation
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </header>
  );
}
