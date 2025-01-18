import React, { useState } from 'react';
import './Header.css';
import background from "../../assets/homeicon.png";
import { MdOutlineMenuOpen } from "react-icons/md";

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);

    return (
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
                <div className="flexCenter">
                    <img src={background} alt="logo" width={30} />
                    <p>Homez</p>
                </div>
                <div className={`flexCenter h-menu ${menuOpened ? 'open' : 'closed'}`}>
                    <a href="#residencies">Residencies</a>
                    <a href="#our-value">Our Value</a>
                    <a href="#get-started">Get Started</a>
                    <a href="#contact">Contact</a>
                    <a href="#get-started" className="cta">
                        <span>Get Started</span>
                        <svg width="13px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </a>
                </div>
                <div className="menu-icon" onClick={() => setMenuOpened(prev => !prev)}>
                    <MdOutlineMenuOpen size={30} />
                </div>
            </div>
        </section>
    );
}

export default Header;
