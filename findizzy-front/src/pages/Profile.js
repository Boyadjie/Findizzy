import React from 'react';
import { useState, useEffect } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

const Profile = () => {
  const [userLoading, setUserLoading] = useState(true);
  const [petLoading, setPetLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [pets, setPets] = useState(null);

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
          setUserLoading(false);
        }, 2000)
      })
      .catch(err => {
        console.log(err);
      });
    }, [])

    useEffect(() => {
      fetch("http://localhost:1337/api/pets?user=1", 
      {
        method: "GET",
        headers: {
          'Accept': 'Application/json'
        }
      })
      .then(response => response.json())
      .then(response => {
        setTimeout(() => {
          setPets(response);
          setPetLoading(false);
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
        { userLoading === true ? (
          <Box>
            <Stack spacing={1}>
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="rectangular" width={50} height={10} />
              <Skeleton variant="rectangular" width={100} height={10} />
            </Stack>
          </Box>
        ) : (
          <Box>
            <Stack spacing={1}>
              <Avatar alt="User Avatar" src="" />
              <h3> { user.username } </h3>
              <h2> { user.email } </h2>
            </Stack>
          </Box>
        ) }
      </div>

      <div className='profileInformations'>
        { petLoading === true ? (
          <Box>
            <Stack spacing={1}>
              <Skeleton variant="rectangular" width={200} height={40} />
              <Skeleton variant="rectangular" width={200} height={40} />
            </Stack>
          </Box>
        ) : (
          <Box>
            <Stack spacing={1}>
              { pets.data.map((pet) => (
                <Box>
                  <Stack direction="row" spacing={1}>
                    <Avatar alt="Pet Avatar" src="" />
                    <Stack>
                      <p>{ pet.attributes.name }</p>
                      <p>{ pet.attributes.type }</p>
                    </Stack>
                  </Stack>
                </Box>
              ))}
            </Stack>
          </Box>
        ) }
      </div>
    </div>
  );
};

export default Profile;