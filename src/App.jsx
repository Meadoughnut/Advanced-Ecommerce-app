import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage'; // Welcome Page import
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails'; 
import Cart from './components/Cart';
import Checkout from './components/Checkout';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* Set WelcomePage as the default route ("/") */}
          <Route path="/" element={<WelcomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn setLoggedIn={setLoggedIn} />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={loggedIn ? <Cart /> : <SignIn setLoggedIn={setLoggedIn} />} />
          <Route path="/checkout" element={loggedIn ? <Checkout /> : <SignIn setLoggedIn={setLoggedIn} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
