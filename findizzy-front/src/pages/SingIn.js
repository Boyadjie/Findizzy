import React from 'react';

import Stack from '@mui/material/Stack';

import Logo from '../components/Logo';
import FormLogin from '../components/forms/FormLogin';

const SingIn = () => {
  return (
    <div className='signIn'>
      <Stack className='connexion-header' gap={1} justifyContent='center' alignItems='center'>
        <Logo image='logo' />
        <h1>Connexion</h1>
      </Stack>

      <FormLogin />
      <p className='reset-pass'><a href="/connexion/reset-pass">Mot de passe oublié?</a></p>

      <p className='signInUp-redirect'><a href="/inscription">S'inscrire ici</a></p>

    </div>
  );
};

export default SingIn;