"use client";
import React, { useRef } from "react";
import { FaTimes } from "react-icons/fa";

const Lender = ({ name, maxLoan }) => {
  const bigDiv = useRef(null);
  function showBigDiv() {
    bigDiv.current.classList.remove("hidden");
  }

  function removeBigDiv() {
    bigDiv.current.classList.add("hidden");
  }

  return (
    <div>
      <div
        className="rounded-xl bg-slate-100 p-10 transition-all hover:scale-105 h-[180px] bg-gradient-to-r from-amber-200 to-yellow-600"
        onClick={showBigDiv}
      >
        <h1 className="text-3xl">{name}</h1>
        <p> Maximum: ${maxLoan}</p>
      </div>

      <div
        ref={bigDiv}
        className=" absolute left-[50%] top-[50%] hidden h-[500px] w-3/4 translate-x-[-50%] translate-y-[-50%] rounded-xl bg-slate-100 p-10"
      >
        <span onClick={removeBigDiv} className="cursor-pointer">
          <FaTimes />
        </span>
        <h1 className="text-3xl">{name}</h1>
        <p> Description: {}</p>
        <p> Minimum Credit Rating: {}</p>
        <p> Loan Amount: ${}</p>
        <p> Interest Rate: {}%/month</p>
        <p> Time to Return: {} months</p>
        <p> External Link : {}</p>
  
      </div>
    </div>
  );
};

export default Lender;
