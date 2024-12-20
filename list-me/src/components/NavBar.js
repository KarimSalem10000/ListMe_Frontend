import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="../assets/images/ListMeLogo.png" alt="ListMe Logo" />
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/posts">Posts</Link></li>
                <li><Link to="/analytics">Analytics</Link></li>
                <li><Link to="/settings">Settings</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
