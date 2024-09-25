import React, { useState } from 'react';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');

  // Handle input changes for email and password
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle sign-in form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Retrieve user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem(formData.email));

    // Check if the user exists and password matches
    if (storedUser && storedUser.password === formData.password) {
      setMessage('Sign in successful!');
      // Perform any sign-in success logic, such as redirecting to another page
    } else {
      setMessage('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email" // id should match the 'for' attribute of the label
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
            id="password" // id should match the 'for' attribute of the label
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
      {/* Display success or error message */}
      <p>{message}</p>
    </div>
  );
};

export default SignIn;
