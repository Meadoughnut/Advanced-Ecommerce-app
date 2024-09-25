import React, { useState } from 'react';

const SignUp = () => {
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  // Handle input changes and update the user state
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Handle sign-up form submission
  const handleSignUp = (e) => {
    e.preventDefault();
    const existingUser = localStorage.getItem(user.email);

    // Check if the user already exists
    if (existingUser) {
      setMessage('User already exists. Please sign in.');
    } else {
      // Save new user data to localStorage
      localStorage.setItem(user.email, JSON.stringify(user));
      setMessage('Sign up successful! Please sign in.');
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
      {/* Display success or error message */}
      <p>{message}</p>
    </div>
  );
};

export default SignUp;
