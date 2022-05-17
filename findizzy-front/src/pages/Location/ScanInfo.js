import React, { useState, useEffect } from 'react';
import scanApi from '../../services/scanApi';

const ScanInfo = () => {
    let searchParams = parseInt(window.location.search.slice(7));

    const [scanInfo, setscanInfo] = useState(null);
    const [scanLoading, setScanLoading] = useState(true);


    useEffect(() => {
        fetchscanInfo(searchParams);
      }, [searchParams]);
    
      const fetchscanInfo =  async (id) => {
        const myMail = await scanApi.getUserMail(id);
        setTimeout(() => {
          setscanInfo(myMail);
          setScanLoading(false);
        }, 500);
      }

    return (
        <div>
          {scanLoading ? console.log("") : console.log(scanInfo)}
        </div>
    );
};

export default ScanInfo;