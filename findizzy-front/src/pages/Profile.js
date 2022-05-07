import React from 'react';
import { useState, useEffect } from 'react'
// icons
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddCircleIcon from '@mui/icons-material/AddCircle';
// material components
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
// components
import ProfileApi from '../services/profileApi'
import UserInfoLoader from '../components/loaders/userInfoLoader';
import UserPetsLoader from '../components/loaders/userPetsLoader';
import UserInfos from '../components/profile/UserInfos';
import UserPets from '../components/profile/UserPets';

const Profile = () => {
  const [userLoading, setUserLoading] = useState(true);
  const [petLoading, setPetLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [pets, setPets] = useState(null);

    useEffect(() => {
      fetchUser();
      fetchUserPets();
    }, []);

    const fetchUser = async () => {
      const myUser = await ProfileApi.findUser()
      setTimeout(() => {
        setUser(myUser);
        setUserLoading(false);
      }, 1000)
    }

    const fetchUserPets = async () => {
      const myPets = await ProfileApi.findUserPets()
      setTimeout(() => {
        setPets(myPets);
        setPetLoading(false);
      }, 1000)
    }

  return (
    <Box>
      <Grid className='profileHeader' container spacing={2} alignItems="center">
        <Grid item xs={2}>
            <a className='back-arrow' href="/">
              <ArrowBackIcon sx={{ fontSize: 40 }} />
            </a>
        </Grid>
        <Grid item xs={8}>
            <h1>Mon Profil</h1>
        </Grid>
      </Grid>

      <Box className='profileInformations'>
        { userLoading === true ? (
          <UserInfoLoader />
        ) : (
          <UserInfos user={user} />
        ) }
      </Box>

      <Box className='petsInformations'>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <h2>Mes animaux</h2>
          <Button href="/profil/ajouter-animal" variant="contained" endIcon={<AddCircleIcon />}>Ajouter un animal</Button>
        </Stack>

        { petLoading === true ? (
          <UserPetsLoader />
        ) : (
          <UserPets pets={pets} />
        ) }
      </Box>
    </Box>
  );
};

export default Profile;