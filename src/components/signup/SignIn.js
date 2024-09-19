import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../utils/api';
import './SignIn.scss'; // Import the CSS file
import login2 from "../../utils/context";

const SignIn = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async ({e}) => {
    e.preventDefault();
    try {
      const response = await login(identifier, password);
      console.log('User logged in:', response);
      navigate('/');
      login2() // Redirect to profile or any other protected page after successful login
    } catch (error) {
      console.error('Login error:', error);
      const errorMessage = error.response?.data?.error?.message || 'An error occurred';
      setError(errorMessage);
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Sign In</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email or Username:
          <input
            type="text"
            // id='email3'
            // name='email'
             autoComplete="Username"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            placeholder=' '
            required
          />
          </label>
        </div>
        <div>
          <label>Password:
          <input
            type="password"
            // id='password'
            // name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=' '
            required
          />
          </label>
        </div>
        <button type="submit">Sign In</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default SignIn;
