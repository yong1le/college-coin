import clientPromise from "@/app/lib/dbConnect";

export async function GET(request) {
  const client = await clientPromise;
  const students = client.db("CollegeCoin").collection("students")
  
  Response.json({});
}
