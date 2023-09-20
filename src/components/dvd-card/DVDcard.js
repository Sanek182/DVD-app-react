import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faHeartCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from "../authentication/authContext";
import "./DVDcard.css";
import { addToCart } from "../../api/shoppingAPI";
import { toast } from 'react-toastify';

function DVDcard({ dvd }) {
  const posterUrl = dvd.poster_path;
  const { isAuthenticated } = useAuth();
  const [cart, setCart] = useState([]);

  const handleAddToCart = async (dvdId) => {

    const response = await addToCart(dvd.id);
    
    if (response && response.success) {
      setCart(prevCart => [...prevCart, {  id: dvd.id, quantity: 1  }]);
      toast.success('DVD successfully added to cart!');
    } else {
      toast.error('Failed to add DVD to cart.');
    }
  };

  const handleAddToWishlist = () => {
    // Logic to add this dvd to wishlist
  };
  
  return (
    <div className="dvd-card-container">
      {isAuthenticated && (
        <div className="dvd-actions">
          <button onClick={() => handleAddToCart(dvd.id)}>
            <FontAwesomeIcon icon={faCartPlus} />
          </button>
        </div>
      )}

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

      {isAuthenticated && (
        <div className="dvd-actions">
          <button onClick={handleAddToWishlist}>
            <FontAwesomeIcon icon={faHeartCirclePlus} />
          </button>
        </div>
      )}

    </div>
  );
};

export default DVDcard;
