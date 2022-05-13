import React, { useState, useContext } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import authApi from '../../services/authApi';
import authContext from '../../contexts/authContext';
import { useNavigate } from 'react-router-dom';

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
    <div className='formRegister'>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} alignItems="center" direction="column">
        <Grid item>
            <TextField required id="username" label="Nom d'utilisateur" variant="standard" name="username" type="text" 
              onChange={handleChange}
            />
          </Grid>
          <Grid item>
            <TextField required id="email" label="E-mail" variant="standard" name="email" type="text" 
              onChange={handleChange}
            />
          </Grid>
          <Grid item>
            <TextField id="phone" label="Numéro de téléphone" variant="standard" name="phone" type="text" 
              onChange={handleChange}
            />
          </Grid>
          <Grid item >
            <TextField required id="password" label="Mot de passe" variant="standard" name="password" type="password" 
              onChange={handleChange}
            />
          </Grid>

          <Button variant="contained" type='submit'>Envoyer</Button>
        </Grid>
      </form>
    </div>
  );
};

export default FormRegister;