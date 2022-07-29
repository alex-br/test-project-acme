import React, { useState } from 'react';
import './Header.css'


const Header = () => {

    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
        lockScroll();
    };

    const lockScroll = () => {
        if (!isActive) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = null;
        }
    }

    return (
        <header className="header">
            <div className="container">
                <nav className="navbar">
                    <a href="#" className="navLogo">
                        <img className='logo-desktop' src="./assets/img/logo.png" alt="" />
                        <img className='logo-mobile' src="./assets/img/mobile-header-logo.jpg" alt="" />
                        <h1 className='tagline' >
                            Research Professional <br />
                            <span>Platform</span>
                        </h1>
                    </a>                    
                    <ul className={`navMenu ${isActive ? "active" : ''}`}>
                        <li className="navItem">
                            <a href="#" className="navLink">Home</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">About Us</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Insights</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Events</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Contact Us</a>
                        </li>
                    </ul>
                    <div onClick={toggleClass} className={`hamburger ${isActive ? "active" : ''}`}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;