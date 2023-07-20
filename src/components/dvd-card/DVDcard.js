import React from "react";
import { Link } from "react-router-dom";
import "./DVDcard.css";

function DVDcard({ dvd }) {
    const posterUrl = `https://image.tmdb.org/t/p/original${dvd.poster_path}`;
  
    return (
        <div className="dvd-card">
            <Link to={`/movie/${dvd.id}`}>
                <img src={posterUrl} alt={dvd.title} className="dvd-poster" />
                <div className="dvd-info">
                    <h2>{dvd.title}</h2>
                    <p>{dvd.production_countries[0]?.name || ''}</p>
                    <p>{dvd.original_language}</p>
                    <p>{dvd.release_date.slice(0, 4)}</p>
                </div>
            </Link>
        </div>
    );
  }
  
  export default DVDcard;