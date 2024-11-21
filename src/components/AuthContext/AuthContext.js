// src/Components/AuthContext/AuthContext.js
import React, { createContext, useContext, useState } from 'react';

// Create the AuthContext
const AuthContext = createContext();

// AuthProvider Component to wrap the application
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // user will store the initials or other user info

  // Function to log in the user
  const login = (initials) => {
    setUser(initials); // Set user initials or any other user data here
  };

  // Function to log out the user
  const logout = () => {
    setUser(null); // Reset user state on logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
