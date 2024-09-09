import React from 'react';
import hero from '../assets/skyline.jpg';
import styles from '../styles/searchhero.module.css';

const SearchHero = () => {
  return (
    <div className={styles.searchHero}>
        <h1 className={styles.heroText}>Welcome Home: Start Your Search Here</h1>
        <p className={styles.heroText}>Explore the best homes in your area and take the first step toward your new beginning.
        </p>
    </div>
  )
}

export default SearchHero
