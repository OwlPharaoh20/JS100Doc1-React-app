// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import the Navbar component

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar /> {/* Include the Navbar here */}
        <div className="flex items-center justify-center h-screen">
          <Routes>
            <Route path="/" element={<h1 className="text-4xl font-bold text-blue-600">Welcome to My React App!</h1>} />
            <Route path="/about" element={<h1 className="text-4xl font-bold text-blue-600">About Page</h1>} />
            <Route path="/services" element={<h1 className="text-4xl font-bold text-blue-600">Services Page</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
