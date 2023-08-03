import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Replace these credentials with your actual login validation logic
    const validEmail = "sthakkar@codal.com"; // Replace with your username
    const validPassword = "123456"; // Replace with your password

    if (email === validEmail && password === validPassword) {
      // Redirect to the dashboard page if the credentials are correct
      setAuthenticated(true)
      localStorage.setItem("authenticated", true);
      navigate("/dashboard");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

