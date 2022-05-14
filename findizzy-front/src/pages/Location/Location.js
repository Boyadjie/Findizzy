import React from 'react';
import Grid from '@mui/material/Grid';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Location = () => {
    return (
        <div className='location'>
            <Grid className='header' container spacing={2} alignItems="center">
                <Grid item xs={2}>
                    <a className='back-arrow' href="/">
                    <ArrowBackIcon />
                    </a>
                </Grid>
                <Grid item xs={8}>
                    <h1>Localiser</h1>
                </Grid>
            </Grid>

            <div className="container">
                <img src="img/image1.png" alt='icon localiser' />
                <h2>Position</h2>
                <p>Envoyer votre position lorsque vous rencontrer
                un chien abandonné. Afin d'aider son maître à
                le retrouver.
                </p>
            </div>

            <footer>
                <button>Autoriser la localisation</button>
            </footer>

        </div>
    );     
};

export default Location;