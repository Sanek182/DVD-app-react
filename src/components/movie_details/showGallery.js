import React, { useState } from "react";

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
      <div className="gallery">
        <h3>Gallery:</h3>
        <button onClick={prevImage}>Previous</button>
        <img src={images[currentImageIndex]} alt="Gallery image" />
        <button onClick={nextImage}>Next</button>
      </div>
    );
};

export default Gallery;
  