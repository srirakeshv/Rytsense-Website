import React from "react";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IndustryFeatures = () => {
  const settings = {
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerMode: false,
    responsive: [
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 690,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 9999,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  const location = useLocation();
  const features = location.state && location.state.features;
  return (
    features && (
      <div className="mt-10">
        <div className="max-w-7xl p-5 mx-auto flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl font-bold md:text-4xl w-full md:w-10/12 lg:w-2/3">
              {features.heading}
            </h1>
            <p className="text-lg font-normal text-slate-700 md:text-xl w-full lg:w-2/3">
              {features.passage}
            </p>
          </div>
          {features.featurearray && (
            <div className="">
              <Slider {...settings}>
                {features.featurearray.map((feature, index) => (
                  <div className="p-3">
                    <div
                      key={index}
                      className="p-5 h-20 bg-blue1 rounded-xl text-white flex justify-center items-center text-center"
                    >
                      <p>{feature}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default IndustryFeatures;
