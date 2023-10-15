import React from "react";

const Dashboard = ({ children }) => {
  return (
    <div className="h-full px-48">
      <div className="py-10">
        <div className="flex-rol flex items-center">
          <img src="/images/CoinLogo.png" className="h-12" />
          <h1 className="m-[-11px] bg-gradient-to-r from-amber-200 to-amber-900 bg-clip-text py-7 text-5xl font-black text-transparent">
            ollege Coin
          </h1>
        </div>
        <div className="flex flex-row gap-6">
          <a
            className="rounded-xl from-orange-200 to-amber-200 px-2 py-1 transition-all hover:scale-110 hover:bg-gradient-to-r"
            href="/student/home"
          >
            Dashboard
          </a>
          <a
            className="rounded-xl from-orange-200 to-amber-200 px-2 py-1 transition-all hover:scale-110 hover:bg-gradient-to-r"
            href="/student/eligible"
          >
            Eligible Loans
          </a>
          <a
            className="rounded-xl from-orange-200 to-amber-200 px-2 py-1 transition-all hover:scale-110 hover:bg-gradient-to-r"
            href="/student/application"
          >
            Application
          </a>
          <a
            className="rounded-xl from-orange-200 to-amber-200 px-2 py-1  transition-all hover:scale-110 hover:bg-gradient-to-r"
            href="/student/history"
          >
            History
          </a>
        </div>
      </div>
      {children}
      <footer className="flex items-center justify-center pb-6 pt-48">
        Made with React, NextJS, TailwindCSS and ❤️
      </footer>
    </div>
  );
};

export default Dashboard;
