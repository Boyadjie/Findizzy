import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const petFormLoader = () => {
  return (
    <Box>
      <Stack spacing={1} alignItems="center">
        <Skeleton variant="rectangular" width={200} height={35} />
        <Skeleton variant="rectangular" width={200} height={35} />
        <Skeleton variant="rectangular" width={200} height={35} />
        <Skeleton variant="rectangular" width={150} height={35} />
      </Stack>
    </Box>
  );
};

export default petFormLoader;