import React from "react";
import HeroImg from '../assets/uptown-hero-photo.jpg';

const HomeHero = () => {
    return (
        <div>
            <div className="homehero">
                <div className="homehero__content">
                    <img src={HeroImg} alt="homehero" className="homehero__img" />
                    <h1 className="homehero__title">Find Your Dream Home</h1>
                </div>
            </div>
        </div>
    )
}

export default HomeHero;