"use client";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";

function Carousel({ children, slidesToShow, dots, arrows, autoplay }) {
  var settings = {
    dots: dots,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
    speed: 800,
    autoplay: autoplay,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: arrows,
    draggable: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: true,
          autoplay: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return <Slider {...settings}>{children}</Slider>;
}

export default Carousel;
