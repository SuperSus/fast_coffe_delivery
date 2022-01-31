import React, { useEffect, useState } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import useAuth from '../contexts/AuthContext';

const RequireAuth = function ({ children }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const { login, authed } = useAuth();
  const location = useLocation();

  useEffect(() => {
    login().then(() => setIsLoaded(true));
  }, []);

  return authed
    ? children
    : (isLoaded
      && (
      <Navigate
        to="/login"
        replace
        state={{ path: location.pathname }}
      />
      )
    );
};

export default RequireAuth;
