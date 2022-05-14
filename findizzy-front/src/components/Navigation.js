import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import authContext from '../contexts/authContext';

const Navigation = () => {
  const {isAuthenticated} = useContext(authContext);

  return (
    <div className='navigation'>
      <nav>
        <NavLink to='/'>Accueil</NavLink>
        <NavLink to='/'>Magasin</NavLink>
        <NavLink to='/profil'>Mon profil</NavLink>
        {isAuthenticated && <NavLink to='/reglages'>Réglage</NavLink>}
        {!isAuthenticated && <NavLink to='/connexion'>Connexion</NavLink>}
      </nav>
    </div>
  );
};

export default Navigation;