import React from "react";

function Tags({ tags }) {
    return (
      <div className="tags">
        <div>
          {tags.map((tag, index) => (
            <span key={index} className="tag-shield">{tag}</span>
          ))}
        </div>
      </div>
    );
};

export default Tags;