import React, { useState } from 'react';
import ListingSearch from '../components/ListingSearch';
import SearchHero from '../components/SearchHero';


const HouseSearch = () => {
  const [results, setResults] = useState([]);

  const handleSearchResults = (data) => {
    setResults(data.results); 
  };

  return (
    <div>
      <SearchHero />
      <ListingSearch onSubmit={handleSearchResults} />

    </div>
  );
};

export default HouseSearch;
