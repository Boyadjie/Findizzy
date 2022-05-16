import React, { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import petApi from '../../services/petApi';

const PetInfo = () => {
  const [petInfos, setPetInfos] = useState(null);
  const [petLoading, setPetLoading] = useState(true);

  let [searchParams] = useSearchParams();

  useEffect(() => {
    fetchPetInfos(searchParams.get("id"));
  }, [searchParams]);

  const fetchPetInfos =  async (id) => {
    const myPet = await petApi.getPet(id);
    setTimeout(() => {
      setPetInfos(myPet);
      setPetLoading(false);
    }, 500);
  }

  return (
    <div>
      <p>{ petLoading ? "loading..." :  (petInfos.data.attributes.name) }</p>
    </div>
  );
};

export default PetInfo;