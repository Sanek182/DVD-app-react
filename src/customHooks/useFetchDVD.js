import { useState, useEffect } from 'react';
import { fetchLatestDVDs } from '../api/dvdAPI';

const useFetchDVD = () => {
  const [dvds, setDVDs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDVDs = async () => {
      try {
        const dvdData = await fetchLatestDVDs();
        if (dvdData) {
          setDVDs(dvdData);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDVDs();
  }, []);

  return { dvds, loading, error };
};

export default useFetchDVD;
