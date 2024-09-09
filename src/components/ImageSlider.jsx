import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/imageslider.module.css';

const ImageSlider = ({ propertyId }) => {
  // Initialize state variables for images, current index and error handling
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Validate property ID
        if (!propertyId) {
          throw new Error('Property ID is required.');
        }

        // Log the property ID for debugging purposes
        console.log('Fetching images for Property ID:', propertyId); // Debugging

        // Fetch images from API
        const response = await axios.get(`https://us-real-estate-listings.p.rapidapi.com/propertyPhotos?id=${propertyId}`, {
          headers: {
            'x-rapidapi-key': '1c0f657840mshbdc692a2177d434p126a30jsn2297cf528c83',
            'x-rapidapi-host': 'us-real-estate-listings.p.rapidapi.com'
          }
        });

        // Log the API response for debugging purposes
        console.log('API Response:', response.data); 

        const data = response.data;
        if (data.status === 'error') {
          throw new Error(data.errors[0]);
        }

        // Set the images in state
        setImages(data.photos || []);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [propertyId]);
// Updates currentIndex state variable. When called, it will update the index of the current image in the images array. 
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.sliderContainer}>
      {error && <p className={styles.error}>{error}</p>}
      <button className={styles.arrowButton} onClick={prevSlide}>
        &#10094;
      </button>
      <div className={styles.slider}>
        {images.length > 0 && (
          <img
            src={images[currentIndex].href}
            alt={images[currentIndex].tags.map(tag => tag.label).join(', ')}
            className={styles.image}
          />
        )}
      </div>
      <button className={styles.arrowButton} onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;


