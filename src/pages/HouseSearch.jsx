import React, { useState } from 'react';
import ListingSearch from '../components/ListingSearch';
import HouseList from '../components/HouseList';

const HouseSearch = () => {
  const [results, setResults] = useState([]);

  const handleSearchResults = (data) => {
    setResults(data.results); 
  };

  return (
    <div>
      <ListingSearch onSubmit={handleSearchResults} />
      <HouseList results={results} />
    </div>
  );
};

export default HouseSearch;
