import React, { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PetProfile from './PetProfile';

import petApi from '../../services/petApi';

const PetInfo = () => {
  const [petInfos, setPetInfos] = useState(null);
  const [petLoading, setPetLoading] = useState(true);

  let [searchParams] = useSearchParams();

  useEffect(() => {
    fetchPetInfos(searchParams.get("id"));
  }, [searchParams]);

  const fetchPetInfos =  async (id) => {
    const myPet = await petApi.getPet(id);
    setTimeout(() => {
      setPetInfos(myPet);
      setPetLoading(false);
    }, 500);
  }

  return (
    <div className='pet-infos'>
      <Grid className='header' container spacing={2} alignItems="center">
        <Grid item xs={2}>
            <a className='back-arrow' href="/profil">
              <ArrowBackIcon />
            </a>
        </Grid>
        <Grid item xs={8}>
            <h1>Mon Animal</h1>
        </Grid>
      </Grid>

      <Box className='pet-profile'>
      { petLoading ? "loading..." :  (
        <PetProfile pet={petInfos.data} />
        ) 
      }
      </Box>
    </div>
  );
};

export default PetInfo;