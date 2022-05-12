import React, { useContext, useEffect } from 'react';
import authContext from '../contexts/authContext';
import { useNavigate } from 'react-router-dom';

import Header from "../components/Header";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";


const Home = () => {
  const {isAuthenticated} = useContext(authContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(!isAuthenticated) {
      navigate("/");
    }
  }, []);

  return (
    <div className="home" id="home">
      <Navigation />
      <Header />
      <Footer />
    </div>
  )
}

export default Home;