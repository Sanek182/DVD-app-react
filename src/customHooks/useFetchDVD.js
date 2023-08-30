import { useState, useEffect } from 'react';
import { fetchDVDData } from '../api/dvdAPI';

const useFetchDVD = (movieIDs) => {
  const [dvd, setDVD] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDVD = async () => {
      try {
        const fetchedDVD = await Promise.all(movieIDs.map(id => fetchDVDData(id)));
        setDVD(fetchedDVD.filter(Boolean));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDVD();
  }, [movieIDs]);

  return { dvd, loading, error };
};

export default useFetchDVD;
