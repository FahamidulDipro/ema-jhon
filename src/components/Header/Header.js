import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';
const Header = () => {
    return (
        <div> 
            <nav className='navbar'>
                <img src={logo} alt="logo" />
                <ul className='listContainer'>
                    <li><a href='#'>Order</a></li>
                    <li><a href='#'>Order Review</a></li>
                    <li><a href='#'>Manage Inventory</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;