import React from "react";

const Login = async () => {
  const res = await fetch("/api/recommend/students");
  const students = await res.json();

  return <div>{students}</div>;
};

export default Login;
