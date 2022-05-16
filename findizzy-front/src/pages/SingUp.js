import React from 'react';


import FormRegister from '../components/forms/FormRegister';

const SingUp = () => {
  return (
    <div className='signUp'>
      <img className='add-pict' src="/img/add-pict.png" alt="Ajouter" />

      <FormRegister />

      <p className='signInUp-redirect'>Tu as déjà un compte? <a href="/connexion">Se connecter</a></p>
    </div>
  );
};

export default SingUp;