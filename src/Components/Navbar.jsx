import React, { useState } from 'react';
import logo from '../images/logo.png'

function Navbar() {
    const [nav, setNav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNav(true);
        }
        else {
            setNav(false);
        }
    }
    window.addEventListener('scroll', changeBackground)

    return (
        <nav className={nav ? 'nav active' : 'nav'}>
            <a href='#' className='logo'>
                <img src={logo} alt="" srcset="" />
            </a>
            <input type='checkbox' className="menu-btn" id='menu-btn' />
            <label for="menu-btn" className='menu-icon'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><a href="#" className='active'>Home</a></li>
                <li><a href="#features" className=''>Features</a></li>
                <li><a href="#about" className=''>About</a></li>
                <li><a href="#presentation" className=''>UI $$</a></li>
                <li><a href="#contact" className=''>Download</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
