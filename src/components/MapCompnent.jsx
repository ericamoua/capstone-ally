import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapComponent = ({ listings }) => {
  const defaultCenter = {
    lat: 35.2271, // Latitude for Charlotte, NC
    lng: -80.8431, // Longitude for Charlotte, NC
  };

  const mapContainerStyle = {
    width: "100%",
    height: "500px",
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <LoadScript
          googleMapsApiKey="AIzaSyDocg7eD7DhV3esYcDafQDwxFKezAQ8uyA"
          libraries={["places"]}
          loadingElement={<div>Loading...</div>}
          id="google-map-script"
          async
          defer
        >
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={10}
            center={defaultCenter}
          >
            {/* Iterate over listings and place a Marker for each */}
            {listings.map((listing) => (
              listing.location &&
              listing.location.address &&
              listing.location.address.coordinate && (
                <Marker
                  key={listing.property_id}
                  position={{
                    lat: listing.location.address.coordinate.lat,
                    lng: listing.location.address.coordinate.lon,
                  }}
                />
              )
            ))}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default MapComponent;
