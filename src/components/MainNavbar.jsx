import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/mainnavbar.css'; // Updated CSS file

const MainNavbar = () => {
  return (
    <nav className="mainnavbar">
      <div className="mainnavbar-left">
        <Link to="/men">Men</Link>
        <Link to="/women">Women</Link>
        <Link to="/kaba">Kaba</Link>
      </div>
      
      <div className="mainnavbar-center">
        <p>Meadin Fashion</p>
      </div>

      <div className="mainnavbar-right">
        <Link to="/home">Home</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
};

export default MainNavbar;
