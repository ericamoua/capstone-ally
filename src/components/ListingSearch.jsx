import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import searchCSS from '../styles/listingsearch.module.css';
import MapComponent from './MapComponent';

const ListingSearch = () => {
  const [zipcode, setZipcode] = useState('Charlotte, NC');
  const [propertyType, setPropertyType] = useState('all');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minBedrooms, setMinBedrooms] = useState('');
  const [maxBedrooms, setMaxBedrooms] = useState('');
  const [minBathrooms, setMinBathrooms] = useState('');
  const [maxBathrooms, setMaxBathrooms] = useState('');
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(null);

  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSearch = async (e) => {
    e.preventDefault();
  
    const apiKey = '1c0f657840mshbdc692a2177d434p126a30jsn2297cf528c83';
    let path = `/for-sale?location=${zipcode}&offset=0&limit=50&sort=relevance&days_on=1&expand_search_radius=1`;
  
    // Append query parameters for filtering
    if (minPrice) {
      path += `&price_min=${minPrice}`;
    }
    if (maxPrice) {
      path += `&price_max=${maxPrice}`;
    }
    if (minBedrooms) {
      path += `&beds_min=${minBedrooms}`;
    }
    if (maxBedrooms) {
      path += `&beds_max=${maxBedrooms}`;
    }
    if (minBathrooms) {
      path += `&baths_min=${minBathrooms}`;
    }
    if (maxBathrooms) {
      path += `&baths_max=${maxBathrooms}`;
    }
  
    try {
      const response = await fetch(`https://us-real-estate-listings.p.rapidapi.com${path}`, {
        method: 'GET',
        headers: {
          'x-rapidapi-key': apiKey,
          'x-rapidapi-host': 'us-real-estate-listings.p.rapidapi.com',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch listings');
      }
  
      const data = await response.json();
      console.log(data);
  
      if (data && Array.isArray(data.listings)) {
        setListings(data.listings); // Correctly set the listings state
      } else {
        setListings([]);
        setError('No listings found or unexpected response structure');
      }
    } catch (error) {
      setError(error.message);
    }
  };
  

  useEffect(() => {
    // Optionally fetch some initial data or handle side effects
  }, []);

  const sortedListings = useMemo(() => {
    if (!sortField) return listings;

    return [...listings].sort((a, b) => {
      let aValue, bValue;

      switch (sortField) {
        case 'price':
          aValue = Number(a.list_price);
          bValue = Number(b.list_price);
          break;
        case 'sqft':
          aValue = Number(a.description.sqft);
          bValue = Number(b.description.sqft);
          break;
        case 'bedrooms':
          aValue = Number(a.description.beds);
          bValue = Number(b.description.beds);
          break;
        default:
          return 0;
      }

      if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }, [listings, sortField, sortOrder]);

  return (
    <div className={searchCSS['listing-search']}>
      <h3 className={searchCSS['listing-title']}>Search Listings</h3>

      <form className={searchCSS['search-form']} onSubmit={handleSearch}>
        <div className={searchCSS['top-group']}>
          <div className={`${searchCSS['form-cont']} ${searchCSS.zipcode}`}>
            <input
              type="text"
              placeholder="Location"
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
            />
          </div>
          <div className={`${searchCSS['form-cont']} ${searchCSS.propertyType}`}>
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}>
              <option value="single_family">Single-Family</option>
              <option value="multi_family">Multi-Family</option>
              <option value="all">All</option>
            </select>
          </div>
        </div>
        <div className={searchCSS['bottom-group']}>
          <div className={`${searchCSS['form-cont']} ${searchCSS.minPrice}`}>
            <input
              type="number"
              placeholder="Min Price"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
          </div>
          <div className={`${searchCSS['form-cont']} ${searchCSS.maxPrice}`}>
            <input
              type="number"
              placeholder="Max Price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
          <div className={`${searchCSS['form-cont']} ${searchCSS.minBedrooms}`}>
            <input
              type="number"
              placeholder="Min Bedrooms"
              value={minBedrooms}
              onChange={(e) => setMinBedrooms(e.target.value)}
            />
          </div>
          <div className={`${searchCSS['form-cont']} ${searchCSS.maxBedrooms}`}>
            <input
              type="number"
              placeholder="Max Bedrooms"
              value={maxBedrooms}
              onChange={(e) => setMaxBedrooms(e.target.value)}
            />
          </div>
          <div className={`${searchCSS['form-cont']} ${searchCSS.minBathrooms}`}>
            <input
              type="number"
              placeholder="Min Bathrooms"
              value={minBathrooms}
              onChange={(e) => setMinBathrooms(e.target.value)}
            />
          </div>
          <div className={`${searchCSS['form-cont']} ${searchCSS.maxBathrooms}`}>
            <input
              type="number"
              placeholder="Max Bathrooms"
              value={maxBathrooms}
              onChange={(e) => setMaxBathrooms(e.target.value)}
            />
          </div>
        </div>

        <div className={searchCSS['sorting-options']}>
          <button className={searchCSS['search-btn']} type="submit">Search</button>
          <label>
            Sort By:
            <select value={sortField} onChange={(e) => setSortField(e.target.value)}>
              <option value="">None</option>
              <option value="price">Price</option>
              <option value="sqft">Square Footage</option>
              <option value="bedrooms">Bedrooms</option>
            </select>
          </label>
          {sortField && (
            <label>
              Order:
              <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
              </select>
            </label>
          )}
        </div>
      </form>

      {/* Integrating the MapComponent */}
      <MapComponent listings={sortedListings} />

      <div>
        {sortedListings.length > 0 ? (
          <div className={searchCSS['info-box']}>
            {sortedListings.map((listing, index) => (
              <div key={listing.property_id} className={searchCSS['listing-item']}>
                <div className={searchCSS.listingNumber}>{index + 1}</div>
                <div className={searchCSS['primary-info']}>
                  {listing.primary_photo && (
                    <img
                      className={searchCSS.listingImage}
                      src={listing.photos[0].href}
                      alt="Property"
                    />
                  )}
                  <h3 className={searchCSS['listing-price']}>${listing.list_price}</h3>
                  <h4 className={searchCSS['listing-address']}>{listing.location.address.line}</h4>
                  <h4 className={searchCSS['listing-address']}>
                    {listing.location.address.city}, {listing.location.address.state}{' '}
                    {listing.location.address.postal_code}
                  </h4>
                </div>
                <div className={searchCSS['secondary-info']}>
                  <ul className={searchCSS.list1}>
                    <li>Located in {listing.location.address.city}</li>
                    <li>Built in {listing.description.year_built}</li>
                    <li>MLS #: {listing.property_id}</li>
                  </ul>
                  <ul className={searchCSS.list2}>
                    <li>{listing.description.beds} Bedrooms</li>
                    <li>{listing.description.baths} Full Baths</li>
                    <li>{listing.description.sqft} Square Feet</li>
                  </ul>
                </div>
                <Link className={searchCSS['more-details']} to={`/listing/${listing.property_id}`}>
                  More Details
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p>{error ? error : 'No listings found'}</p>
        )}
      </div>
    </div>
  );
};

export default ListingSearch;

