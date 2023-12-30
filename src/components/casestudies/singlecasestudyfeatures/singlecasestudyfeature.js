import React from "react";
import { useLocation } from "react-router-dom";

const SingleCaseStudyFeatures = () => {
  const location = useLocation();
  const feature1 = location.state && location.state.feature1;
  const feature2heading = location.state && location.state.feature2heading;
  const feature2 = location.state && location.state.feature2;
  const feature3heading = location.state && location.state.feature3heading;
  const feature3 = location.state && location.state.feature3;
  return (
    feature1 && (
      <div>
        <div className="max-w-7xl p-5 mx-auto">
          <div className="relative flex">
            <h1 className="text-3xl mt-7 font-bold md:text-5xl md:mt-10">
              Features
            </h1>
            <h1
              className={`text-5xl font-bold top-0 md:text-7xl`}
              style={{
                WebkitTextStroke: "2px",
                WebkitTextStrokeColor: "#F0F0F0",
                color: "white",
                position: "absolute",
                zIndex: "-1",
              }}
            >
              Features
            </h1>
          </div>
          <div className="mt-10 flex flex-col gap-3 ll:flex-row">
            <div
              className="flex-1 shadow-lg rounded-2xl"
              style={{ padding: "30px 40px" }}
            >
              <p className="text-lg" style={{ marginBottom: "20px" }}>
                {feature1}
              </p>
              <h1 className="text-3xl font-bold">{feature2heading}</h1>
              <p className="text-lg text-slate-800 mt-5">{feature2}</p>
            </div>
            {feature3heading && feature3 && (
              <div
                className="flex-1 shadow-lg rounded-2xl"
                style={{ padding: "30px 40px" }}
              >
                <h1 className="text-3xl font-bold">{feature3heading}</h1>
                <p className="text-lg text-slate-800 mt-5">{feature3}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default SingleCaseStudyFeatures;
