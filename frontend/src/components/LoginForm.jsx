import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Form.css"; // Ensure the form styling is applied

const LoginForm = ({ onLogin, error }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  // Validate university email
  const validateEmail = (email) => {
    // Pattern for any university email in Turkey ending with .edu.tr
    const universityEmailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(edu\.tr)$/;
    return universityEmailPattern.test(email);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form behavior
    if (!validateEmail(credentials.email)) {
      alert("Please enter a valid university email (ending with .edu.tr).");
      return;
    }
    if (!credentials.email || !credentials.password) {
      alert("Please fill in both fields!");
      return;
    }
    onLogin(credentials); // Call the onLogin function passed as prop
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="email"
            placeholder="University Email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            className="input"
            required // Ensure email is required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            className="input"
            required // Ensure password is required
          />
          <button type="submit" className="submit-button">
            Login
          </button>
        </form>
        {error && <p className="error">{error}</p>} {/* Show error message if any */}
        <div className="links">
          <Link to="/register">Don't have an account? Register</Link>
        </div>
        <div className="links">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
