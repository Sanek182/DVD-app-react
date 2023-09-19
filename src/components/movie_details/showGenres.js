import React from "react";

function Genres({ genres }) {
    return (
      <div className="genres">
        <h3>Genres:</h3>
        <ul>
          {genres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>
      </div>
    );
};

export default Genres;