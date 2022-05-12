import React from 'react';
import Grid from '@mui/material/Grid';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Location = () => {
    return (
        <div className='body'>
            <nav>
            <img src='img/left-arrow.png'/>
            <p>Localiser</p>
            <p>annuler</p>
            </nav>

            <div className="container">
                <img src="img/image1.png" />
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