import React, { useState } from 'react';
import './listingsearch.css';

const ListingSearch = () => {
  const [formData, setFormData] = useState({
    zipcode: '',
    propertyType: '',
    minPrice: '',
    maxPrice: '',
    minBedrooms: '',
    maxBedrooms: '',
    minBathrooms: '',
    maxBathrooms: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    fetch('http://localhost:3000/search-listings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Handle the response data (e.g., update state to display results)
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className='listing-search'>
      <h3 className="listing-title">Search Listings</h3>
      <form className='listing-form' onSubmit={handleSubmit}>
        <div className="form-control zipcode">
          <input
            id="zipcode"
            type="text"
            placeholder="Zipcode"
            value={formData.zipcode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-control property-type">
          <select id="propertyType" value={formData.propertyType} onChange={handleChange}>
            <option disabled value="">Property Type</option>
            <option value="house">House</option>
            <option value="apartment">Condominium</option>
            <option value="all">All</option>
          </select>
        </div>
        <div className="form-control min-price">
          <input
            id="minPrice"
            type="text"
            placeholder="Min Price"
            value={formData.minPrice}
            onChange={handleChange}
          />
        </div>
        <div className="form-control max-price">
          <input
            id="maxPrice"
            type="text"
            placeholder="Max Price"
            value={formData.maxPrice}
            onChange={handleChange}
          />
        </div>
        <div className="form-control min-bedrooms">
          <input
            id="minBedrooms"
            type="text"
            placeholder="Min Bedrooms"
            value={formData.minBedrooms}
            onChange={handleChange}
          />
        </div>
        <div className="form-control max-bedrooms">
          <input
            id="maxBedrooms"
            type="text"
            placeholder="Max Bedrooms"
            value={formData.maxBedrooms}
            onChange={handleChange}
          />
        </div>
        <div className="form-control min-bathrooms">
          <input
            id="minBathrooms"
            type="text"
            placeholder="Min Bathrooms"
            value={formData.minBathrooms}
            onChange={handleChange}
          />
        </div>
        <div className="form-control max-bathrooms">
          <input
            id="maxBathrooms"
            type="text"
            placeholder="Max Bathrooms"
            value={formData.maxBathrooms}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className='search-btn'>Search</button>
      </form>
    </div>
  );
};

export default ListingSearch;