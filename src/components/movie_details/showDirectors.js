import React from "react";

function Directors({ directors }) {
    return (
      <div className="directors">
        <h3>Directors:</h3>
        <ul>
          {directors.map((director, index) => (
            <li key={index}>{director}</li>
          ))}
        </ul>
      </div>
    );
};

export default Directors;