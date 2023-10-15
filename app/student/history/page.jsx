import React from "react";

const user = "jayden@gmail.com";

const getHistory = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/history?email=${user}`);
  return res.json();
};

const LoanHistory = async () => {
  const data = await getHistory();
  return (
    <div className="grid grid-cols-3 gap-6">
      {data.map((e, i) => (
        <div className="rounded-xl bg-slate-100 p-10 transition-all bg-gradient-to-r from-amber-200 to-yellow-600">
          <p className="font-semibold">Lender: {e.lenderName}</p>
          <p className="font-semibold">Total Loan Amount: ${e.amount}</p>
          <p className="font-semibold">Total Returned: ${e.received}</p>
        </div>
      ))}
    </div>
  );
};

export default LoanHistory;
