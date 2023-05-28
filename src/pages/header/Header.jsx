// eslint-disable-next-line no-unused-vars
import React from 'react';
import './header.css'
import image from '../../images/Logo.svg'
const Header = () => {
    return (
        
        <nav>
            <div className='header'>
               <img src={image} alt="" />
               <div>
               <a href="/shop">Shop</a>
               <a href="/order">Order</a>
               <a href="/review">Review</a>
               <a href="/inventory">MangeInventory</a>
               <a href="/login">Login</a>
               </div>
            </div>
        </nav>
    );
};

export default Header;