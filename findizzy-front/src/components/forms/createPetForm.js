import React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';


const createPetForm = () => {
  return (
    <form>
      <Grid container spacing={2} alignItems="center" direction="column">
        <Grid item>
          <TextField
              required
              id="pet-name"
              label="Name"
              variant="filled"
              name="pet-name"
              type="text"
            />
        </Grid>
        <Grid item >
          <TextField
            required
            id="pet-type"
            label="Type"
            variant="filled"
            name="pet-type"
            type="text"
          />
        </Grid>
        <Grid item>
          <label htmlFor="pet-avatar">Picture : </label>
          <input type="file" id="pet-avatar" name="pat-avatar" accept="image/png, image/jpeg, image/webp, image/jpg" />
        </Grid>
      </Grid>
    </form>
  );
};

export default createPetForm;