import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import authContext from '../contexts/authContext';
// icons
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';

const Navigation = () => {
  const {isAuthenticated} = useContext(authContext);

  return (
    <div className='navigation'>
      <nav>
        <NavLink className='icon-link' to='/'>
          <HomeIcon />
          Accueil
        </NavLink>
        <NavLink className='icon-link' to='/magasin'>
          <ShoppingBagIcon />
          Magasin
        </NavLink>
        <NavLink className='scan-link' to='/localiser'>
          <div className='btn-background'>
            <img src="img/scan-btn.svg" alt="Bouton localiser" />
          </div>
        </NavLink>
        {isAuthenticated && 
        <NavLink className='icon-link' to='/profil'>
          <PersonIcon />
          Mon&#160;profil
        </NavLink>}
        {!isAuthenticated && 
        <NavLink className='icon-link' to='/connexion'>
          <LoginOutlinedIcon />
          Connexion
        </NavLink>}
        <NavLink className='icon-link' to='/reglages'>
          <SettingsIcon />
          Réglage
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;