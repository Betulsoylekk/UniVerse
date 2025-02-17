import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Dashboard from './components/Dashboard';
import './App.css';




const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState(null);

  // Check for existing token on app load
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  // Login handler
  const handleLogin = async (credentials) => {
    try {
      const response = await apiClient.post("/login", credentials);
      localStorage.setItem("authToken", response.data.token);
      setIsAuthenticated(true);
      setAuthError(null);
    } catch (error) {
      setAuthError("Invalid credentials. Please try again.");
    }
  };

  // Registration handler
  const handleRegister = async (formData) => {
    try {
      await apiClient.post("/register", formData);
      alert("Registration successful! Please log in.");
    } catch (error) {
      setAuthError("Registration failed. Please try again.");
    }
  };

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="app-container">
        <h1 className="app-title">Universe Portal</h1>
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={<LoginForm onLogin={handleLogin} error={authError} />}
          />
          <Route
            path="/register"
            element={<RegisterForm onRegister={handleRegister} error={authError} />}
          />
          <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard onLogout={handleLogout} /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </Router>
  );
};
export default App;