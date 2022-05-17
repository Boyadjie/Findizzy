import React from 'react';

const ScanInfo = () => {

    let searchParams = parseInt(window.location.search.slice(7));

    const [scanInfo, setscanInfo] = useState(null);
    const [ScanLoading, setScanLoading] = useState(true);

    let [searchParams] = useSearchParams();


    useEffect(() => {
        fetchscanInfo(searchParams);
      }, [searchParams]);
    
      const fetchscanInfo =  async (id) => {
        const myUser = await scanApi.getScan(id);
        setTimeout(() => {
          setscanInfo(myUser);
          setScanLoading(false);
        }, 500);

    return (
        <div>
            
        </div>
    );
};

export default ScanInfo;