import React, { useContext, useState, useEffect } from 'react';
import authContext from '../contexts/authContext';
import ProfileApi from '../services/profileApi'

import Navigation from "../components/Navigation";
import Header from "../components/Header";


const Home = () => {
  const {isAuthenticated} = useContext(authContext);
  const [userLoading, setUserLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const myUser = await ProfileApi.findUser()
    setTimeout(() => {
      setUser(myUser);
      setUserLoading(false);
    }, 500)
  }

  return (
    <div className="home" id="home">
      <Header />

      <div className="homescreen_container">
        <div className="homescreen_container_i">
          <img src="img/chat.png" alt="" />
          <div> <h3 id='b'>Bonjour,</h3>
          { isAuthenticated ? (
          <h3 id='bl'>
            { userLoading ? (
              '...'
            ) : (
              user.username
            ) }
        </h3>) : (<br/>) }
        </div>
          <p>Nous allons t'aider à protéger tes animaux de compagnie.</p>
        </div>
      </div>

      <div className="homescreen_container_2">
        <div id="miaou" className="little_box">
          <img src="img/sac.png" alt="Icone Magasin" />
          <p>je veux un collier</p>
        </div>
        <div className="little_box">
          <img src="img/petitlogo.png" alt="Logo" />
          <p>J'ai trouvé un animal bandonné </p>
        </div>
        <div id="miaou" className="little_box">
          <img src="img/tete.png" alt="Picto triste" />
          <p>J'ai perdu mon animal</p>
        </div>
      </div>

      <Navigation />
    </div>
  )
}

export default Home;