import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import detailCSS from '../styles/listingdetails.module.css';

const ListingDetails = () => {
  const { propertyId } = useParams(); // Extract propertyId from URL parameters
  const [listing, setListing] = useState(null);
  const [locationScores, setLocationScores] = useState(null);
  const [schools, setSchools] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchListingDetails = async () => {
      try {
        const listingResponse = await fetch(`https://us-real-estate-listings.p.rapidapi.com/v2/property?property_url=https%3A%2F%2Fwww.realtor.com%2Frealestateandhomes-detail%2F${propertyId}`, {
          method: 'GET',
          headers: {
            'x-rapidapi-key': '1c0f657840mshbdc692a2177d434p126a30jsn2297cf528c83',
            'x-rapidapi-host': 'us-real-estate-listings.p.rapidapi.com',
          },
        });
    
        if (!listingResponse.ok) {
          throw new Error('Failed to fetch listing details');
        }
    
        const listingData = await listingResponse.json();
        console.log('Listing Data:', listingData); // Log the entire data
    
        // Check if the expected structure exists before accessing it
        if (listingData && listingData.data && listingData.data.home_search && listingData.data.home_search.results) {
          const propertyUrl = encodeURIComponent(listingData.data.home_search.results[0].property_url);
    
          // Fetch Location Scores
          const scoresResponse = await fetch(`https://us-real-estate-listings.p.rapidapi.com/property/locationScores?property_url=${propertyUrl}`, {
            method: 'GET',
            headers: {
              'x-rapidapi-key': '1c0f657840mshbdc692a2177d434p126a30jsn2297cf528c83',
              'x-rapidapi-host': 'us-real-estate-listings.p.rapidapi.com',
            },
          });
    
          if (!scoresResponse.ok) {
            throw new Error('Failed to fetch location scores');
          }
    
          const scoresData = await scoresResponse.json();
          setLocationScores(scoresData);
    
          // Fetch Location Schools
          const schoolsResponse = await fetch(`https://us-real-estate-listings.p.rapidapi.com/property/schools?property_url=${propertyUrl}`, {
            method: 'GET',
            headers: {
              'x-rapidapi-key': '1c0f657840mshbdc692a2177d434p126a30jsn2297cf528c83',
              'x-rapidapi-host': 'us-real-estate-listings.p.rapidapi.com',
            },
          });
    
          if (!schoolsResponse.ok) {
            throw new Error('Failed to fetch location schools');
          }
    
          const schoolsData = await schoolsResponse.json();
          setSchools(schoolsData);
    
        } else {
          throw new Error('Unexpected data structure');
        }
    
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    

    fetchListingDetails();
  }, [propertyId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!listing) return <p>No listing found</p>;

  return (
    <div className={detailCSS['listing-detail']}>
      <h1 className={detailCSS['listing-title']}>Listing Details</h1>

      {listing.primary_photo && (
        <img
          className={detailCSS['listing-image']}
          src={listing.primary_photo.href}
          alt="Property"
        />
      )}
      
      <div className={detailCSS['listing-info']}>
        <h2 className={detailCSS['listing-price']}>${listing.list_price}</h2>
        <h3 className={detailCSS['listing-address']}>{listing.location.address.line}</h3>
        <h4 className={detailCSS['listing-address']}>
          {listing.location.address.city}, {listing.location.address.state}{' '}
          {listing.location.address.postal_code}
        </h4>
        <div className={detailCSS['info-group']}>
          <span className={detailCSS['info-label']}>Beds:</span>
          <span className={detailCSS['info-value']}>{listing.description.beds}</span>
        </div>
        <div className={detailCSS['info-group']}>
          <span className={detailCSS['info-label']}>Baths:</span>
          <span className={detailCSS['info-value']}>{listing.description.baths}</span>
        </div>
        <div className={detailCSS['info-group']}>
          <span className={detailCSS['info-label']}>Sqft:</span>
          <span className={detailCSS['info-value']}>{listing.description.sqft}</span>
        </div>
        <p className={detailCSS['listing-description']}>
          {listing.description.text}
        </p>
      </div>

      {/* Location Scores */}
      {locationScores && (
        <div className={detailCSS['location-scores']}>
          <h3>Location Scores</h3>
          <p>Walk Score: {locationScores.walk_score}</p>
          <p>Transit Score: {locationScores.transit_score}</p>
          <p>Bike Score: {locationScores.bike_score}</p>
        </div>
      )}

      {/* Location Schools */}
      {schools && (
        <div className={detailCSS['location-schools']}>
          <h3>Nearby Schools</h3>
          <ul>
            {schools.schools.map((school, index) => (
              <li key={index}>
                <h4>{school.name}</h4>
                <p>Rating: {school.rating}</p>
                <p>Distance: {school.distance} miles</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ListingDetails;

