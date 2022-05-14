import React from 'react';
import FormLogin from '../components/forms/FormLogin';

const SingIn = () => {
  return (
    <div className='signIn'>
      <FormLogin />

      <p className='signInUp-redirect'><a href="/inscription">S'inscrire ici</a></p>

    </div>
  );
};

export default SingIn;