// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import Slider from "react-slick";
// import { useDispatch, useSelector } from "react-redux";
import "./ImgSlidebar.scss";

// import { decrement, increment } from "../../slice/locationSidebar";
// import state

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <span
      className={className}
      style={{ ...style, height: "50px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <span className={className} style={{ ...style }} onClick={onClick} />;
}

const ImgSlidebar = ({ images }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SampleNextArrow />,
    nextArrow: <SamplePrevArrow />,
    // responsive: [
    //   {
    //     breakpoint: 1500,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  return (
    // <div className="slider-container">

    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="img">
          <img key={index} src={image} alt="Hii" />
        </div>
      ))}
    </Slider>
  );
};

export default ImgSlidebar;
