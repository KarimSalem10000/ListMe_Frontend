import React from 'react';
import './header.css';
import { useState, useEffect, useRef } from 'react';

function Header({toggleSidebar}) {
    const [isOpen, setOpen] = useState(false);
    const dropdownRef = useRef(null);
    const toggleRef = useRef(null);

    const toggleProfileDropdwon = () => {
        setOpen(prevState => !prevState);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !toggleRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        // Attach the event listener to the document
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (<><header>
        <div className='header-content'>
        <button className="sidebar-toggle-button" onClick={toggleSidebar}>
            <span>☰</span>
        </button>
            <div className='header-logo'>
                <img src="/ListMeLogo.png"></img>
            </div>
            <div className="right-content" onClick={toggleProfileDropdwon} ref={toggleRef}>
                <div className="user-profile">
                    <img src="/profile-placeholder.png"></img>
                </div>
                <div className="caret">
                    <img src="caret-down.svg"></img>
                </div>
            </div>
        </div>
    </header>
        {isOpen && (<div className='profile-dropwdown-menu' ref={dropdownRef}>
            <div className="profile-dropdown-profile">
                <img src="/profile-placeholder.png"></img>
                <div className="profile-dropdown-info">
                    <div className='profile-info-item username-font'>Ibrahim Kuziez</div>
                    <div className='profile-info-item email-font'>ibrahimkuziez@gmail.com</div>
                    <div className='profile-info-item edit-font'>Edit Profile</div>
                </div>
            </div>
            <div className="profile-dropdown-options">
                <div className="profile-options-item"><img src="caret-down.svg"></img>Settings</div>
                <div className="profile-options-item"><img src="caret-down.svg"></img>Billing</div>
                <div className="profile-options-item"><img src="caret-down.svg"></img>Help</div>
            </div>
            <div className="profile-dropdown-signout">
                <div className="profile-signout-item"><img src="caret-down.svg"></img>Sign Out</div>
            </div>
        </div>
        )}
    </>
    );
}

export default Header;