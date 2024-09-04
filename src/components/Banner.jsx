import React from 'react';
import banner from '../styles/banner.module.css';

const Banner = () => {
    
    return (
        <div className={banner.banner}>
            <p>Your Next Chapter Starts</p>
            <a href='/search' className={banner.learnMore}>HERE</a>
        </div>
    );
};

export default Banner;
