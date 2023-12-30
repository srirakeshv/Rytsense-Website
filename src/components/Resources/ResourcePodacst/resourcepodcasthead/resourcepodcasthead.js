import React from "react";
import { useLocation } from "react-router-dom";

const ResourcePodcastHead = () => {
  const location = useLocation();
  const title = location.state && location.state.title;
  const title1 = location.state && location.state.title1;
  return (
    title && (
      <div>
        <div className="max-w-7xl mt-12 p-5 mx-auto flex flex-col gap-2 items-center">
          <div className="relative flex justify-center">
            <h1
              className={`mt-7 text-3xl font-bold md:text-5xl md:mt-10 text-center`}
            >
              {title}
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
              Let's Listen
            </h1>
          </div>
          <p className="mt-5 text-lg text-slate-600">{title1}</p>
        </div>
      </div>
    )
  );
};

export default ResourcePodcastHead;
