import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthContext from './contexts/authContext';
import authApi from './services/authApi';
import PrivateLogin from './components/PrivateLogin';
import PrivateSettings from './components/PrivateSettings';

import PetInfo from './components/profile/PetInfo';

import SingIn from './pages/SingIn';
import SingUp from './pages/SingUp';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import CreatePet from './pages/pets/CreatePet';
import Profile from './pages/Profile';
import Location from './pages/Location/Location';
import Scan from './pages/Location/Scan'
import Settings from './pages/Settings';
import ScanInfo from './pages/Location/ScanInfo';
import PrivacyPolicy from './pages/PrivacyPolicy';

const App = () => {
  const [isAuthenticated,setIsAuthenticated] = useState(authApi.isAuthenticated);

  useEffect(() => {
    authApi.isAuthenticated();
  })

  return (
    <AuthContext.Provider value={{isAuthenticated,setIsAuthenticated}}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/connexion' element={<SingIn/>} />
          <Route exact path='/inscription' element={<SingUp/>} />
          <Route exact path='/profil' element={<PrivateLogin ><Profile/></PrivateLogin>} />
          <Route exact path="/profil/ajouter-animal" element={<CreatePet/>} />
          <Route exact path='/profil/annimal' element={<PetInfo/>} />
          <Route exact path='/localiser' element={<Location />} />
          <Route exact path='/localiser/scan' element={<Scan />} />
          <Route exact path='/localiser/scan/info' element={<ScanInfo />} />
          <Route exact path='/reglages' element={<PrivateSettings ><Settings/></PrivateSettings>} />
          <Route exact path='/politique-confidentialite' element={<PrivacyPolicy />} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;