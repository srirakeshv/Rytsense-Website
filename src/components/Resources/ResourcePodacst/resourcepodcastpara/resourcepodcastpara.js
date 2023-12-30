import React from "react";
import { useLocation } from "react-router-dom";

const ResourcePodcastPara = () => {
  const location = useLocation();
  const array = location.state && location.state.array;
  return (
    <div>
      {array && (
        <div className="max-w-7xl p-5 mx-auto">
          <div className="flex flex-col gap-7">
            {array.map((ar, index) => (
              <p
                className="text-base md:text-lg leading-8 md:leading-9"
                key={index}
              >
                {ar}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResourcePodcastPara;
