import React, { useState, useContext } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import authApi from '../../services/authApi';
import authContext from '../../contexts/authContext';
import { useNavigate } from 'react-router-dom';

const FormLogin = () => {
  const navigate = useNavigate();
  const {setIsAuthenticated} = useContext(authContext);
  const [credentials, setCredentials] = useState({ identifier: "", password: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await authApi.authenticate(credentials);
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
    <div className='formLogin'>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} alignItems="center" direction="column">
          <Grid item>
            <TextField
                required
                id="identifier"
                label="E-mail"
                variant="filled"
                name="identifier"
                type="text"
                onChange={handleChange}
              />
          </Grid>
          <Grid item >
            <TextField
              required
              id="password"
              label="Mot de passe"
              variant="filled"
              name="password"
              type="text"
              onChange={handleChange}
            />
          </Grid>

          <Button variant="contained" type='submit'>Envoyer</Button>
        </Grid>
      </form>
    </div>
  );
};

export default FormLogin;