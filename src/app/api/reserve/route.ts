import { ConfirmationSchemaValues } from "@/app/reserve/schemas/confirmation-schema";
import {} from "mongodb";

import clientPromise from "@/lib/mongodb";

export async function GET() {
  const client = await clientPromise;

  const db = client.db();

  const collection = db.collection("reservations");
  const res = await collection.find().toArray();

  return Response.json(res);
}
export async function POST(request: Request) {
  const res: ConfirmationSchemaValues = await request.json();
  const client = await clientPromise;

  const db = client.db();

  const collection = db.collection("reservations");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await collection.insertOne(res);

  return Response.json(res);
}
