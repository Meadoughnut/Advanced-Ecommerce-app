import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './Navbar';
import '../styles/signin.css'

const SignIn = ({ setLoggedIn }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the user data from localStorage
    const storedUser = localStorage.getItem(formData.email);

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);

      // Check if the password matches
      if (parsedUser.password === formData.password) {
        setMessage('Sign in successful! Redirecting to product page...');
        setLoggedIn(true); // Set logged in to true
        localStorage.setItem('currentUser', formData.email); // Save the logged-in user

        // Redirect to the product page after a short delay
        setTimeout(() => {
          navigate('/products');
        }, 1000); // 1-second delay to display success message
      } else {
        setMessage('Incorrect password. Please try again.');
      }
    } else {
      setMessage('User not found. Please sign up.');
    }
  };

  return (
    <div className="signin-container">
       <NavBar />
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleInputChange}
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default SignIn;
