// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">MyApp</h1>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-200">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-200">About</Link>
          <Link to="/services" className="text-white hover:text-gray-200">Services</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
