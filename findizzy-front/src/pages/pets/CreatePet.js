import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CreatePetForm from '../../components/forms/createPetForm';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CreatePet = () => {
  return (
    <div>
      <Grid className='profileHeader' container spacing={2} alignItems="center">
        <Grid item xs={2}>
            <a className='back-arrow' href="/profil">
              <ArrowBackIcon sx={{ fontSize: 40 }} />
            </a>
        </Grid>
        <Grid item xs={8}>
            <h1>Ajouter un animal</h1>
        </Grid>
      </Grid>

      <Box>
        <CreatePetForm />
      </Box>
    </div>
  );
};

export default CreatePet;