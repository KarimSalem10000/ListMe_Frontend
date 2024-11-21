import React, { useState } from 'react';
import Header from './header.js';
import Sidebar from './sidebar.js';
import './App.css';
import Posts from './posts.js';

function App() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };
  return (
    <>
    <Header toggleSidebar={toggleSidebar}/>
      <div className="app">
        <Sidebar isOpen={isSidebarOpen} />
        <Posts />
      </div>
      </>
  );
}

export default App;