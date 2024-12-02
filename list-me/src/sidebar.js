import React, { useState } from 'react';
import './sidebar.css';

function Sidebar({ isOpen }) {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="sidebar-item">
                <img src="caret-down.svg"/>
                <span className="text">Posts</span>
            </div>
            <div className="sidebar-item">
                <img src="caret-down.svg"/>
                <span className="text">Calendar</span>
            </div>
            <div className="sidebar-item">
                <img src="caret-down.svg"/>
                <span className="text">Analytics</span>
            </div>
            <div className="sidebar-item">
                <img src="caret-down.svg"/>
                <span className="text">Linked Accounts</span>
            </div>
            <div className="sidebar-item">
                <img src="caret-down.svg"/>
                <span className="text">AI Tools</span>
            </div>
            <div className="sidebar-item">
                <img src="caret-down.svg"/>
                <span className="text">Settings</span>
            </div>
        </div>
    );
}

export default Sidebar;
