import clientPromise from "@/app/lib/dbConnect";

export async function POST(request) {
  const client = await clientPromise;
  const lenders = client.db("CollegeCoin").collection("lenders")
  
  Response.json({});
}
