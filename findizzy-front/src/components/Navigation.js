import React from 'react';
import { NavLink } from 'react-router-dom';
// const { useRef } = React;

const Navigation = () => {
  return (
    <div className='navigation '>
      <nav>
        <NavLink exact to='/'>Accueil</NavLink>
      </nav>
    </div>
  );
};

export default Navigation;