import React from "react";
import { useLocation } from "react-router-dom";

const ResorceTechNewsImage = () => {
  const location = useLocation();
  const image = location.state && location.state.image;
  return (
    <div>
      {image && (
        <div className="max-w-7xl p-5 mx-auto">
          <div className="flex justify-center">
            <img src={image} alt="banner"></img>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResorceTechNewsImage;
