"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Nav from "react-bootstrap/Nav";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="bg-body-tertiary py-2">
      <Nav variant="pills" defaultActiveKey={pathname} className="container">
        <Nav.Item>
          <Nav.Link as={Link} href="/">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} href="/reserve">
            Create Reservation
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </header>
  );
}
