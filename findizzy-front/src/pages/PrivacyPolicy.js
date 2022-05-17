import React from 'react';

import Grid from '@mui/material/Grid';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Navigation from '../components/Navigation';


const PrivacyPolicy = () => {
  return (
    <div className='privacy'>
      <Grid className='header' container spacing={2} alignItems="center">
        <Grid item xs={2}>
            <a className='back-arrow' href="/">
              <ArrowBackIcon />
            </a>
        </Grid>
      </Grid>

      <div className='details'>
        <h1>Politique de confidentialité</h1>
        <p>Les informations recueillies dans le questionnaire sont enregistrées dans un fichier informatisé par Findizzy.<br/>Les bases légales du traitement sont: le consemtement et l'obligation légale.</p>

        <p>Les données collectées seront communiquées aux seuls destinataires suivants : Findizzy.</p>

        <p>Elles sont conservées jusqu'a supression de celle-ci par l'utilisateur (durée de conservation en base active).</p>

        <p>Vous pouvez accéder aux données vous concernant, les rectifier, demander leur effacement ou exercer votre droit à la limitation du traitement de vos données. Vous pouvez retirer à tout moment votre consentement au traitement de vos données. Vous pouvez également vous opposer au traitement de vos données.</p>
          
        <p>Vous pouvez également exercer votre droit à la portabilité de vos données. Consultez le site <a href="cnil.fr">cnil.fr</a> pour plus d'informations sur vos droits.</p>

        <p>Pour exercer ces droits ou pour toute question sur le traitement de vos données dans ce dispositif, vous pouvez contacter Findizzy par mail à l'adresse findizzy.pro@gmail.com avec en objet : "mes droits"</p>

        <p>Si vous estimez, après nous avoir contactés, que vos droits « Informatique et Libertés » ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL.</p>
      </div>

      <Navigation />
    </div>
  );
};

export default PrivacyPolicy;