import React from 'react';
import banner from '../styles/home.module.css';

const Banner = ({ learnMoreLink }) => {
    return (
        <div className={banner.banner}>
            <p>Find your dream home, click below for more</p>
            <a href={learnMoreLink} className="learn-more">Click here</a>
        </div>
    );
};

export default Banner;
