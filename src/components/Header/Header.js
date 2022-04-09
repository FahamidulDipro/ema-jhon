import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';
const Header = () => {
    return (
        <div> 
            <nav className='navbar'>
                <img src={logo} alt="logo" className='logo-img'/>
                <ul className='listContainer'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to='/order'>Order</Link></li>
                    <li><Link to='/inventory'>Manage Inventory</Link></li>
                     
                </ul>
            </nav>
        </div>
    );
};

export default Header;