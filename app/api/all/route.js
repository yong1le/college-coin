import { MongoClient } from "mongodb";

export async function GET() {
  const c = new MongoClient(process.env.MONGODB_URI);
  const clientPromise = c.connect();
  const client = await clientPromise;
  const db = client.db("CollegeCoin");
  const loaners = db.collection("loaners");

  const results = [];
  const cursor = loaners.find({});

  for await (const doc of cursor) {
    results.push(doc);
  }

  client.close()
  return Response.json(results);
}
