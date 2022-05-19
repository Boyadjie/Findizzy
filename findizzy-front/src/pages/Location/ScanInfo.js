import React, { useState, useEffect } from 'react';
import FormLocate from '../../components/forms/FormLocate';
import scanApi from '../../services/scanApi';
import { useSearchParams } from "react-router-dom";



const ScanInfo = () => {
  const [scanInfo, setScanInfo] = useState(null);
  const [scanLoading, setScanLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [locationLoading, setLocationLoading] = useState(true);

  let [searchParams] = useSearchParams();

  useEffect(() => {
    fetchscanInfo(searchParams.get("petId"));
    if(navigator.geolocation) {
      fetchLocation();
    }else {
      alert('It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it.');
    }
  }, [searchParams]);

  const fetchscanInfo =  async (id) => {
    const myMail = await scanApi.getUserMail(id);
    setTimeout(() => {
      setScanInfo(myMail);
      setScanLoading(false);
    }, 500);
  }

  const fetchLocation =  async () => {
    await navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      setTimeout(() => {
        setLocation(lat+' '+long);
        setLocationLoading(false);
      }, 500);
    });
  }

  return (
      <div>
        {scanLoading ? ("loading...") : (
          locationLoading ? ("Accepter la localisation !") : (
            <FormLocate mailTo={scanInfo} location={location} />
          )
        )}
      </div>
  );
};

export default ScanInfo;