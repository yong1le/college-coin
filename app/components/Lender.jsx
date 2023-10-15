import React from "react";

const Lender = ({ name, maxLoan }) => {
  return (
    <div className="rounded-xl bg-slate-100 p-10 transition-all hover:scale-105">
      <h1 className="text-3xl">Lender: {name}</h1>
      <p> Maximum: ${maxLoan}</p>
    </div>
  );
};

export default Lender;
