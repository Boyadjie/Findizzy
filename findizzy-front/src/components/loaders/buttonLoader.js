import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

const buttonLoader = () => {
  return (
    <Box>
        <Skeleton variant="rectangular" width={170} height={30} />
    </Box>
  );
};

export default buttonLoader;