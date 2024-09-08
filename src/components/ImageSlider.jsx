import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/imageslider.module.css';

const ImageSlider = ({ propertyId }) => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        if (!propertyId) {
          throw new Error('Property ID is required.');
        }

        console.log('Fetching images for Property ID:', propertyId); // Debugging

        // Fetch images from API
        const response = await axios.get(`https://us-real-estate-listings.p.rapidapi.com/propertyPhotos?id=${propertyId}`, {
          headers: {
            'x-rapidapi-key': '1c0f657840mshbdc692a2177d434p126a30jsn2297cf528c83',
            'x-rapidapi-host': 'us-real-estate-listings.p.rapidapi.com'
          }
        });

        console.log('API Response:', response.data); // Debugging

        const data = response.data;
        if (data.status === 'error') {
          throw new Error(data.errors[0]);
        }

        setImages(data.photos || []);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [propertyId]);

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


