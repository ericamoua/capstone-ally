import React from 'react';
import banner from '../styles/banner.module.css';

const Banner = () => {
    
    return (
        <div className={banner.banner}>
            <h1>Your Next Chapter Starts</h1>
            <a href='/search' className={banner.learnMore}>HERE</a>
        </div>
    );
};

export default Banner;
