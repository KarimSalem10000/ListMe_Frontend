import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./login/login.js";
import Signup from "./login/signup.js";
import Home from "./home.js";
import { GoogleOAuthProvider } from "@react-oauth/google";

const clientId = "225548381873-1m5thnkbpmgpmv629jlshdg1lvtm4uj3.apps.googleusercontent.com";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check authentication status on app load
    const authStatus = localStorage.getItem("isAuthenticated");
    if (authStatus) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true"); // Store in localStorage
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated"); // Remove from localStorage
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Router>
        <Routes>
          <Route path="/" element={isAuthenticated ? <Home onLogout={handleLogout} /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup onSignup={handleLogin} />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
