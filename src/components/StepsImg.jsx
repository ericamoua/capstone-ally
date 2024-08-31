import React from "react";
import HeroImg from '../assets/uptown-hero-photo.jpg';
import StepsImg from '../assets/preparing-home-docs.jpg';

const HomeSteps = () => {
    return (
        <div>
            <div className="homesteps">
                <div className="homesteps__content">
                    <img src={StepsImg} alt="homesteps" className="homesteps__img" />
                </div>
            </div>
        </div>
    )
}

export default HomeSteps;
