import React from "react";
import { ConfirmationSchemaValues } from "./reserve/schemas/confirmation-schema";
import { WithId } from "mongodb";
import { Button, Table } from "react-bootstrap";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/reserve");
  const data: WithId<ConfirmationSchemaValues>[] = await res.json();

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id.toString()} className="align-middle">
              <td>{item.name}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>{item.date}</td>
              <td>{item.time}</td>
              <td className="d-flex gap-2">
                <Button variant="danger">
                  <i className="bi bi-trash"></i>
                </Button>
                <Button variant="primary">
                  <i className="bi bi-pencil"></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
