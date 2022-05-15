import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const UserPets = (props) => {
  return (
    <Box className='pet-list'>
      <Stack spacing={2}>
        { props.pets.data.map((pet) => (
          <Stack className='pet-card' direction="row" spacing={1} alignItems='center' justifyContent='space-between' key={pet.id}>
            <Stack direction="row" spacing={1} alignItems='center'>
              <Avatar className='pet-avatar' alt="Pet Avatar" src="" />
              <Stack>
                <p>{ pet.attributes.name }</p>
                <p>{ pet.attributes.breed }</p>
                <p>{ pet.attributes.age } { pet.attributes.age > 1 ? ("Ans") : ("An") }</p>
              </Stack>
            </Stack>
            <Stack className='pet-detail'>
              <a href={`/profil/annimal/${pet.id}`}>Détails <ArrowForwardIcon /></a>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default UserPets;