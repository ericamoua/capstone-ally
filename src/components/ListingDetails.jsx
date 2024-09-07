import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import detailsCSS from '../styles/listingdetails.module.css';


const ListingDetails = () => {
  const { id } = useParams(); // Extract the listing ID from the URL
  const [listing, setListing] = useState(null);
  const [schools, setSchools] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the listing details using the ID
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
        console.log('Listing data:', data);
        setListing(data.data);  // Adjusted to set the inner `data` object
      } catch (error) {
        setError(error.message);
      }
    };

    fetchListingDetails();
  }, [id]);

  useEffect(() => {
    const fetchNearbySchools = async () => {
      try {
        const response = await fetch(`https://us-real-estate-listings.p.rapidapi.com/property/schools?property_url=https%3A%2F%2Fwww.realtor.com%2Frealestateandhomes-detail%2F2433-S-Ramona-Cir_Tampa_FL_33612_M56257-22633`, {
          method: 'GET',
          headers: {
            'x-rapidapi-key': '1c0f657840mshbdc692a2177d434p126a30jsn2297cf528c83',
            'x-rapidapi-host': 'us-real-estate-listings.p.rapidapi.com'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch nearby schools');
        }

        const schoolData = await response.json();
        console.log('Fetched schools data:', schoolData);

        // Ensure schools are present before setting state
        if (schoolData && schoolData.schools && schoolData.schools.length > 0) {
          console.log('Setting schools:', schoolData.schools);
          setSchools(schoolData.schools);  // Corrected the path to the schools array
        } else {
          console.log('No schools found in the response.');
          setSchools([]); // If no schools, set an empty array
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchNearbySchools();
  }, []);

  if (error) {
    return <p className={detailsCSS.error}>{error}</p>;
  }

  if (!listing) {
    return <p>Loading...</p>;
  }



  // Safely access all the fields in the `listing` object
  return (
    <div className={detailsCSS.listingDetails}>
        
    
    <div className={detailsCSS["primary-info"]}>
        <p>{listing.location.address.line || 'No address available'}</p>
        <p>{listing.location.address.city}, {listing.location.address.state}{' '}
            {listing.location.address.postal_code}</p>
        <p className={detailsCSS.price}>${listing.list_price || 'N/A'}</p>
    </div>

    <div className={detailsCSS["map-link"]}>
      <button href={listing.location?.street_view_url} target="_blank" rel="noopener noreferrer">View Street</button>
    </div>

    <div className={detailsCSS["secondary-info"]}>
        <ul>
            <li>{listing.description.baths || 0} Full Baths</li>
            <li>{listing.description.beds || 0} Bedrooms</li>
            <li>{listing.description.sqft || 0} Square Feet</li>
        </ul>
        <ul>
            <li>Built in {listing.description.year_built || 'Unknown'}</li>
            <li>Property Type: {listing.description.type}</li>
            <li className={detailsCSS["mls-id"]}>MLS #: {listing.property_id || 'N/A'}</li>
        </ul>
    </div>

   
    <div className={detailsCSS["school-div"]}>
      <h3 className={detailsCSS['school-title']}>Nearby Schools</h3>
        {schools.length > 0 ? (
          <ul>
            {schools.map((school, index) => (
              <li key={index}>
                <strong>{school.name}</strong> - {school.rating ? `${school.rating}/10` : 'No Rating'} - {school.distance_in_miles || 'N/A'} miles away
              </li>
            ))}
          </ul>
        ) : (
          <p>No nearby schools found.</p>
        )}
    </div>
    
    </div>
  );
};

export default ListingDetails;




