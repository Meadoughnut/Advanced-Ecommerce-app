import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import MainNavbar from './MainNavbar'; // Import the MainNavbar component
import '../styles/homepage.css'; // Import custom styles

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Render the MainNavbar */}
      <MainNavbar />

      <h1 className="homepage-title">Discover the Best of Ethiopian Traditional Clothing</h1>

      {/* Men and Women Fashion Section */}
      <div className="homepage-choices">
     
        <Link to="/men" className="fashion-choice men-choice">
          Men’s Fashion
        </Link>
        <Link to="/women" className="fashion-choice women-choice">
          Women’s Fashion
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
