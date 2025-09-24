import React, { createContext, useState, useEffect } from 'react';
import { loginUser, signupUser, getUserProfile } from '../services/authApi';
import { useNavigate, useLocation } from 'react-router-dom';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  const getToken = () => localStorage.getItem('token');

  // 👇 NEW: Centralized token validation + redirect logic
  const validateTokenAndRedirect = () => {
    const token = getToken();
    const isAuthPage = location.pathname === '/log-in' || location.pathname === '/sign-up';

    if (!token) {
      setIsAuthenticated(false);
      setUser(null);
      if (!isAuthPage) {
        navigate('/log-in', { replace: true });
      }
      return false;
    }
    return true;
  };

  // 👇 Run on mount and whenever path changes
  useEffect(() => {
    const token = getToken();
    if (token) {
      fetchUserDetails();
      setIsAuthenticated(true);
    } else {
      validateTokenAndRedirect(); // 👈 Uses centralized logic
    }
    setLoading(false);
  }, [location.pathname]);

  // 👇 Periodic check every 5 seconds — enhanced with validation function
  useEffect(() => {
    const interval = setInterval(() => {
      validateTokenAndRedirect(); // 👈 Reuses logic
    }, 5000);

    return () => clearInterval(interval);
  }, [location.pathname, navigate]);

  // 👇 Optional: Add manual re-validation trigger (exposed to consumers if needed)
  const revalidateAuth = () => {
    const hasToken = validateTokenAndRedirect();
    if (hasToken) {
      fetchUserDetails(); // Refresh user if token still valid
    }
  };

  const fetchUserDetails = async () => {
    const result = await getUserProfile();
    if (result.success) {
      setUser(result.data.user);
    }
  };

  const login = async (email, password) => {
    const result = await loginUser(email, password);
    if (result.success) {
      localStorage.setItem('token', result.data.token);
      const userProfileResult = await getUserProfile();
      if (userProfileResult.success) {
        setUser(userProfileResult.data.user);
      } else {
        setUser(result.data.user);
      }
      setIsAuthenticated(true);
      return { success: true };
    } else {
      return { success: false, message: result.message };
    }
  };

  const signup = async (userData) => {
    const result = await signupUser(userData);
    if (result.success) {
      localStorage.setItem('token', result.data.token);
      const userProfileResult = await getUserProfile(result.data.token);
      if (userProfileResult.success) {
        setUser(userProfileResult.data.user);
      } else {
        setUser(result.data.user);
      }
      setIsAuthenticated(true);
      navigate('/', { replace: true });
      return { success: true };
    } else {
      return { success: false, message: result.message };
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('token');
    navigate('/log-in', { replace: true });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <UserContext.Provider 
      value={{ 
        user, 
        getToken, 
        isAuthenticated, 
        login, 
        signup, 
        logout, 
        fetchUserDetails,
        revalidateAuth // 👈 Expose for manual checks if needed elsewhere
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };