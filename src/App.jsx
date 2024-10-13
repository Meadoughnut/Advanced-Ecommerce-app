import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import WelcomePage from './components/WelcomePage';
import MainNavbar from './components/MainNavbar'; // Navbar for main pages
import AuthNavbar from './components/AuthNavbar'; 
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Home from './components/Home';
import MenPage from './components/MenProductList'; // Import the MenPage component
import WomenPage from './components/WomenProductList';
// import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails'; 
import Cart from './components/Cart';
import Checkout from './components/Checkout';


const Navbar = () => {
  const location = useLocation();
  
  // Render a different navbar based on the current route
  if (location.pathname === '/' || location.pathname === '/signin' || location.pathname === '/signup') {
    return <AuthNavbar />;
  } else {
    return <MainNavbar />;
  }
};


const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* Set WelcomePage as the default route ("/") */}
          <Route path="/" element={<WelcomePage />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/navbar" element={<Navbar />} /> */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn setLoggedIn={setLoggedIn} />} />
          <Route path="/men" element={<MenPage />} />
          <Route path="/women" element={<WomenPage />} />
          {/* <Route path="/products" element={<ProductList />} /> */}
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={loggedIn ? <Cart /> : <SignIn setLoggedIn={setLoggedIn} />} />
          <Route path="/checkout" element={loggedIn ? <Checkout /> : <SignIn setLoggedIn={setLoggedIn} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
