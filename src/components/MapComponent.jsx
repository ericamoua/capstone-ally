import React, { useEffect, useRef } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapComponent = ({ listings }) => {
  const mapRef = useRef(null);

  const libraries = ["places"];

  const defaultCenter = {
    lat: 35.2271, // Latitude for Charlotte, NC
    lng: -80.8431, // Longitude for Charlotte, NC
  };

  const mapContainerStyle = {
    width: "100%",
    height: "500px",
  };

  useEffect(() => {
    if (mapRef.current && listings.length > 0) {
      const bounds = new window.google.maps.LatLngBounds();
      
      listings.forEach((listing) => {
        if (listing.location && listing.location.address && listing.location.address.coordinate) {
          bounds.extend({
            lat: listing.location.address.coordinate.lat,
            lng: listing.location.address.coordinate.lon,
          });
        }
      });

      mapRef.current.fitBounds(bounds);
    }
  }, [listings]);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <LoadScript
          googleMapsApiKey="AIzaSyAiSWL9qbLGSkPi-r_o81IG-CrLzvRA77k"
          libraries={libraries}
          loadingElement={<div>Loading...</div>}
          id="google-map-script"
          async
          defer
        >
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={10}
            center={defaultCenter}
            onLoad={(map) => (mapRef.current = map)}
          >
            {/* Iterate over listings and place a numbered Marker for each */}
            {listings.map((listing, index) => (
              listing.location &&
              listing.location.address &&
              listing.location.address.coordinate && (
                <Marker
                  key={listing.property_id}
                  position={{
                    lat: listing.location.address.coordinate.lat,
                    lng: listing.location.address.coordinate.lon,
                  }}
                  label={{
                    text: `${index + 1}`, // Label showing the index+1 to start numbering from 1
                    color: "white",
                    fontSize: "16px",
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
