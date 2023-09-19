import React from "react";

function Tags({ tags }) {
    return (
      <div className="tags">
        <h3>Tags:</h3>
        <div>
          {tags.map((tag, index) => (
            <span key={index} className="tag-shield">{tag}</span>
          ))}
        </div>
      </div>
    );
};

export default Tags;