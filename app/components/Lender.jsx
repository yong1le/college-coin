"use client";
import React, { useRef } from "react";
import { FaTimes } from "react-icons/fa";

const Lender = ({ name, maxLoan, desc, minCredit, rate, link, img }) => {
  const bigDiv = useRef(null);
  function showBigDiv() {
    bigDiv.current.classList.remove("invisible");
    bigDiv.current.classList.remove("opacity-0");
  }

  function removeBigDiv() {
    bigDiv.current.classList.add("invisible");
    bigDiv.current.classList.add("opacity-0");
  }

  return (
    <div>
      <div
        className="flex h-[180px] cursor-pointer flex-row items-center justify-between rounded-xl bg-gradient-to-r from-orange-200 to-orange-300 p-10 transition-all hover:scale-105"
        onClick={showBigDiv}
      >
        <div>
          <h1 className="text-3xl">{name}</h1>
          <p> Maximum: ${maxLoan}</p>
        </div>
        <div className="">
          <img
            className="h-[150px] object-cover"
            src={`/images/${img}`}
            alt="Company Logo"
          />
        </div>
      </div>

      <div
        ref={bigDiv}
        className="invisible absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-black/50 opacity-0 transition-all duration-200"
      >
        <div className="relative h-[500px] w-3/4 rounded-xl bg-orange-300 p-10 text-slate-800 opacity-100">
          <div className="flex-rol flex justify-between ">
            <h1 className="text-4xl">{name}</h1>
            <span onClick={removeBigDiv} className="cursor-pointer">
              <FaTimes className="h-6" />
            </span>
          </div>
          <div>
            <p className="pb-20 text-xl text-slate-700"> {desc}</p>
            <p className="text-2xl">To apply, please ensure the following:</p>
            <p> Minimum Credit Rating: {minCredit}</p>
            <p> Max Loan: ${maxLoan}</p>
            <p className="pb-20"> Interest Rate: {rate}%/month</p>
            <a
              className="absolute bottom-10 cursor-pointer rounded-xl p-2 transition-all hover:bg-orange-200"
              target="_blank"
              href={link}
            >
              Application Link
            </a>

            <div className="absolute bottom-10 right-10">
              <img
                className="h-[150px] object-cover"
                src={`/images/${img}`}
                alt="Company Logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lender;
