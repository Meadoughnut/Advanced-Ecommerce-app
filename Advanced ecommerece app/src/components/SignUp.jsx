import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const SignUp = () => {
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    const existingUser = localStorage.getItem(user.email);

    if (existingUser) {
      setMessage('User already exists. Please sign in.');
    } else {
      // Store the user in localStorage
      localStorage.setItem(user.email, JSON.stringify(user));
      setMessage('Sign up successful! Redirecting to the product page...');

      // Redirect to the product page after 1 second
      setTimeout(() => {
        navigate('/products');
      }, 1000); // 1 second delay to show the success message
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default SignUp;
