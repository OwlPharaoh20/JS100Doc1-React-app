// src/context/AuthContext.js
import React, { createContext, useState } from 'react';

// Create a new context for authentication, which will be used to share authentication state between components
export const AuthContext = createContext();

// Create a provider component that will wrap the entire app and manage the authentication state
export const AuthProvider = ({ children }) => {
  // Initialize a state variable to store the authentication token, with an initial value of null
  const [token, setToken] = useState(null);

  // Define a function to handle logging in, which takes a new token as an argument
  const login = (newToken) => {
    // Update the token state variable with the new token
    setToken(newToken);
    // Store the new token in local storage, so it persists even after the app is closed
    localStorage.setItem('token', newToken);
  };

  // Define a function to handle logging out
  const logout = () => {
    // Update the token state variable to null, indicating the user is no longer logged in
    setToken(null);
    // Remove the token from local storage
    localStorage.removeItem('token');
  };

  // Return the AuthContext.Provider component, which wraps the entire app and provides the authentication state and functions to its children

   // Then, Render the children components, which will have access to the authentication state and functions
  return (
    <AuthContext.Provider value={{ token, login, logout }}>
     
      {children}
    </AuthContext.Provider>
  );
};