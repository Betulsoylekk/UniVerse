import React from "react";

const Dashboard = ({ onLogout }) => {
  // Mock user data
  const mockUserData = {
    username: "johndoe",
    email: "johndoe@example.com",
    role: "User",
  };

  return (
    <div className="dashboard-container">
      <h2>Welcome to the Universe Portal, {mockUserData.username}!</h2>
      <p>Email: {mockUserData.email}</p>
      <p>Role: {mockUserData.role}</p>

      <button className="logout-button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
