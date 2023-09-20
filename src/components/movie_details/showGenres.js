import React from "react";

function Genres({ genres }) {
    return (
      <div className="genres">
        <ul>
          {genres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>
      </div>
    );
};

export default Genres;