// src/components/ProtectedRoute.jsx
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

// Utility to decode JWT (you can move this to utils later)
const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};

const ProtectedRoute = ({ children, allowedRoles = ['user'] }) => {
  const { isAuthenticated, getToken } = useContext(UserContext);
  const location = useLocation();

  // If not authenticated at all
  if (!isAuthenticated) {
    return <Navigate to="/log-in" state={{ from: location }} replace />;
  }

  // Decode token to check role
  const token = getToken();
  const decoded = parseJwt(token);

  // If token invalid or no role
  if (!decoded || !decoded.role) {
    return <Navigate to="/log-in" state={{ from: location }} replace />;
  }

  // Check if user's role is allowed
  if (!allowedRoles.includes(decoded.role)) {
    return <Navigate to="/" replace />; // or to /unauthorized if you have such page
  }

  // All good — render protected component
  return children;
};

export default ProtectedRoute;