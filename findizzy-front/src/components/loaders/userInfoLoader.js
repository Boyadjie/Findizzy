import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const userInfoLoader = () => {
  return (
    <Box>
      <Stack spacing={1} alignItems="center">
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={60} height={15} />
        <Skeleton variant="rectangular" width={150} height={15} />
      </Stack>
    </Box>
  );
};

export default userInfoLoader;