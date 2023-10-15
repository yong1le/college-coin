import dbPromise from "@/app/lib/dbConnect";

export async function POST(request) {
  const client = await dbPromise;
  const db = client.db("CollegeCoin");
  const students = db.collection("loan_history");

  const formData = await request.formData();

  const lenderName = formData.get("lenderName");
  const loaneeEmail = formData.get("loaneeEmail");
  const received = formData.get("received");
  const amount = formData.get("amount");
  const interest = formData.get("interest");

  await students.insertOne({
    lenderName: lenderName,
    loaneeEmail: loaneeEmail,
    amount: Number(amount),
    received: Number(received),
    interest: Number(interest),
    date: Date.now()
  });

  return Response.json({});
}
