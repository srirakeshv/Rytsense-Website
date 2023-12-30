import React from "react";
import { useLocation } from "react-router-dom";

const SingleCaseStudyChallenge = () => {
  const location = useLocation();
  const challenges = location.state && location.state.challenges;
  return (
    challenges && (
      <div>
        <div className="max-w-7xl p-5 mx-auto">
          <div className="relative flex">
            <h1 className="text-3xl mt-7 font-bold md:text-5xl md:mt-10">
              Challenges
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
              Client
            </h1>
          </div>
          <div
            className="mt-5 shadow-lg rounded-2xl flex flex-col gap-5"
            style={{ padding: "30px" }}
          >
            {challenges &&
              challenges.map((challenge, index) => (
                <div key={index}>
                  <h1 className="text-3xl font-bold">{challenge.heading}</h1>
                  <p className="mt-3 text-lg text-slate-800">
                    {challenge.passage}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    )
  );
};

export default SingleCaseStudyChallenge;
