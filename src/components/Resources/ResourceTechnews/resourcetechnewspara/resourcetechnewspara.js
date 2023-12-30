import React from "react";
import { useLocation } from "react-router-dom";

const ResourceTechNewsPara = () => {
  const location = useLocation();
  const para = location.state && location.state.para;
  return (
    <div>
      {para && (
        <div className="max-w-7xl mt-12 p-5 mx-auto">
          <div className="flex flex-col gap-7">
            {para.map((p, index) => (
              <p
                className="text-base md:text-lg leading-8 md:leading-9"
                key={index}
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResourceTechNewsPara;
