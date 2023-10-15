import Lender from "@/app/components/Lender";
import React from "react";

const getLenders = async () => {
  const res = await fetch(
    `${process.env.BASE_URL}/api/all`
  );
  return res.json();
};

const StudentDashboard = async () => {
  const data = await getLenders();
  return (
    <div className="grid grid-cols-3 gap-6">
      {data.map((e, i) => (
        <Lender key={i} name={e.name} maxLoan={e.maxLoan} minCredit={e.minCredit} />
      ))}
    </div>
  );
};



export default StudentDashboard;
