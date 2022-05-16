import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import authApi from '../../services/authApi';
import authContext from '../../contexts/authContext';

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

import Button from '@mui/material/Button';


const FormRegister = () => {
  const navigate = useNavigate();
  const {setIsAuthenticated} = useContext(authContext);
  const [credentials, setCredentials] = useState({ username: "", email: "", phone: "", password: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await authApi.register(credentials);
      setIsAuthenticated(true);
      navigate('/');
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
    <div className='form-register'>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2} direction="column">
          <TextField required id="username" label="Nom d'utilisateur" variant="standard" name="username" type="text" fullWidth onChange={handleChange}
          />
          <TextField required id="email" label="E-mail" variant="standard" name="email" type="text" fullWidth onChange={handleChange}
          />
          <TextField required id="phone" label="Numéro de téléphone" variant="standard" name="phone" type="text" fullWidth onChange={handleChange}
          />
          <TextField required id="password" label="Mot de passe" variant="standard" name="password" type="password" fullWidth onChange={handleChange}
          />

          <Button variant="contained" type='submit'>S'inscrire</Button>
        </Stack>
      </form>
    </div>
  );
};

export default FormRegister;