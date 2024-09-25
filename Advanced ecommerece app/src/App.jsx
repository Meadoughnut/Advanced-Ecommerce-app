import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/signin';
import WelcomePage from './components/WelcomePage'; // Make sure the WelcomePage component is imported
import ProductList from './components/ProductList'; // Assuming you have this component
import Navbar from './components/Navbar'; // If you have a Navbar

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          {/* Ensure the WelcomePage route is set for "/" */}
          <Route path="/" element={<WelcomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/products" element={<ProductList />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
