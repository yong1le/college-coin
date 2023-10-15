import clientPromise from "@/app/lib/dbConnect";

export async function GET(req) {
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

  return Response.json(results);
}
