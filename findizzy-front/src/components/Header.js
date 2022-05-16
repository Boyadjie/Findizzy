import React from 'react';
import { Stack } from '@mui/material';

import Logo from './Logo';

const Header = () => {
  return (
    <header>
      <Stack direction="row" justifyContent='space-between' alignItems='center' >
        <a href="/carte">
          <img src="img/carte.png" alt="Icone Carte" />
        </a>
        <Logo image='petitlogo' />
        <a href="/notifications">
          <img src="img/bell.png" alt="Icone Notifications" />
        </a>
      </Stack>
    </header>
  );
};

export default Header;