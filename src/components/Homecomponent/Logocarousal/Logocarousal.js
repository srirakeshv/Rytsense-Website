import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Carousal extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear",
      centerMode: true,
      centerPadding: "0",
      responsive: [
        {
          breakpoint: 430,
          settings: {
            slidesToShow: 1,
            centerMode: true,
            centerPadding: "10%",
          },
        },
        {
          breakpoint: 630,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 830,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 9999,
          settings: {
            slidesToShow: 5,
          },
        },
      ],
    };
    return (
      <div className="p-5 mx-auto">
        <Slider {...settings}>
          <div className="py-5 pl-12">
            <div className="w-36 h-14 flex items-center justify-center">
              <img src="/images/amount-e1590695133382.png" alt="logo"></img>
            </div>
          </div>
          <div className="py-5 pl-12">
            <div className="w-36 h-14 flex items-center justify-center">
              <img src="/images/logo.png" alt="logo"></img>
            </div>
          </div>
          <div className="py-5 pl-12">
            <div className="w-36 h-14 flex items-center justify-center">
              <img src="/images/CEAT.png" alt="logo"></img>
            </div>
          </div>
          <div className="py-5 pl-12">
            <div className="w-36 h-14 flex items-center justify-center">
              <img
                className="w-full h-full"
                src="/images/Disney+_logo.svg.png"
                alt="logo"
              ></img>
            </div>
          </div>
          <div className="py-5 pl-12">
            <div className="w-36 h-14 flex items-center justify-center">
              <img src="/images/Hitachi.png" alt="logo"></img>
            </div>
          </div>
          <div className="py-5 pl-12">
            <div className="w-36 h-14 flex items-center justify-center">
              <img src="/images/ren-money.png" alt="logo"></img>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
