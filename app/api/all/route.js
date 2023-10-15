import clientPromise from "@/app/lib/dbConnect";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("CollegeCoin");
  const loaners = db.collection("loaners");

  const results = [];
  const cursor = loaners.find({});

  for await (const doc of cursor) {
    results.push(doc);
  }

  return Response.json(results);
}
