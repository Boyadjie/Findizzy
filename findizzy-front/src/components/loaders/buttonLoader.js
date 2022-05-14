import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

const buttonLoader = () => {
  return (
    <Box>
        <Skeleton variant="rectangular" width={150} height={35} />
    </Box>
  );
};

export default buttonLoader;