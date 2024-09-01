// src/components/CarouselComponent.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import style from '../styles/carousel.module.css';
import House1 from '../assets/home-img.jpeg';
import House2 from '../assets/house-2.jpg';
import House3 from '../assets/house-3.jpg';


const CarouselComponent = () => {
  return (
    <div className={ style.split}>
      <div className="container text-center w-50">
        <div id="carouselExample" className="carousel slide w-100" data-bs-ride="carousel" data-bs-interval="3000">
        <h2>Making Homeownership a Reality</h2>
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active" aria-current="true"></button>
            <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className={[style.slideImageSize, "d-block w-100"].join(" ")}src={House1} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className={[style.slideImageSize, "d-block w-100"].join(" ")} src={House2} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className={[style.slideImageSize, "d-block w-100"].join(" ")} src={House3} alt="Third slide" />
            </div>
          </div>
          <button className="carousel-control-prev" data-bs-target="#carouselExample" type="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" data-bs-target="#carouselExample" type="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div>
        <h2>
          Get in touch
        </h2>
        <button className={style.contactButton}>
          HERE
          <div className={style.iconButton}>
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default CarouselComponent;
