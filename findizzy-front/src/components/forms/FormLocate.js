import React, { useState } from 'react';

import scanApi from '../../services/scanApi';

import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import AddCommentIcon from '@mui/icons-material/AddComment';

const FormLocate = (props) => {
  const [credentials, setCredentials] = useState({ to: props.mailTo.email, location: props.location });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await scanApi.sendMail(credentials);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap={2}>
        <Button variant="contained" startIcon={<AddAPhotoIcon/>}>
          <Stack>
            <p className="title">Ajouter une photo</p>
            <p className="details">Aide les gens à me reconnaitre !</p>
          </Stack>
        </Button>

        <Button variant="contained" startIcon={<AddCommentIcon/>}>
          <Stack>
            <p className="title">Ajouter des details</p>
            <p className="details">Si tu as des informations à ajouter.</p>
          </Stack>
        </Button>

        <Button variant="contained" type='submit'>Envoyer</Button>
      </Stack>
    </form>
  );
};

export default FormLocate;