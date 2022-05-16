import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import authApi from '../../services/authApi';
import authContext from '../../contexts/authContext';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const FormLogin = () => {
  const navigate = useNavigate();
  const {setIsAuthenticated} = useContext(authContext);
  const [credentials, setCredentials] = useState({ identifier: "", password: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await authApi.authenticate(credentials);
      setIsAuthenticated(true);
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } catch (e) {
      console.log(e);
    }
  }
  

  const handleChange = ({ currentTarget }) => {
    const {name, value} = currentTarget;
    setCredentials({
      ...credentials,
      [name]: value,
    })
  }

  return (
    <div className='form-login'>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2} direction="column">
          <input required id="identifier" name="identifier" type="text" placeholder='E-mail' onChange={handleChange} />
          <input required id="password" placeholder="Mot de passe" variant="filled" name="password" type="password" onChange={handleChange} />
          
          <Button variant="contained" type='submit'>Envoyer</Button>
        </Stack>
      </form>
    </div>
  );
};

export default FormLogin;