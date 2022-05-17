import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

const PetProfile = (props) => {
  return (
    <Box>
      <Stack spacing={2} alignItems="center">
        <Avatar className='pet-avatar' alt="Pet Avatar" src="" />
        <h3> { props.pet.attributes.name } </h3>
      </Stack>

      <Stack spacing={2}>
      
      </Stack>
    </Box>
  );
};

export default PetProfile;