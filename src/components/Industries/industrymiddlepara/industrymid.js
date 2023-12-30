import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IndustryMid = () => {
  const location = useLocation();
  const servicemid = location.state && location.state.servicemid;
  const [selectedArrayIndex, setSelectedArrayIndex] = useState(0);

  useEffect(() => {
    if (
      servicemid &&
      servicemid.arraypassage &&
      servicemid.arraypassage.length > 0
    ) {
      setSelectedArrayIndex(servicemid.arraypassage[0]);
    }
  }, [servicemid]);

  const handleArrayClick = (index) => {
    if (
      servicemid &&
      servicemid.arraypassage &&
      index >= 0 &&
      index < servicemid.arraypassage.length
    ) {
      setSelectedArrayIndex(servicemid.arraypassage[index]);
    }
  };

  if (!servicemid || !servicemid.arraypassage) {
    return null;
  }
  const getSlidesToShow = () => {
    if (servicemid && servicemid.arraypassage) {
      const arrayCount = servicemid.arraypassage.length;

      // Adjust the number of slidesToShow based on your condition
      if (window.innerWidth <= 1024) {
        return arrayCount > 3 ? arrayCount - 1 : arrayCount;
      }

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
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 690,
        settings: {
          slidesToShow:
            servicemid.arraypassage.length >= 3
              ? 2
              : servicemid.arraypassage.length,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow:
            servicemid.arraypassage.length >= 3
              ? 3
              : servicemid.arraypassage.length,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow:
            servicemid.arraypassage.length >= 3
              ? 3
              : servicemid.arraypassage.length,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:
            servicemid.arraypassage.length >= 3
              ? 3
              : servicemid.arraypassage.length,
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
    <div
      className="py-5"
      style={{ background: "linear-gradient(to right, #3D5AA4E5, #3F3DA4)" }}
    >
      <div className="max-w-7xl p-5 mx-auto flex flex-col gap-5">
        <h1 className="text-3xl text-white font-bold md:text-4xl w-full md:w-10/12 lg:w-2/3">
          {servicemid.heading}
        </h1>
        <p className="text-lg font-normal text-slate-300 md:text-xl w-full lg:w-10/12">
          {servicemid.passage}
        </p>
      </div>
      <div className="max-w-7xl p-5 mx-auto">
        <Slider {...settings}>
          {servicemid.arraypassage.map((array, index) => (
            <div key={index} className="px-3">
              <div
                className={`${
                  servicemid.arraypassage.length === 1 ? "w-72" : ""
                }`}
              >
                <li
                  className={`flex items-center h-24 text-base font-medium border-2 border-white rounded-xl p-5 hover:cursor-pointer ${
                    selectedArrayIndex === array
                      ? "bg-white text-blue1"
                      : "text-white"
                  }`}
                  onClick={() => handleArrayClick(index)}
                >
                  {array.heading}
                </li>
              </div>
            </div>
          ))}
        </Slider>

        {selectedArrayIndex && (
          <ul
            className="p-5 flex flex-wrap gap-5"
            style={{ listStyleType: "disc", color: "black" }}
          >
            {selectedArrayIndex.array.map((ar, index) => (
              <li
                key={index}
                className={`text-slate-200 ${
                  selectedArrayIndex.array.length > 1 ? "basis-64" : ""
                }`}
              >
                {ar}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default IndustryMid;
