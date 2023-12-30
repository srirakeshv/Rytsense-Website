import React from "react";
import { useLocation } from "react-router-dom";

const ResourceBlogParaContent = () => {
  const location = useLocation();
  const paraarray = location.state && location.state.paraarray;
  return (
    <div>
      {paraarray && (
        <div className="max-w-7xl mt-12 p-5 mx-auto flex flex-col items-center">
          <div className="w-full flex flex-col gap-7 ll:w-2/3">
            {paraarray.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg st:text-xl leading-8 st:leading-9"
              >
                {typeof paragraph === "object" ? paragraph.text : paragraph}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResourceBlogParaContent;
