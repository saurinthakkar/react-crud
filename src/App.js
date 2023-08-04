//import "./styles.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Login } from "./components/Login";
import { Users } from "./components/Users";
import { Add } from './components/Add';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/users" element={<Users />} />
        <Route path="/users/add" element={<Add/> } />  
      {/* Add a catch-all route to redirect to the login page */}
      <Route path="*" element={<Login />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
