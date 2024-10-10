import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toplogo from '../assets/logos/toplogo.png';
import '../styles/welcomepage.css';

const WelcomePage = ({ setLoggedIn, setIsGuest }) => {
  const navigate = useNavigate();

  // Handle the guest button click
  const handleGuestClick = () => {
    if (typeof setIsGuest === 'function' && typeof setLoggedIn === 'function') {
      setIsGuest(true); // Set guest mode to true
      setLoggedIn(false); // Ensure loggedIn is false in guest mode
      console.log('Guest mode activated. Navigating to products...');
      navigate('/products'); // Redirect to product list
    } else {
      console.error('setIsGuest or setLoggedIn is not a function. Check the props passed to WelcomePage.');
    }
  };

  return (
    <div className="welcome-page">
      <div className="welcome-header">
        <div className="welcome-logo">
          <img src={toplogo} alt="a picture of model" width="110px" height="70px" />
          <p>Meadin MHabesha</p>
        </div>
        <div className="welcome-links">
          <Link to="/signup">Sign Up</Link>
          <Link to="/signin">Sign In</Link>
          <button onClick={handleGuestClick}>Continue as Guest</button>
        </div>
      </div>

      {/* Welcome Content */}
      <h1>Discover Luxury. Embrace Elegance.</h1>
      <p>
        Indulge in timeless collections for men and women, curated for those who value the finest in fashion. 
        Our exclusive designs are crafted with precision, ensuring every piece represents elegance and sophistication.
        From luxurious fabrics to exquisite craftsmanship, each item in our collection tells a story of heritage, beauty, 
        and innovation. Step into a world where quality meets unparalleled style, offering a diverse selection of apparel 
        and accessories to complement your individual taste. Experience the ultimate in luxury fashion, where modern 
        aesthetics meet classic charm, tailored to perfection for those who demand the best. Whether it's a statement 
        piece for a special occasion or an everyday essential elevated by quality, our curated collection is designed 
        to help you express your style effortlessly.
      </p>
    </div>
  );
};

export default WelcomePage;
