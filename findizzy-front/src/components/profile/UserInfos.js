import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

const UserInfos = (props) => {
  return (
    <Box>
      <Stack spacing={2} alignItems="center">
        <Avatar className='user-avatar' alt="User Avatar" src="" />
        <h3> { props.user.username } </h3>
        <h2> { props.user.email } </h2>
      </Stack>
    </Box>
  );
};

export default UserInfos;