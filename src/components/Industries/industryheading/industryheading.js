import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Cpp from "../../../calendly";

const IndustryHeading = () => {
  const location = useLocation();
  const industryname = location.state && location.state.industryname;
  const company = location.state && location.state.company;
  const about = location.state && location.state.about;
  const buttontext = location.state && location.state.buttontext;
  const bg = location.state && location.state.bg;
  const [minHeight, setMinHeight] = useState(600);

  useEffect(() => {
    const handleResize = () => {
      setMinHeight(window.innerWidth <= 500 ? 400 : 600);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call it once to set the initial state
    handleResize();

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const containerStyle = {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    minHeight: `${minHeight}px`,
  };
  return (
    <div className="my-10">
      <div className="max-w-7xl p-5 mx-auto rounded-xl" style={containerStyle}>
        <div className="flex flex-col gap-3 items-center">
          <div className="relative flex">
            <h1 className="text-2xl mt-7 font-bold md:text-5xl md:mt-10 text-white">
              {industryname}
            </h1>
            <h1
              className="text-5xl font-bold top-0 md:text-7xl"
              style={{
                WebkitTextStroke: "2px",
                WebkitTextStrokeColor: "#F0F0F0",
                color: "white",
                position: "absolute",
                zIndex: "-1",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              Industries
            </h1>
          </div>
          <p className="text-xl font-bold md:text-5xl text-center text-white">
            {company}
          </p>
          <p className="text-base font-normal text-slate-200 text-center md:text-2xl w-full md:w-2/3">
            {about}
          </p>
          <div className="mt-6 px-5 py-3 border-2 border-blue1 rounded-lg font-semibold hover:bg-blue1 hover:cursor-pointer text-white">
            <button type="button" className="flex gap-2 items-center">
              {<Cpp buttonText={buttontext} />}{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryHeading;
