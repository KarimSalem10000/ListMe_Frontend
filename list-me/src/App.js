import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import PostList from "./pages/PostList";
import PostDetails from "./pages/PostDetails";
import Analytics from "./pages/Analytics"; // Add Analytics 
import Settings from "./pages/Settings";   // Add Settings 
import Ai from "./pages/Ai";               // Add Ai


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/ai" element={<Ai />} />
      </Routes>
    </Router>
  );
};

export default App;
