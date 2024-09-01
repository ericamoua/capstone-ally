import React from 'react';

const Banner = ({ learnMoreLink }) => {
    return (
        <div className="banner">
            <p>Find your dream home, click below for more</p>
            <a href={learnMoreLink} className="learn-more">Click here</a>
        </div>
    );
};

export default Banner;
