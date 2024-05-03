import { ConfirmationSchemaValues } from "@/app/reserve/schemas/confirmation-schema";

import clientPromise from "@/lib/mongodb";

export async function POST(request: Request) {
  const res: ConfirmationSchemaValues = await request.json();
  const client = await clientPromise;

  const db = client.db();

  const collection = db.collection("reservations");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await collection.insertOne(res);

  return Response.json({ res });
}
