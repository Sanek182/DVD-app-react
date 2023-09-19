import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { searchDVDs } from '../../api/dvdAPI';
import DVDcard from '../../components/dvd-card/DVDcard';

function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('query');

    const fetchData = async () => {
      const results = await searchDVDs(query);
      setSearchResults(results);
    };

    fetchData();
  }, [location.search]);

  return (
    <div className="search-results-page">
      <h2>Search Results for "{new URLSearchParams(location.search).get('query')}"</h2>
      <div className="dvd-list">
        {searchResults.length > 0 ? (
          searchResults.map((dvd) => <DVDcard key={dvd.id} dvd={dvd} />)
        ) : (
          <p>Nothing Found</p>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
