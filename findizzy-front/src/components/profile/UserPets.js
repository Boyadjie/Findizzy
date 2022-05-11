import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';


const UserPets = (props) => {
  return (
    <Box>
      <Stack spacing={1}>
        { props.pets.data.map((pet) => (
          <Box key={pet.id}>
            <Stack direction="row" spacing={1}>
              <Avatar alt="Pet Avatar" src="" />
              <Stack>
                <p>{ pet.attributes.name }</p>
                <p>{ pet.attributes.breed }</p>
                <p>{ pet.attributes.age }</p>
                <a href={`/profil/pet?id=${pet.id}`}>Détails</a>
              </Stack>
            </Stack>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default UserPets;