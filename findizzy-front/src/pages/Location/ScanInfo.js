import React, { useState, useEffect } from 'react';
import FormLocate from '../../components/forms/FormLocate';
import scanApi from '../../services/scanApi';


const ScanInfo = () => {

  let searchParams = parseInt(window.location.search.slice(7));

  const [scanInfo, setscanInfo] = useState(null);
  const [scanLoading, setScanLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [locationLoading, setLocationLoading] = useState(true);

    useEffect(() => {
        fetchscanInfo(searchParams);
        if(navigator.geolocation) {
          fetchLocation();
        }else {
          alert('It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it.');
        }
      }, [searchParams]);
    
      const fetchscanInfo =  async (id) => {
        const myMail = await scanApi.getUserMail(id);
        setTimeout(() => {
          setscanInfo(myMail);
          setScanLoading(false);
        }, 500);
      }

      const fetchLocation =  async () => {
        await navigator.geolocation.getCurrentPosition((position) => {
          const lat = position.coords.latitude;
          const long = position.coords.longitude;
          setTimeout(() => {
            setLocation('latitude:'+lat+' longitude :'+long);
            setLocationLoading(false);
          }, 500);
        });
      }

    return (
        <div>
          {scanLoading ? console.log("") : (
            locationLoading ? console.log('') : (
              <FormLocate mailTo={scanInfo} location={location} />
            )
          )}
        </div>
    );
};

export default ScanInfo;