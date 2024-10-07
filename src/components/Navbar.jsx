import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>My E-Commerce</h1>
      <ul>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/">Welcome</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
