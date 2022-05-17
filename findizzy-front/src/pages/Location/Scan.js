import React, { useState, useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useNavigate } from 'react-router-dom';

const Scan = () => {

    const [scannedCodes, setScannedCodes] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
      function onScanSuccess(decodedText, decodedResult) {
        // handle the scanned code as you like, for example:
        console.log(`Code matched = ${decodedText}`, decodedResult);
        navigate(`${decodedText}`) 
        setScannedCodes(scannedCodes.concat([{ decodedText, decodedResult }]));
      }
  
      function onScanFailure(error) {
        // handle scan failure, usually better to ignore and keep scanning.
        // for example:
        // console.warn(`Code scan error = ${error}`);
      }
  
      let html5QrcodeScanner = new Html5QrcodeScanner(
        "reader",
        { fps: 10, qrbox: { width: 250, height: 250 } },
        /* verbose= */ false
      );
      html5QrcodeScanner.render(onScanSuccess, onScanFailure);
    });
    return (
        <div className="scan">
        <div id="reader" width="100vw"></div>
        <ol>
          {scannedCodes.map((scannedCode, index) => (
            <li key={index}>{scannedCode.decodedText}</li>
          ))}
        </ol>
      </div>
    );
};

export default Scan;