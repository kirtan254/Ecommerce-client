import React, { useState } from 'react'; // Import React and useState
import { Link, useNavigate } from 'react-router-dom'; // Import other necessary components from react-router-dom
import { register } from '../../utils/api'; // Import register function from your API file
import './SignUp.scss'; // Import the CSS file

const SignUp = () => {
  const [username, setUsername] = useState(''); // State for username
  const [email, setEmail] = useState(''); // State for email
  const [password, setPassword] = useState(''); // State for password
  const [error, setError] = useState(''); // State for error messages
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await register(username, email, password); // Call register function with form data
      console.log('User registered:', response); // Log successful registration response
      navigate('/signin'); // Redirect to sign-in page after successful registration
    } catch (error) {
      console.error('Registration error:', error); // Log registration error
      const errorMessage = error.response?.data?.error?.message || 'An error occurred'; // Extract error message from response
      setError(errorMessage); // Set error state with error message
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Sign Up</h2>
      {error && <p className="error-message">{error}</p>} {/* Display error message if present */}
      <form onSubmit={handleSubmit}> {/* Form for user registration */}
        <div>
          <label>Username:
          <input
            type="text"
            id='=uname'
            name='unmae'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          /></label> {/* Input field for username */}
        </div>
        <div>
          <label>Email:
          <input
            type="email"
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          /></label> {/* Input field for email */}
        </div>
        <div>
          <label>Password:
          <input
            type="password"
            id='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          /></label> {/* Input field for password */}
        </div>
        <button type="submit">Sign Up</button> {/* Submit button for registration */}
      </form>
      <p>
        Already have an account? <Link to="/signin">Sign In</Link> {/* Link to sign-in page */}
      </p>
    </div>
  );
};

export default SignUp; // Export SignUp component as default
