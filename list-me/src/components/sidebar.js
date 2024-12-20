import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/sidebar.css";
import caretDownIcon from "../assets/images/caret-down.svg";

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-item">
        <img src={caretDownIcon} alt="Caret Down Icon" />
        <Link to="/posts">Posts</Link>
      </div>
      <div className="sidebar-item">
        <img src={caretDownIcon} alt="Caret Down Icon" />
        <Link to="/calendar">Calendar</Link>
      </div>
      <div className="sidebar-item">
        <img src={caretDownIcon} alt="Caret Down Icon" />
        <Link to="/analytics">Analytics</Link>
      </div>
      <div className="sidebar-item">
        <img src={caretDownIcon} alt="Caret Down Icon" />
        <Link to="/linked-accounts">Linked Accounts</Link>
      </div>
      <div className="sidebar-item">
        <img src={caretDownIcon} alt="Caret Down Icon" />
        <Link to="/ai-tools">AI Tools</Link>
      </div>
      <div className="sidebar-item">
        <img src={caretDownIcon} alt="Caret Down Icon" />
        <Link to="/settings">Settings</Link>
      </div>
    </div>
  );
};

export default Sidebar;
