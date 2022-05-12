import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PetInfo from './components/profile/PetInfo';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import CreatePet from './pages/pets/CreatePet';
import Profile from './pages/Profile';
import Location from './pages/Location/Location';
import SingIn from './pages/SingIn';
import AuthContext from './contexts/authContext';
import authApi from './services/authApi';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  const [isAuthenticated,setIsAuthenticated] = useState(authApi.isAuthenticated);

  return (
    <AuthContext.Provider value={{isAuthenticated,setIsAuthenticated}}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/connexion' element={<SingIn/>} />
          <Route exact path='/profil' element={<PrivateRoute ><Profile/></PrivateRoute>} />
          <Route exact path="/profil/ajouter-animal" element={<CreatePet/>} />
          <Route exact path='/profil/pet' element={<PetInfo/>} />
          <Route exact path='/localiser' element={<Location />} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;