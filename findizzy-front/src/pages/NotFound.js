import React from 'react';

import Grid from '@mui/material/Grid';

import Navigation from '../components/Navigation';

const NotFound = () => {
  return (
    <div className='notFound'>
      <Grid className='header' container spacing={2} alignItems="center" justifyContent='center'>
        <Grid item>
          <h1>Erreur</h1>
        </Grid>
      </Grid>
      <div className='error-img'></div>
      <Navigation />
    </div>
  );
};

export default NotFound;