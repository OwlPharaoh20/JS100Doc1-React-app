// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="flex items-center justify-center h-screen">
          <Routes>
            <Route path="/" element={<h1 className="text-4xl font-bold text-blue-600">Welcome to My React App!</h1>} />
            <Route path="/about" element={<h1 className="text-4xl font-bold text-blue-600">About Page</h1>} />
            <Route path="/services" element={<h1 className="text-4xl font-bold text-blue-600">Services Page</h1>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
