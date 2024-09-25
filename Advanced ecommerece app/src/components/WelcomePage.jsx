import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const WelcomePage = ({ setLoggedIn, setIsGuest }) => {
  const navigate = useNavigate();

  const handleGuestClick = () => {
    setIsGuest(true); // Set guest mode to true
    setLoggedIn(false); // Ensure loggedIn is false in guest mode
    navigate('/products'); // Redirect to product list
  };

  return (
    <div className="welcome-page">
      <h1>Welcome to My E-Commerce Store</h1>
      <p>Sign up, log in, or continue as a guest to start browsing our products.</p>
      <div className="welcome-links">
        <Link to="/signup">Sign Up</Link> | <Link to="/signin">Sign In</Link>
        <button onClick={handleGuestClick}>Continue as Guest</button>
      </div>
    </div>
  );
};

export default WelcomePage;
