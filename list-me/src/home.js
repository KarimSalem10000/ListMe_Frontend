import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./header.js";
import Sidebar from "./sidebar.js";
import Posts from "./posts.js";
import "./App.css";

const Home = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [message, setMessage] = useState("");

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // Fetch data from the backend
  useEffect(() => {
    axios
      .get("/api") // Matches the backend route
      .then((response) => setMessage(response.data.message))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <div className="app">
        <Sidebar isOpen={isSidebarOpen} />
        <div className="content">
          <h1>Backend Connection Test</h1>
          <p>{message || "Loading..."}</p>
          <Posts />
        </div>
      </div>
    </>
  );
};

export default Home;
