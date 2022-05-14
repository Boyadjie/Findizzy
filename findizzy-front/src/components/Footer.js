import React from 'react';
import Socials from './Socials';

const Footer = () => {
  const socials = [
    {
      name: 'Facebook',
      link: 'https://facebook.com',
      image: 'facebook.svg'
    }, 
    {
      name: 'Instagram',
      link: 'https://instagram.com',
      image: 'instagram.svg'
    },
    {
      name: 'Youtube',
      link: 'https://youtube.com',
      image: 'youtube.svg'
    },
    {
      name: 'TikTok',
      link: 'https://tiktok.com',
      image: 'tiktok.svg'
    }
  ];

  const cities = ['Paris','Lyon','Marseille','Toulouse','Bordeaux','Grenoble','Nice','Nante','Lille'];

  return (
    <footer>
      <Socials socials={socials} />
      <div className='content'>
        <div>
          <div className='shops'>
            <h3>Nos magasins</h3>

            <div className='cities'>
              {cities.map((city) =>
                <p key={city}>{city}</p>
              )}
            </div>
          </div>
          <div className='contact'>
            <h3>Contact</h3>

            <div className='infos'>
              <p>mail: contact@gmail.com</p>
              <p>tel: 06 25 54 67 27</p>
            </div>
          </div>
        </div>
        <div className='legals'>
          <p><a href="/conditions-vente">Conditions Générales de Vente</a> | <a href="/information-personnelles">Vos information personnelles</a> | <a href="/cookies">Cookies</a></p>
        </div>
      </div>
      <div className='copyright'>
        <p>Copyright ©  - Tout droits réservé</p>
      </div>
    </footer>
  );
};

export default Footer;