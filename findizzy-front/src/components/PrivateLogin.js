import React, { useContext } from 'react';
import authContext from '../contexts/authContext';
import { useLocation, Navigate } from 'react-router-dom';

const PrivateLogin = ({ children }) => {
  const {isAuthenticated} = useContext(authContext);
  const { pathname } = useLocation();

  if (isAuthenticated) {
    return children;
  }else if(!isAuthenticated && pathname === "/connexion") {
    return <Navigate to="/connexion" state={{ from: pathname }} replace />
  }else {
    return <Navigate to="/" state={{ from: pathname }} replace />
  }
};

export default PrivateLogin;