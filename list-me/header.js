import React from "react";
import { Link } from "react-router-dom";

const Header = ({ toggleSidebar }) => {
  return (
    <header>
      <button onClick={toggleSidebar}>Toggle Sidebar</button>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </nav>
    </header>
  );
};

export default Header;
