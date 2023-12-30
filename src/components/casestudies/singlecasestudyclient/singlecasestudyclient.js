import React from "react";
import { useLocation } from "react-router-dom";

const SingleCaseStudyclient = () => {
  const location = useLocation();
  const clientrequirements =
    location.state && location.state.clientrequirements;
  const clientsrc = location.state && location.state.clientsrc;
  return (
    <div className="bg-blue1">
      <div className="max-w-7xl px-5 mx-auto flex flex-col gap-2 items-center ll:flex-row">
        <div className="flex-1 bg-white px-10 py-5">
          <div className="relative flex">
            <h1
              className="mt-7 text-3xl font-bold md:text-5xl md:mt-10"
              style={{ zIndex: "1" }}
            >
              Client Requirements
            </h1>
            <h1
              className="text-5xl font-bold top-0 md:text-7xl"
              style={{
                WebkitTextStroke: "2px",
                WebkitTextStrokeColor: "#F0F0F0",
                color: "white",
                position: "absolute",
                zIndex: "0",
              }}
            >
              Client
            </h1>
          </div>
          <div className="mt-4">
            <p className="text-lg text-slate-700">{clientrequirements}</p>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img className="" src={clientsrc} alt="app"></img>
        </div>
      </div>
    </div>
  );
};

export default SingleCaseStudyclient;
