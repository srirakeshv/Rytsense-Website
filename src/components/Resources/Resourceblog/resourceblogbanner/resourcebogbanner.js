import React from "react";
import { useLocation } from "react-router-dom";

const ResourceBlogBanner = () => {
  const location = useLocation();
  const image = location.state && location.state.image;
  return (
    <div>
      <div className="max-w-7xl p-5 mx-auto">
        {image && (
          <div className="w-full">
            <img className="w-full" src={image} alt="banner"></img>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourceBlogBanner;
