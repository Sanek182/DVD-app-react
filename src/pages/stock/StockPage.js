import React, { useState, useEffect } from 'react';
import { fetchAllDVDs } from '../../api/dvdAPI';
import DVDcard from '../../components/dvd-card/DVDcard';
import { useForm } from 'react-hook-form';

function ProductsPage() {
  const [dvds, setDVDs] = useState([]);
  const { register, handleSubmit } = useForm();

  const onFilter = (data) => {
    const fetchData = async () => {
      const dvdData = await fetchAllDVDs(data);
      setDVDs(dvdData);
    };
    fetchData();
  };

  useEffect(() => {
    const fetchData = async () => {
      const dvdData = await fetchAllDVDs();
      setDVDs(dvdData);
    };
    fetchData();
  }, []);

  return (
    <div className="products-page">
      <form onSubmit={handleSubmit(onFilter)}>
        <select {...register("genre")}>
            <option value="Action">Comedy</option>
            <option value="Comedy">Crime</option>
            <option value="Drama">Drama</option>
            <option value="Drama">Thriller</option>          
        </select>
        <select {...register("decade")}>
            <option value="1990">1980s</option>
            <option value="2000">1990s</option>
            <option value="2010">2000s</option>
        </select>
        <select {...register("country")}>
            <option value="United States">United States</option>
            <option value="France">France</option>
            <option value="Japan">Japan</option>
        </select>
        <button type="submit">Filter</button>
      </form>
      
      <div className="dvd-list">
        {dvds.map((dvd) => (
          <DVDcard key={dvd.id} dvd={dvd} />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
