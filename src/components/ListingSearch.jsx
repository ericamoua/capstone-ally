import React, { useState, useEffect } from 'react';
import './listingSearch.css';
import MapComponent from '../src/MapComponent';

const ListingSearch = () => {
  const [zipcode, setZipcode] = useState('28202');
  const [propertyType, setPropertyType] = useState('all');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minBedrooms, setMinBedrooms] = useState('');
  const [maxBedrooms, setMaxBedrooms] = useState('');
  const [minBathrooms, setMinBathrooms] = useState('');
  const [maxBathrooms, setMaxBathrooms] = useState('');
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {

    console.log('Searching...');
    try {
      const response = await fetch('http://localhost:3000/search-listings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          zipcode,
          propertyType,
          minPrice,
          maxPrice,
          minBedrooms,
          maxBedrooms,
          minBathrooms,
          maxBathrooms,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch listings');
      }

      const data = await response.json();
      console.log(data);
      setListings(data.data.home_search.results); // Adjust this based on your API's response structure
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div className='listing-search'>
      
      <h4 className='listing-title'>Search Listings</h4>


      <form className='search-form' onSubmit={handleSearch}>
        <div className="top-group">
          <div className="form-group zipcode">
            <input
              type="text"
              placeholder="Zipcode"
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
            />
          </div>
          <div className="form-group property-type">
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}>
              <option value="single_family">Single-Family</option>
              <option value="multi_family">Multi-Family</option>
              <option value="all">All</option>
            </select>
          </div>
        </div>
        <div className="bottom-group">
          <div className="form-group min-price">
          <input
            type="text"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          </div>
          <div className="form-group max-price">
          <input
            type="text"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          </div>
          <div className="form-group min-bedrooms">
          <input
            type="number"
            placeholder="Min Bedrooms"
            value={minBedrooms}
            onChange={(e) => setMinBedrooms(e.target.value)}
          />
          </div>
          <div className="form-group max-bedrooms">
          <input
            type="number"
            placeholder="Max Bedrooms"
            value={maxBedrooms}
            onChange={(e) => setMaxBedrooms(e.target.value)}
          />
          </div>
          <div className="form-group min-bathrooms">
          <input
            type="number"
            placeholder="Min Bathrooms"
            value={minBathrooms}
            onChange={(e) => setMinBathrooms(e.target.value)}
          />
          </div>
          <div className="form-group max-bathrooms">
          <input
            type="number"
            placeholder="Max Bathrooms"
            value={maxBathrooms}
            onChange={(e) => setMaxBathrooms(e.target.value)}
          />
          </div>
        </div>
        <button className="search-btn" type="submit">Search</button>
      </form>

  {/* Pass listings to MapComponent */}
  <MapComponent listings={listings} />
   

        <div >
          {listings.length > 0 ? (
          <div className="info-box">
            {listings.map((listing) => (
              <div key={listing.property_id} className="listing-item">
                  <div className="primary-info">
                  {listing.primary_photo && (
                    <img className="listing-image" src={listing.primary_photo.href} alt="Property" />
                  )}
                  <h4>{listing.location.address.line}</h4>
                  <h4>{[ listing.location.address.city, ', ',listing.location.address.state,'  ', listing.location.address.postal_code]}</h4>
                  <h4>${listing.list_price}</h4>
                </div>
                <div className="secondary-info">
                  <ul className='list1'>
                    <li>Located in {listing.location.address.city}</li>
                    <li>Built in {listing.description.year_built}</li>
                    <li>MLS #: {listing.property_id}</li>
                  </ul>
                  <ul className='list2'>
                    <li>{listing.description.beds} Bedrooms</li>
                    <li>{listing.description.baths} Full Baths</li>
                    <li>{listing.description.sqft} Square Feet</li>
                  </ul>
                </div>
                <a>More Details</a>
              </div>
            ))}
          </div>
        ) : (
          <p>No listings found</p>
        )}
      </div>
    </div>
  );
};

export default ListingSearch;