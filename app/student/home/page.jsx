import Lender from "@/app/components/Lender";
import React from "react";
import { MongoClient } from "mongodb"

const getLenders = async () => {
  const c = new MongoClient(process.env.MONGODB_URI);
  const clientPromise = c.connect();
  const client = await clientPromise;
  const db = client.db("CollegeCoin");
  const loaners = db.collection("loaners");

  const results = [];
  const cursor = loaners.find({});

  for await (const doc of cursor) {
    results.push(doc);
  }

  client.close()
  return results;
};

const StudentDashboard = async () => {
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

export default StudentDashboard;
