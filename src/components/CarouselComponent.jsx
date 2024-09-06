import React from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import style from '../styles/carousel.module.css';
import HouseLogo from '../assets/house-home-img-2.png';
import House1 from '../assets/house-1.jpg';
import House2 from '../assets/house-2.jpg';
import House3 from '../assets/house-3.jpg';

const CarouselComponent = () => {
  const navigate = useNavigate();

  return (
    <div className={ style.split}>
      <div className={style.slideImageSize}>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={House1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={House2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={House3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className={style.reachOutBtn}>
        <img src={HouseLogo} alt="House" />
        <button className={style.contactButton} onClick={() => navigate('/resource')}>
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