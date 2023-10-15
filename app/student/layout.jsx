import React from "react";

const Dashboard = ({ children }) => {
  return (
    <div>
      <div className="py-10">
        <title>College Coin</title>
        <h1 className="py-2 text-4xl">College Coin</h1>
        <div className="flex flex-row gap-6">
          <a
            className="rounded-xl px-2 py-1 transition-all hover:scale-110 hover:bg-slate-100"
            href="/student/home"
          >
            Home
          </a>
          <a
            className="rounded-xl px-2 py-1 transition-all hover:scale-110 hover:bg-slate-100"
            href="/student/application"
          >
            Application
          </a>
          <a
            className="rounded-xl px-2 py-1 transition-all hover:scale-110  hover:bg-slate-100"
            href="/student/history"
          >
            History
          </a>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Dashboard;
