import React from "react";
// import HeroImg from '../assets/uptown-hero-photo.jpg';
import styles from '../styles/HomeHero.module.css';
import Banner from "./Banner";
import Video from '../assets/hero-vid.mp4';


const HomeHero = () => {
    return (
        <div className={styles.hero}>
          <Banner />
          <video muted autoPlay loop>
          <source src={Video} type="video/mp4" />
        </video>
        </div>
      );
}

export default HomeHero;