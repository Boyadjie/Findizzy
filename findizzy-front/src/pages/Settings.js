import React, { useContext, useEffect } from 'react';
import authApi from '../services/authApi';
import authContext from '../contexts/authContext';
import { useNavigate } from 'react-router-dom';

import Navigation from "../components/Navigation";


const Settings = () => {
  const {isAuthenticated,setIsAuthenticated} = useContext(authContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(!isAuthenticated) {
      navigate("/");
    }
  }, []);

  const handleDisconnect = () => {
    authApi.logout();
    setIsAuthenticated(false);
    navigate("/");
  }

  return (
    <div className='settings'>
      <Navigation />
      <div className='other'>
        <ul>
          {isAuthenticated && <li onClick={handleDisconnect}>Se déconnecter</li>}
        </ul>
      </div>
    </div>
  );
};

export default Settings;