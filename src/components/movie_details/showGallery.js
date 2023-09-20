import React, { useState } from "react";
import './showGallery.css';

function Gallery({ images }) {
    if (!images) {
        return <p>Loading Gallery...</p>;
    }

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const prevImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    return (
      <div className="gallery-wrapper">
        <h3>Gallery:</h3>
        <div className="gallery">
          <button className="prev-button" onClick={prevImage}>&larr;</button>
          <img src={images[currentImageIndex]} alt="Gallery image" />
          <button className="next-button" onClick={nextImage}>&rarr;</button>
      </div>
      </div>
    );
};

export default Gallery;
  