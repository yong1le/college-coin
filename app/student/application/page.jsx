"use client";
import React, { useRef } from "react";

const StudentApplication = () => {
  const amount = useRef(null);
  const purpose = useRef(null);

  const updateApplication = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/update`, {
      method: "PUT",
      body: JSON.stringify({
        email: "jayden@gmail.com",
        amount: amount.current.value,
        purpose: purpose.current.value,
      }),
    });
    console.log(await res.json());
    amount.current.value = "";
    purpose.current.value = "";
  };

  return (
    <div className="flex flex-col items-center justify-center rounded-xl">
      <h1 className="mb-10 text-3xl">Jayden</h1>
      <form onSubmit={updateApplication} className="flex w-1/2 flex-col">
        <label htmlFor="loan" className="py-3 text-xl">
          Loan Amount:
        </label>
        <input
          ref={amount}
          type="text"
          name="loan"
          className="rounded-xl p-4 bg-gradient-to-r from-orange-200 to-orange-300"
        />
        <label htmlFor="reasons" className="py-3 text-xl">
          Reasons for Loan:
        </label>
        <textarea
          ref={purpose}
          name="reasons"
          cols="30"
          rows="10"
          className="resize-none rounded-xl p-4 bg-gradient-to-r from-orange-200 to-orange-300"
        ></textarea>
        <button
          type="submit"
          className="my-3 self-center rounded-xl bg-orange-200 p-2"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default StudentApplication;
