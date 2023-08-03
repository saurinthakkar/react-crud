//import "./styles.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Login } from "./Login";
import { Dashboard } from "./Dashboard";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* Add a catch-all route to redirect to the login page */}
      <Route path="*" element={<Login />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
