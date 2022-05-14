import React from 'react';
import FormRegister from '../components/forms/FormRegister';

const SingUp = () => {
  return (
    <div className='signIn'>
      <FormRegister />

      <p className='signInUp-redirect'>Tu as déjà un compte? <a href="/connexion">S'inscrire ici</a></p>
    </div>
  );
};

export default SingUp;