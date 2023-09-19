import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchDVDById } from "../../api/dvdAPI";
import Actors from "../../components/movie_details/showActors";
import Directors from "../../components/movie_details/showDirectors";
import Genres from "../../components/movie_details/showGenres";
import Tags from "../../components/movie_details/showTags";
import Gallery from "../../components/movie_details/showGallery";
import "./ProductPage.css";

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
    <div className="product-page">
      { dvd ? (
        <>
          <div className="gallery-section">
            <Gallery images={dvd.gallery} />
            <Tags tags={dvd.tags} />
          </div>

          <div className="info-section">
            <h1>{dvd.movie_title} <i>({dvd.original_title})</i></h1>
            <h2>{dvd.year_produced} <i>({dvd.year_dvd_released})</i></h2>
            <Genres genres={dvd.genres} />
            <p>{dvd.movie_country}</p>
            <p>{dvd.language} (Subtitles: <i>{dvd.movie_subtitle})</i></p>
            <p>{dvd.movie_length} min</p>
            <p>Type: {dvd.product_type}</p>
          </div>

          <div className="description-section">
            <h3>Synopsis: </h3>
            <p>{dvd.movie_description}</p>
            <Directors directors={dvd.directors} />
            <Actors actors={dvd.actors} />
          </div>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default ProductPage;
