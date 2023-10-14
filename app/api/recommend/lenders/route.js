import clientPromise from "@/app/lib/dbConnect";

export async function GET(request) {
  const client = await clientPromise;
  const lenders = client.db("CollegeCoin").collection("lenders")
  
  Response.json({});
}
