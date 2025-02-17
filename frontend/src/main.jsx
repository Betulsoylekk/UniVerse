import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Your styles if applicable
import App from './App.jsx'; // Make sure App.jsx exists and is in the right location

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
