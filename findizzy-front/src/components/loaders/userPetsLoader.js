import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const userPetsLoader = () => {
  return (
    <Box>
      <Stack spacing={1}>
        <Skeleton variant="rectangular" width={200} height={40} />
        <Skeleton variant="rectangular" width={200} height={40} />
        <Skeleton variant="rectangular" width={200} height={40} />
        <Skeleton variant="rectangular" width={200} height={40} />
        <Skeleton variant="rectangular" width={200} height={40} />
      </Stack>
    </Box>
  );
};

export default userPetsLoader;