import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PetInfo from './components/profile/PetInfo';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import CreatePet from './pages/pets/CreatePet';
import Profile from './pages/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/profil' element={<Profile/>} />
        <Route exact path="/profil/ajouter-animal" element={<CreatePet/>} />
        <Route exact path='/profil/pet' element={<PetInfo/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;