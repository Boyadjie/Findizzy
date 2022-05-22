import React, { useState, useEffect } from 'react';
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
import ButtonLoader from '../components/loaders/buttonLoader';
import UserInfos from '../components/profile/UserInfos';
import UserPets from '../components/profile/UserPets';
import Navigation from '../components/Navigation';

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
    }, 500)
  }

  const fetchUserPets = async () => {
    const myPets = await ProfileApi.findUserPets()
    setTimeout(() => {
      setPets(myPets);
      setPetLoading(false);
    }, 500)
  }

  return (
    <div className='profile'>
      <Grid className='header' container spacing={2} alignItems="center">
        <Grid item xs={2}>
            <a className='back-arrow' href="/">
              <ArrowBackIcon />
            </a>
        </Grid>
        <Grid item xs={8}>
            <h1>Mon Profil</h1>
        </Grid>
      </Grid>

      <Box className='profile-infos'>
        { userLoading === true ? (
          <UserInfoLoader />
        ) : (
          <UserInfos user={user} />
        ) }
      </Box>

      <Box className='pets-infos'>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <h2>Mes animaux</h2>
          { userLoading === true ? (
          <ButtonLoader />
        ) : (
          <Button className='btn-add' href={`/profil/ajouter-animal?id=${user.id}`} variant="contained" endIcon={<AddCircleIcon />}>Ajouter un animal</Button>
        ) }
        </Stack>

        { petLoading === true ? (
          <UserPetsLoader />
        ) : (
          <UserPets pets={pets} />
        ) }
      </Box>
      <Navigation />
    </div>
  );
};

export default Profile;