import React, { useState } from 'react';
import ListingSearch from '../components/ListingSearch';


const HouseSearch = () => {
  const [results, setResults] = useState([]);

  const handleSearchResults = (data) => {
    setResults(data.results); 
  };

  return (
    <div>
      <ListingSearch onSubmit={handleSearchResults} />

    </div>
  );
};

export default HouseSearch;
