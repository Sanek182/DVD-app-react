import React from "react";
import { Link } from "react-router-dom";
import "./DVDcard.css";

function DVDcard({ dvd }) {
  const posterUrl = dvd.poster_path;
  
  return (
    <div className="dvd-card">
      <Link to={`/movie/${dvd.id}`}>
        <img src={posterUrl} alt={dvd.title} className="dvd-poster" />
        <div className="dvd-info">
          <h2>{dvd.movie_title}</h2>
          <p>{dvd.movie_country}</p>
          <p>{dvd.movie_language}</p>
          <p>{dvd.year_produced}</p>
        </div>
      </Link>
    </div>
  );
}

export default DVDcard;
