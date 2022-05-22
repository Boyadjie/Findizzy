import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FormPet from '../../components/forms/FormPet';
import PetFormLoader from '../../components/loaders/petFormLoader';



const CreatePet = () => {
  const [userIdLoading, setUserIdLoading] = useState(true);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    getUserId();
  }, []);

  const getUserId = async () => {
    const myUserId = await window.localStorage.getItem("id");
    setTimeout(() => {
      setUserId(myUserId);
      setUserIdLoading(false);
    }, 500)
  }
  
  return (
    <div>
      <Grid className='header' container spacing={2} alignItems="center">
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
        { userIdLoading ? (
          <PetFormLoader />
        ) : (
          <FormPet userId={ userId } />
        )}
      </Box>
    </div>
  );
};

export default CreatePet;