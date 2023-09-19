import React from "react";

function Actors({ actors }) {
    return (
      <div className="actors">
        <h3>Actors:</h3>
        <ul>
          {actors.map((actor, index) => (
            <li key={index}>{actor}</li>
          ))}
        </ul>
      </div>
    );
};

export default Actors;
  