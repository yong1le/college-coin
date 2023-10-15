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
        <div className="flex flex-col rounded-xl bg-gradient-to-r from-orange-300 to-orange-200 p-10 transition-all hover:scale-105">
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
