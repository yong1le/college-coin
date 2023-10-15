import clientPromise from "@/app/lib/dbConnect";

export async function PUT(request) {
  const client = await clientPromise;
  const applications = client.db("CollegeCoin").collection("applications");

  const form = await request.formData();
  const amount = form.get("amount");
  const purpose = form.get("purpose");

  const result = await applications.updateOne(
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

  Response.json(result);
}
