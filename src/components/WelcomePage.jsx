import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import sampleVideo from "../assets/logos/sampleVideo.mp4";
import '../styles/welcomepage.css';

const WelcomePage = ({ setLoggedIn, setIsGuest }) => {
  const navigate = useNavigate();

  const handleGuestClick = () => {
    setIsGuest(true); // Set guest mode to true
    setLoggedIn(false); // Ensure loggedIn is false in guest mode
    navigate('/products'); // Redirect to product list
  };

  return (
    <div className="welcome-page">
      {/* Video Player */}
      <video 
  width="740" 
  height="460" 
  autoPlay 
  loop 
  muted 
  playsInline
  style={{ pointerEvents: 'none', objectFit: 'cover', width: '100%', height: 'auto' }}
>
  <source src={sampleVideo} type="video/mp4" />
 
</video>



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
      <div className="welcome-links">
        <Link to="/signup">Sign Up</Link>  <Link to="/signin">Sign In</Link>
        <button onClick={handleGuestClick}>Continue as Guest</button>
      </div>
    </div>
  );
};

export default WelcomePage;

