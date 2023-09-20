import React, { useState, useEffect } from 'react';
import { fetchAllDVDs } from '../../api/dvdAPI';
import DVDcard from '../../components/dvd-card/DVDcard';
import { useForm } from 'react-hook-form';

function ProductsPage() {
  const [dvds, setDVDs] = useState([]);
  const { register, handleSubmit } = useForm();

  const onFilter = (data) => {
    const filteredData = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "All")
    );
    const fetchData = async () => {
      const dvdData = await fetchAllDVDs(filteredData);
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
          <option value="All">All Genres</option>
          <option value="Comedy">Comedy</option>
          <option value="Crime">Crime</option>
          <option value="Drama">Drama</option>
          <option value="Thriller">Thriller</option>          
        </select>
        <select {...register("decade")}>
          <option value="All">All Years</option>
          <option value="1980">1980s</option>
          <option value="1990">1990s</option>
          <option value="2000">2000s</option>
        </select>
        <select {...register("country")}>
          <option value="All">All Countries</option>
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
