import { MongoClient } from "mongodb";
export async function GET(req) {
  const c = new MongoClient(process.env.MONGODB_URI);
  const clientPromise = c.connect();
  const client = await clientPromise;
  const db = client.db("CollegeCoin");
  const histories = db.collection("loan_history");

  const params = req.nextUrl.searchParams;
  const email = params.get("email");

  const cursor = histories.find({
    loaneeEmail: email,
  });

  const results = [];
  for await (const doc of cursor) {
    results.push(doc);
  }

  client.close()
  return Response.json(results);
}
