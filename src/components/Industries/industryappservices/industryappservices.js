import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Cpp from "../../../calendly";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IndustryAppServices = () => {
  const [selectedService, setSelectedService] = useState(null);
  const location = useLocation();
  const appservicesheading =
    location.state && location.state.appservicesheading;
  const appservicespassage =
    location.state && location.state.appservicespassage;
  const appservicecontent = location.state && location.state.appservicecontent;
  const servicebutton = location.state && location.state.servicebutton;
  useEffect(() => {
    // Set the initial selectedService to the first item in appservicecontent
    if (appservicecontent && appservicecontent.length > 0) {
      setSelectedService(appservicecontent[0]);
    }
  }, [appservicecontent]);

  const handleServiceClick = (index) => {
    setSelectedService(appservicecontent[index]);
  };
  const settings = {
    infinite: false,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    cssEase: "linear",
    vertical: true, // Add this line to make the slider vertical
    verticalSwiping: true,
    centerMode: false,
    dots: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 690,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
    <div>
      <div className="max-w-7xl p-5 mx-auto">
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-bold md:text-5xl w-full md:w-10/12 lg:w-2/3">
            {appservicesheading}
          </h1>
          <p className="text-lg font-medium text-slate-700 w-full lg:w-10/12">
            {appservicespassage}
          </p>
        </div>
        {appservicecontent && (
          <div className="mt-10 flex flex-col ll:flex-row">
            <div className="flex-1">
              <div className="flex-1 bg-blue1 py-20 px-8 rounded-l-2xl">
                <Slider {...settings} className="slick-vertical">
                  {appservicecontent.map((service, index) => (
                    <p
                      key={index}
                      onClick={() => handleServiceClick(index)}
                      style={{ display: "flex" }}
                      className={`mb-6 text-xl hover:cursor-pointer  ${
                        selectedService === service
                          ? "text-white"
                          : "text-slate-400"
                      }`}
                    >
                      <span>{`0${index + 1}.`}</span>
                      <div className="border-b-2 border-slate-400 pb-5 w-full">
                        <span>{service.heading}</span>
                      </div>
                    </p>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-10 p-5 justify-center border-2 border-blue1 rounded-r-2xl">
              {selectedService && (
                <div className="flex flex-col gap-2">
                  <div className="w-16 h-16">
                    <img
                      className="w-full h-full"
                      src={selectedService.profile}
                      alt="logo"
                    ></img>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h1 className="text-2xl md:text-4xl font-bold">
                      {selectedService.heading}
                    </h1>
                    <p className="text-lg leading-5 font-normal text-slate-800 w-full lg:w-10/12">
                      {selectedService.passage}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        {servicebutton && (
          <div className="flex justify-center">
            <div
              className="mt-10 h-72 w-full lg:w-10/12 flex flex-col gap-5 justify-center p-5"
              style={{
                backgroundImage: `url(${servicebutton.bgimage})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <p className="text-white text-xl font-semibold w-full md:w-1/2">
                {servicebutton.heading}
              </p>
              <button
                className="bg-blue1 text-white self-start p-3 rounded-md font-medium"
                type="button"
              >
                {<Cpp buttonText={servicebutton.buttoncontent} />}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IndustryAppServices;
