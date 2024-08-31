// src/components/CarouselComponent.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import House1 from '../assets/home-img.jpeg';
import House2 from '../assets/house-2.jpg';
import House3 from '../assets/house-3.jpg';


const CarouselComponent = () => {
  return (
    <div className="container">
      <h2>Making Homeownership a Reality</h2>
      <div id="carouselExample" className="carousel slide w-100" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active" aria-current="true"></button>
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={House1} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={House2} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={House3} alt="Third slide" />
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
  );
};

export default CarouselComponent;
