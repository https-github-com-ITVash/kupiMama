import React from "react";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";

const Slider = () => {
  const ArrLeft = ({ onClick }) => {
    return (
      <button onClick={onClick} className="slick-prev" style={{ zIndex: 110 }}>
        <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
      </button>
    );
  };

  const ArrRight = ({ onClick }) => {
    return (
      <button onClick={onClick} className="slick-next" style={{ zIndex: 110 }}>
        <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
      </button>
    );
  };

  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    draggable: false,
    prevArrow: <ArrLeft />,
    nextArrow: <ArrRight />,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          draggable: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <SlickSlider {...settings}>
      <div>
        <video controls="controls" muted autoPlay>
          <source src="img/video.mp4" type="video/mp4" />
        </video>
      </div>
      <div>
        <img src="img/p1.jpg" alt="" />
      </div>
      <div>
        <img src="img/logo.jpg" alt="" />
      </div>
    </SlickSlider>
  );
};

export default Slider;
