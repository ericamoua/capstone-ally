import React from "react";
import styles from '../styles/homeHero.module.css';
import Banner from "./Banner";
import Video from '../assets/hero-vid.mp4';


const HomeHero = () => {
    return (
        <div className={styles.hero}>
          <Banner />
          <video muted autoPlay loop>
            <source src={Video} className={styles.heroVideo}type="video/mp4" />
          </video>
        </div>
      );
}

export default HomeHero;