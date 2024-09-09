import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import detailsCSS from '../styles/listingdetails.module.css';
import ImageSlider from './ImageSlider';
import { FaHouseFloodWater } from "react-icons/fa6";
import { FaVolumeUp } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { FaMapPin } from "react-icons/fa";

const ListingDetails = () => {
  // Use useParams to get the listing ID from the URL
  const { id } = useParams();
  // Initialize state variables for listing details and error handling
  const [listing, setListing] = useState(null);
  const [error, setError] = useState(null);

  // Fetch listing details from the API
  useEffect(() => {
    const fetchListingDetails = async () => {
      try {
        const response = await fetch(`https://us-real-estate-listings.p.rapidapi.com/v2/property?id=${id}`, {
          method: 'GET',
          headers: {
            'x-rapidapi-key': '1c0f657840mshbdc692a2177d434p126a30jsn2297cf528c83',
            'x-rapidapi-host': 'us-real-estate-listings.p.rapidapi.com'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch listing details');
        }

        const data = await response.json();
        // Log the data to the console for debugging purposes
        console.log('Listing data:', data);
        setListing(data.data);  
      } catch (error) {
        setError(error.message);
      }
    };

    fetchListingDetails();
  }, [id]);

  if (error) {
    return <p className={detailsCSS.error}>{error}</p>;
  }

  if (!listing) {
    return <p>Loading...</p>;
  }

  const { location, description, schools, local } = listing;

  // Log the schools data to the console for debugging purposes
  console.log('Schools data:', schools); 

  // Render the listing details
  return (
    <div className={detailsCSS.listingDetails}>
      {/* Render the image slider */}
      <ImageSlider propertyId={listing.property_id} />
      <div className={detailsCSS["primary-info"]}>
        <p>{location?.address?.line || 'No address available'}</p>
        <p>{location?.address?.city}, {location?.address?.state}{' '}
          {location?.address?.postal_code}</p>
        <p className={detailsCSS.price}>${listing.list_price || 'N/A'}</p>

      </div>

      <div className={detailsCSS["map-link"]}>
        <button onClick={() => window.open(location?.street_view_url, '_blank')} rel="noopener noreferrer">View Street</button>
      </div>

      <div className={detailsCSS["secondary-info"]}>
        <ul>
          <li>{description.baths_consolidated || 0} Baths</li>
          <li>{description.beds || 0} Bedrooms</li>
          <li>{description.sqft || 0} Square Feet</li>
          
        </ul>
        <ul>
          <li>Built in {description.year_built || 'Unknown'}</li>
          <li>Property Type: {description.type}</li>
          <li className={detailsCSS["mls-id"]}>MLS #: {listing.property_id || 'N/A'}</li>
        </ul>
        
      </div>

      <div className={detailsCSS["more-details"]}>
      <p className={detailsCSS["listing-description"]}>{description.text}</p>
      </div>
    
      <div className={detailsCSS['extra-info']}>
        {/* Schools Section */}
        <div className={detailsCSS["school-div"]}>
          <h3><FaSchool /> Nearby Schools</h3>
          {/* Verify that there are schools */}
          { schools.schools.length > 0 ? (
            <ul>
              {/*Map through each school and display its information*/}
              {schools.schools.map((school) => (
                <li key={school.id}>
                  <strong>{school.name}</strong><br />
                  Distance: {school.distance_in_miles} miles<br />
                  Assigned: {school.assigned !== null ? (school.assigned ? 'Yes' : 'No') : 'Unknown'}<br />
                  {school.district?.name ? `District: ${school.district.name}` : 'District: N/A'}<br />
                  School Type: {school.funding_type || 'N/A'}
                </li>

              ))}
            </ul>
          ) : (
            <p>No school information available</p>
            
          )}
        </div>

        {/* Local Info Section */}
        <div className={detailsCSS["local-info"]}>
          <h3><FaMapPin /> Local Information</h3>
          {local?.flood ? (
            <div>
              <h5><FaHouseFloodWater /> Flood Information</h5>
              <p>Flood Factor Score: {local.flood.flood_factor_score}</p>
            </div>
          ) : (
            <p>No flood information available</p>
          )}
          {local?.noise && Array.isArray(local.noise.noise_categories) ? (
            <div>
              <h5><FaVolumeUp /> Noise Information</h5>
              <ul>
                {local.noise.noise_categories.map((category, index) => (
                  <li key={index}>{category.type}: {category.text}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p>No noise information available</p>
          )}
           </div>

      </div>
    </div>
  );
};

export default ListingDetails;



