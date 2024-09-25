import React, { useState } from 'react';

const SignIn = ({ setLoggedIn }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const user = localStorage.getItem(credentials.email);

    if (!user) {
      setMessage('User not found. Please sign up.');
    } else {
      const parsedUser = JSON.parse(user);
      if (parsedUser.password === credentials.password) {
        setMessage('Sign in successful!');
        setLoggedIn(true);
      } else {
        setMessage('Incorrect password.');
      }
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign In</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default SignIn;
