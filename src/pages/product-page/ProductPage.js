import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchDVDById } from "../../api/dvdAPI";

function ProductPage() {
  let { id } = useParams();
  const [ dvd, setDVD ] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const dvdData = await fetchDVDById(id);
      setDVD(dvdData);
    };

    fetchData();
  }, [id]);

  return (
    <div>
      { dvd ? (
        <>
          <h1>{dvd.movie_title}</h1>
          <h2>{dvd.year_produced}</h2>
          <p>{dvd.movie_country}</p>
          <p>{dvd.movie_description}</p>
          <p>{dvd.product_type}</p>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default ProductPage;
