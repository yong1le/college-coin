import Lender from "@/app/components/Lender";
import React from "react";
import { MongoClient } from "mongodb";

const user = "jayden@gmail.com";

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


const getLenders = async () => {
  const c = new MongoClient(process.env.MONGODB_URI);
  const clientPromise = c.connect();

  const client = await clientPromise;
  const db = client.db("CollegeCoin");
  const loaners = db.collection("loaners");

  const loan = await getLoanAmount(user, client);
  const creditScore = await getCreditScore(user, client);

  const results = [];
  let cursor;

  // If both are successful, send personalized results, otherwise, send all
  if (loan && creditScore) {
    cursor = loaners.find({
      minCredit: { $lte: creditScore },
      maxLoan: { $gte: loan },
    });
  } else {
    cursor = loaners.find({});
  }

  for await (const doc of cursor) {
    results.push(doc);
  }

  client.close();
  return results
};

const EligibleDashboard = async () => {
  const data = await getLenders();
  return (
    <div className="grid grid-cols-3 gap-6">
      {data.map((e, i) => (
        <Lender
          key={i}
          name={e.name}
          maxLoan={e.maxLoan}
          minCredit={e.minCredit}
          desc={e.desc}
          rate={e.rate}
          link={e.link}
          img={e.img}
        />
      ))}
    </div>
  );
};

export default EligibleDashboard;
