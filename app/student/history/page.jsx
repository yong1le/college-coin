import React from "react";
import { MongoClient } from "mongodb"

const user = "jayden@gmail.com";

const getHistory = async () => {
  const c = new MongoClient(process.env.MONGODB_URI);
  const clientPromise = c.connect();
  const client = await clientPromise;
  const db = client.db("CollegeCoin");
  const histories = db.collection("loan_history");

  const cursor = histories.find({
    loaneeEmail: user,
  });

  const results = [];
  for await (const doc of cursor) {
    results.push(doc);
  }

  client.close()
  return results
};

const LoanHistory = async () => {
  const data = await getHistory();
  return (
    <div className="grid grid-cols-3 gap-6">
      {data.map((e, i) => (
        <div key={i} className="flex flex-col rounded-xl bg-gradient-to-r from-orange-300 to-orange-200 p-10 transition-all hover:scale-105">
          <p className="text-3xl">{e.lenderName}</p>
          <p className="">Total Loan Amount: ${e.amount}</p>
          <p className="pb-4">Total Returned: ${e.received}</p>
          <p className="self-end">Still Owing: ${e.amount - e.received}</p>
        </div>
      ))}
    </div>
  );
};

export default LoanHistory;
