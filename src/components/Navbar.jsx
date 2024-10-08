import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logos/logo.png";
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      
      <img src={logo} alt="description of the logo" width='110px' height='70px' />
      <ul>
        
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
