import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import petApi from '../../services/petApi';

const FormPet = () => {
  const [pet, setPet] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = petApi.createPet(pet);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }

  const handleChange = ({ currentTarget }) => {
    const {name, value} = currentTarget;
    setPet({
      ...pet,
      [name]: value,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} alignItems="center" direction="column">
        <Grid item>
          <TextField
              required
              id="name"
              label="Nom"
              variant="filled"
              name="name"
              type="text"
              onChange={handleChange}
            />
        </Grid>
        <Grid item >
          <TextField
            required
            id="race"
            label="Race"
            variant="filled"
            name="race"
            type="text"
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <label htmlFor="pet-avatar">Picture : </label>
          <input type="file" id="pet-avatar" name="pat-avatar" accept="image/png, image/jpeg, image/webp, image/jpg" />
        </Grid>

        <Button variant="contained" type='submit'>Envoyer</Button>
      </Grid>
    </form>
  );
};

export default FormPet;