import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const userPetsLoader = () => {
  return (
    <Box>
      <Stack spacing={2} marginTop='2rem'>
        <Skeleton variant="rectangular" fullwidth="true" height={77} />
        <Skeleton variant="rectangular" fullwidth="true" height={77} />
        <Skeleton variant="rectangular" fullwidth="true" height={77} />
        <Skeleton variant="rectangular" fullwidth="true" height={77} />
      </Stack>
    </Box>
  );
};

export default userPetsLoader;