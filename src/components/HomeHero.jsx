import React from "react";
// import HeroImg from '../assets/uptown-hero-photo.jpg';
import styles from '../styles/HomeHero.module.css';
import Banner from "./Banner";


const HomeHero = () => {
    return (
        <div className={styles.hero}>
          <Banner />
        </div>
      );
}

export default HomeHero;