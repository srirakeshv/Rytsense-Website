import React from "react";
import { useLocation } from "react-router-dom";

const ResourcePodcastImage = () => {
  const location = useLocation();
  const image = location.state && location.state.image;
  const heading = location.state && location.state.heading;
  return (
    <div>
      {image && heading && (
        <div className="max-w-7xl p-5 mx-auto">
          <div className="flex flex-col gap-1">
            <h1 className="ml-3 text-2xl md:text-5xl font-bold text-blue1 opacity-40">
              {heading}
            </h1>
            <div className="bg-blue1 relative flex w-72 md:w-96 h-52 rounded-2xl">
              <img
                className="w-72 md:w-96 h-52 rounded-2xl"
                src={image}
                alt="bgimage"
                style={{
                  position: "absolute",
                  top: "15px",
                  left: "15px",
                }}
              ></img>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResourcePodcastImage;
