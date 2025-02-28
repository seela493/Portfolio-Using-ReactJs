import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlideWrapper = ({ children }) => {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
        }
      }
    ]
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {children}
      </Slider>
    </div>
  );
};



export default SlideWrapper;