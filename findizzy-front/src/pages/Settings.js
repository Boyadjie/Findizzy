import React, { useContext } from 'react';
import authApi from '../services/authApi';
import authContext from '../contexts/authContext';
import { useNavigate } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import Navigation from "../components/Navigation";


const Settings = () => {
  const {isAuthenticated,setIsAuthenticated} = useContext(authContext);
  const navigate = useNavigate();

  const handleDisconnect = () => {
    authApi.logout();
    setIsAuthenticated(false);
    navigate("/");
  }

  return (
    <div className='settings'>
      <Grid className='header' container spacing={2} alignItems="center" justifyContent='center'>
        <Grid item>
          <h1>Paramètres</h1>
        </Grid>
      </Grid>

      <List>
        <ListItem className='dark' disablePadding>
          <ListItemButton>
            <Stack direction='row' justifyContent='space-between' alignItems='center' width='100%'>
              <ListItemText primary="Compte" />
            </Stack>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <Stack direction='row' justifyContent='space-between' alignItems='center' width='100%'>
              <ListItemText primary="Editer Profil" />
              <ArrowForwardIosIcon/>
            </Stack>
          </ListItemButton>
        </ListItem>
        <Divider />

        <ListItem disablePadding>
          <ListItemButton>
            <Stack direction='row' justifyContent='space-between' alignItems='center' width='100%'>
              <ListItemText primary="Modifier mot de pass" />
              <ArrowForwardIosIcon/>
            </Stack>
          </ListItemButton>
        </ListItem>
        <Divider />

        <ListItem disablePadding>
          <ListItemButton>
            <Stack direction='row' justifyContent='space-between' alignItems='center' width='100%'>
              <ListItemText primary="Langues" />
              <ArrowForwardIosIcon/>
            </Stack>
          </ListItemButton>
        </ListItem>

        <ListItem className='dark' disablePadding>
          <ListItemButton>
            <Stack direction='row' justifyContent='space-between' alignItems='center' width='100%'>
              <ListItemText primary="Autre" />
            </Stack>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <a href="/politique-confidentialite">
            <ListItemButton>
              <Stack direction='row' justifyContent='space-between' alignItems='center' width='100%'>
                <ListItemText primary="Politique de confidentialité" />
                <ArrowForwardIosIcon/>
              </Stack>
            </ListItemButton>
          </a>
        </ListItem>
        <Divider />

        <ListItem disablePadding>
          <ListItemButton>
            <Stack direction='row' justifyContent='space-between' alignItems='center' width='100%'>
              <ListItemText primary="Nous contacter" />
              <ArrowForwardIosIcon/>
            </Stack>
          </ListItemButton>
        </ListItem>
        <Divider />

        <ListItem disablePadding>
          <ListItemButton>
            <Stack direction='row' justifyContent='space-between' alignItems='center' width='100%'>
              <ListItemText primary="À propos" />
              <ArrowForwardIosIcon/>
            </Stack>
          </ListItemButton>
        </ListItem>
        <Divider />

        {isAuthenticated && 
          <ListItem disablePadding onClick={handleDisconnect}>
            <ListItemButton>
              <Stack direction='row' justifyContent='space-between' alignItems='center' width='100%'>
                <ListItemText primary="Se déconnecter" />
                <ArrowForwardIosIcon/>
              </Stack>
            </ListItemButton>
          </ListItem>
        }
        <Divider/>
      </List>

      <Navigation />
    </div>
  );
};

export default Settings;