import React, { useState, useEffect, useRef } from "react";
import "../assets/css/header.css";
import caretDownIcon from "../assets/images/caret-down.svg";
import logo from "../assets/images/ListMeLogo.png";
import propic from "../assets/images/profile-placeholder.png";

function Header({ toggleSidebar }) {
  const [isOpen, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const toggleRef = useRef(null);

  const toggleProfileDropdown = () => {
    setOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !toggleRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header>
        <div className="header-content">
          <button className="sidebar-toggle-button" onClick={toggleSidebar}>
            <span>☰</span>
          </button>
          <div className="header-logo">
            <img src={logo} alt="ListMe Logo" />
          </div>
          <div className="right-content" onClick={toggleProfileDropdown} ref={toggleRef}>
            <div className="user-profile">
              <img src={propic} alt="User Profile" />
            </div>
            <div className="caret">
              <img src={caretDownIcon} alt="Caret Down Icon" />
            </div>
          </div>
        </div>
      </header>
      {isOpen && (
        <div className="profile-dropdown-menu" ref={dropdownRef}>
          <div className="profile-dropdown-profile">
            <img src={propic} alt="User Profile" />
            <div className="profile-dropdown-info">
              <div className="profile-info-item username-font">Ibrahim Kuziez</div>
              <div className="profile-info-item email-font">ibrahimkuziez@gmail.com</div>
              <div className="profile-info-item edit-font">Edit Profile</div>
            </div>
          </div>
          <div className="profile-dropdown-options">
            <div className="profile-options-item">
              <img src={caretDownIcon} alt="Caret Down Icon" />
              Settings
            </div>
            <div className="profile-options-item">
              <img src={caretDownIcon} alt="Caret Down Icon" />
              Billing
            </div>
            <div className="profile-options-item">
              <img src={caretDownIcon} alt="Caret Down Icon" />
              Help
            </div>
          </div>
          <div className="profile-dropdown-signout">
            <div className="profile-signout-item">
              <img src={caretDownIcon} alt="Caret Down Icon" />
              Sign Out
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
