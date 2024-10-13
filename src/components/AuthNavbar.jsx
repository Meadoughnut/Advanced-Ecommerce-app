import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/authnavbar.css'; // AuthNavbar-specific CSS

const AuthNavbar = () => {
  return (
    <nav className="authnavbar">
      <div className="authnavbar-left">
        <Link to="/signin">Sign In</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/guest">Continue as Guest</Link>
      </div>
      
      <div className="authnavbar-center">
        <p>Meadin Fashion</p>
      </div>
    </nav>
  );
};

export default AuthNavbar;
