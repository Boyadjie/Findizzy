import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import petApi from '../../services/petApi';

const PetDetails = ({ petId }) => {
  const [petInfos, setPetInfos] = useState(null);

  useEffect(() => {
    fetchPetInfos(petId);
  }, []);

  const fetchPetInfos =  async (id) => {
    const myPet = await petApi.getPet(id);
    setPetInfos(myPet);
  }

  return (
    <div>
      <p>{ console.log(petInfos) }</p>
    </div>
  );
}

const PetInfo = () => {
  const { id } = useParams();

  return (
    <PetDetails petId={id}/>
  );
};

export default PetInfo;