import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "./Screen/SignUp";
import Login from "./Screen/Login";
import Dashboard from "./Screen/Dashboard";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;
