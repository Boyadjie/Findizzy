import React, { useContext } from 'react';
import authApi from '../services/authApi';
import authContext from '../contexts/authContext';
import { useNavigate } from 'react-router-dom';

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
      <Navigation />
      <div className='other'>
        <List>
        <ListItem disablePadding>
            <ListItemButton>
              <Stack direction='row' justifyContent='space-between' alignItems='center' width='100%'>
                <ListItemText primary="Compte" />
              </Stack>
            </ListItemButton>
          </ListItem>

          {/* exemple a copier (avec le divider) */}
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
                <ListItemText primary="Autre" />
              </Stack>
            </ListItemButton>
          </ListItem>

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
      </div>
    </div>
  );
};

export default Settings;