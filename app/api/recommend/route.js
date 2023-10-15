import clientPromise from "@/app/lib/dbConnect";

const getLoanAmount = async (email, client) => {
  const db = client.db("CollegeCoin");
  const application = db.collection("applications");

  const app = await application.findOne({
    loaneeEmail: email,
  });

  if (app && app.amount) {
    return app.amount;
  }
  return null;
};

const getCreditScore = async (email, client) => {
  const db = client.db("CollegeCoin");
  const students = db.collection("students");

  const student = await students.findOne({
    email: email,
  });

  if (student && student.credit) {
    return student.credit;
  }
};

export async function GET(request) {
  const client = await clientPromise;
  const db = client.db("CollegeCoin");
  const loaners = db.collection("loaners");

  const params =request.nextUrl.searchParams;
  const email = params.get("email");

  const loan = await getLoanAmount(email, client);
  const creditScore = await getCreditScore(email, client);

  const results = [];
  let cursor;

  // If both are successful, send personalized results, otherwise, send all
  if (loan && creditScore) {
    cursor = loaners.find({
      minCredit: { $le: creditScore },
      maxLoan: { $ge: loan },
    });
  } else {
    cursor = loaners.find({});
  }

  for await (const doc of cursor) {
    results.push(doc);
  }

  return Response.json(results);
}
