import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IndustryTechnology = () => {
  const location = useLocation();
  const technology = location.state && location.state.technology;
  const [selectedTechIndex, setSelectedTechIndex] = useState(
    Array.isArray(technology?.technologyarray)
      ? technology.technologyarray[0]
      : null
  );

  const handleTechClick = (index) => {
    setSelectedTechIndex(
      index === selectedTechIndex ? null : technology.technologyarray[index]
    );
  };

  useEffect(() => {
    // Set the initial state when technology.technologyarray changes
    setSelectedTechIndex(
      Array.isArray(technology?.technologyarray)
        ? technology.technologyarray[0]
        : null
    );
  }, [technology]);
  const getSlidesToShow = () => {
    if (technology && technology.technologyarray) {
      const arrayCount = technology.technologyarray.length;
      return arrayCount > 4 ? 4 : arrayCount;
    }
    return 4; // Default number of slides to show
  };

  const settings = {
    infinite: true,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerMode: false,
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
          slidesToShow: getSlidesToShow(),
        },
      },
    ],
  };
  return (
    technology && (
      <div className="my-10">
        <div className="max-w-7xl p-5 mx-auto">
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl font-bold md:text-5xl w-full md:w-10/12 lg:w-2/3">
              {technology.heading}
            </h1>
            <p className="text-lg leading-8 font-normal text-slate-800 w-full lg:w-10/12">
              {technology.passage}
            </p>
          </div>
          <div className="my-10">
            {Array.isArray(technology.technologyarray) ? (
              <Slider {...settings}>
                {technology.technologyarray.map((tech, index) => (
                  <div key={index} className="px-3">
                    <div className="">
                      {tech.heading && (
                        <h1
                          className={`h-20 text-lg font-bold border-2 border-blue1 rounded-xl text-blue1 hover:cursor-pointer ${
                            technology.technologyarray ? "p-3" : "bg-white"
                          } ${
                            selectedTechIndex === tech
                              ? "bg-blue1 text-white"
                              : ""
                          }`}
                          onClick={() => handleTechClick(index)}
                        >
                          {tech.heading}
                        </h1>
                      )}
                    </div>
                  </div>
                ))}
              </Slider>
            ) : null}
          </div>
          {selectedTechIndex !== null && (
            <div className="flex gap-10 flex-wrap justify-center md:justify-start mt-10">
              {selectedTechIndex.logos && Array.isArray(selectedTechIndex.logos)
                ? selectedTechIndex.logos.map((log, index) => (
                    <div key={index}>
                      <img
                        className="w-20 h-20"
                        src={log.image}
                        alt={log.name}
                      />
                      <h1 className="mt-5 text-center">{log.name}</h1>
                    </div>
                  ))
                : ""}
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default IndustryTechnology;
