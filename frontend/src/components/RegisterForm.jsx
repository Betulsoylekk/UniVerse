import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Form.css"; // Ensure the form styling is applied

const RegisterForm = ({ onRegister, error }) => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
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

    if (!validateEmail(formData.email)) {
      alert("Please enter a valid university email (ending with .edu.tr).");
      return;
    }

    if (!formData.email || !formData.username || !formData.password || !formData.confirmPassword) {
      alert("All fields are required!");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      // Passwords do not match
      alert("Passwords do not match.");
      return;
    }

    onRegister(formData); // Call the onRegister function passed as prop
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="email"
            placeholder="University Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input"
            required // Ensure email is required
          />
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="input"
            required // Ensure username is required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="input"
            required // Ensure password is required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="input"
            required // Ensure confirm password is required
          />
          <button type="submit" className="submit-button">
            Register
          </button>
        </form>
        {error && <p className="error">{error}</p>} {/* Show error message if any */}
        <div className="links">
          <Link to="/login">Already have an account? Login</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
