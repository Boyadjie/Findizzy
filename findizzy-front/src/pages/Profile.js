import React from 'react';
import { useState, useEffect } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const Profile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

    useEffect(() => {
      fetch("http://localhost:1337/api/users/1", 
      {
        method: "GET",
        headers: {
          'Accept': 'Application/json'
        }
      })
      .then(response => response.json())
      .then(response => {
        setTimeout(() => {
          setUser(response);
          setIsLoading(false);
        }, 2000)
      })
      .catch(err => {
        console.log(err);
      });
    }, [])
  return (
    <div>
      <a className='' href="/"><ArrowBackIcon sx={{ fontSize: 40 }} /></a>
      <h1>Mon Profil</h1>
      <div className='profileInformations'>
        { isLoading == true ? (
          <Box>
            <Stack spacing={1}>
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="rectangular" width={210} height={118} />
            </Stack>
          </Box>
        ) : user.username }
      </div>
    </div>
  );
};

export default Profile;