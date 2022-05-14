import React from 'react';
import Grid from '@mui/material/Grid';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Navigation from "../../components/Navigation";

const Homescreen = () => {
    return (
        <div className='homescreen'>
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

            <div className="homescreen_container">
                <div className="homescreen_container_i">
                    <img src="img/chat.png" alt="" />
                    <div> <h3 id='b'>Bonjour,</h3> <h3 id='bl'>LoveToutou</h3></div>
                    <p>Nous allons t'aider à protéger tes animaux de compagnie.</p>
                </div>
            </div>

            <div className="homescreen_container_2">
                <div id="miaou" className="little_box">
                    <img src="img/sac.png" alt="" />
                    <p>je veux un collier</p>
                </div>
                <div className="little_box">
                    <img src="img/logopetit.png" alt="" />
                    <p>J'ai trouvé un animala bandonné </p>
                </div>
                <div id="miaou" className="little_box">
                    <img src="img/tete.png" alt="" />
                    <p>J'ai perdu mon animal</p>
                </div>
            </div>


            <Navigation />

        </div>
    );     
};

export default Homescreen;