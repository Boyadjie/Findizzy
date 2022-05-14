import React from 'react';

import Header from "../components/Header";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";


const Home = () => {
  return (
    <div className="home" id="home">
      <Navigation />
      <Header />
      <Footer />
    </div>
  )
}

export default Home;