import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './index.css';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignUp from './components/SignUp';  // New SignUp component
import SignIn from './components/SignIn';  // New SignIn component

function App() {
  const [loggedIn, setLoggedIn] = useState(false); // Manage authentication state

  return (
    <Router>
      <div className="app-container">
        {/* Navbar will be displayed on all pages */}
        <Navbar />

        {/* Main content area for different routes */}
        <main>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={loggedIn ? <Cart /> : <Navigate to="/signin" />} />
            <Route path="/checkout" element={loggedIn ? <Checkout /> : <Navigate to="/signin" />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn setLoggedIn={setLoggedIn} />} />
          </Routes>
        </main>

        {/* Footer will be displayed on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
