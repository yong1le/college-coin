import { MongoClient } from "mongodb";

export async function PUT(request) {
  const c = new MongoClient(process.env.MONGODB_URI);
  const clientPromise = c.connect();

  const client = await clientPromise;
  const applications = client.db("CollegeCoin").collection("applications");

  const body = await request.json();
  const email = body.email;
  const amount = body.amount;
  const purpose = body.purpose;

  await applications.updateOne(
    {
      loaneeEmail: email,
    },
    {
      $set: {
        amount: Number(amount),
        purpose: purpose,
      },
    },
  );

  client.close();
  return Response.json({ status: "success" });
}
