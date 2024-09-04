import React from 'react';
import banner from '../styles/banner.module.css';

const Banner = () => {
    
    return (
        <div className={banner.banner}>
            <p>Find your dream home, click below for more</p>
            <a href='/search' className={banner.learnMore}>Click here</a>
        </div>
    );
};

export default Banner;
