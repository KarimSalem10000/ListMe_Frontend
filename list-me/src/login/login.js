import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", { email, password });
      setMessage(response.data.message);
      localStorage.setItem("token", response.data.token); // Store token in localStorage
      onLogin(); // Update authentication status
      navigate("/"); // Redirect to home
    } catch (error) {
      setMessage("Login failed: " + (error.response?.data?.message || error.message));
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try{
      const decoded = jwtDecode(credentialResponse.credential);
      console.log("Google user data:", decoded);

      const response = await axios.post("/api/auth/google-auth", {
        email: decoded.email,
        firstName: decoded.given_name,
        lastName: decoded.family_name,
      });
    setMessage(response.data.message);
    localStorage.setItem("token", response.data.token);
    onLogin(response.data.token);
    navigate("/");
  } catch (error) {
    console.error("Google signup failed:", error.response?.data || error.message);
    setMessage("Google signup failed: " + (error.response?.data?.message || error.message));
  }
};

  const handleGoogleFailure = (error) => {
    console.error("Google login failed:", error);
    setMessage("Google login failed: " + error.message);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
      <div id="signInButton">
        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={handleGoogleFailure}
          />
        </div>
    </div>
  );
};

export default Login;
