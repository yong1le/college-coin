"use client";
import React, { useRef } from "react";

const StudentApplication = () => {
  const amount = useRef(null);
  const purpose = useRef(null);

  const updateApplication = (e) => {
    e.preventDefault();
    const res = fetch(`/api/update`, {
      method: "PUT",
      body: JSON.stringify({
        email: "jayden@gmail.com",
        amount: amount.current.value,
        purpose: purpose.current.value,
      }),
    });
  };

  return (
    <div className="rounded-xl bg-slate-100 p-10 transition-all">
      <form onSubmit={updateApplication} className="flex flex-col">
        <p className="font-semibold">Name: Jayden</p>
        <br></br>
        <p>Type in the amount you want to request for a loan</p>
        <label htmlFor="loan" className="font-semibold">
          Loan Amount:{" "}
        </label>
        <input ref={amount} type="text" name="loan" size="100" />
        <br></br>
        <p>Type in your reasons for loaning</p>
        <label htmlFor="reasons" className="font-semibold">
          Reasons for Loan:{" "}
        </label>
        <input ref={purpose} className="h-20" type="text" name="reasons" />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default StudentApplication;
