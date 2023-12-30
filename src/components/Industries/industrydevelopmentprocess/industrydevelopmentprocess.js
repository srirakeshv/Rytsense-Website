import React from "react";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IndustryDevelopmentProcess = () => {
  const location = useLocation();
  const developmentprocess =
    location.state && location.state.developmentprocess;
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
  return (
    developmentprocess && (
      <div>
        <div className="max-w-7xl p-5 mx-auto">
          <h1 className="text-3xl font-bold md:text-5xl w-full md:w-10/12 lg:w-2/3">
            {developmentprocess.heading}
          </h1>
          <div className="mt-8">
            <Slider {...settings}>
              {developmentprocess.array.map((development, index) => (
                <div className="p-3">
                  <div
                    key={index}
                    className="flex flex-col gap-2 shadow-lg border-2 border-slate-300 rounded-xl p-5 w-full lg:w-10/12"
                    style={{ minHeight: "350px" }}
                  >
                    <div className="flex gap-3 items-center">
                      <div className="p-2 bg-blue-500 rounded-md ">
                        <img src={development.profile} alt="icon"></img>
                      </div>
                      <h1 className="text-xl font-bold">
                        {development.heading}
                      </h1>
                    </div>
                    <p className="mt-3 text-base leading-7 font-normal text-slate-800 w-full">
                      {development.passage}
                    </p>
                    {development.passage2 && (
                      <div className="mt-3 flex flex-col gap-4 list-disc">
                        {development.passage2.map((pass, index) => (
                          <li key={index}>{pass}</li>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    )
  );
};

export default IndustryDevelopmentProcess;
