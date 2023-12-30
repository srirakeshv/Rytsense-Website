import React from "react";
import { useLocation } from "react-router-dom";

const ResourceBlogPara2 = () => {
  const location = useLocation();
  const paraarray2 = location.state && location.state.paraarray2;
  return (
    <div>
      {paraarray2 && (
        <div className="max-w-7xl mt-12 p-5 mx-auto flex flex-col items-center">
          <div className="w-full flex flex-col ll:w-2/3">
            {paraarray2.map((para, index) => (
              <div key={index} className="flex flex-col gap-4 mb-10">
                {para.heading2 && (
                  <h1 className="text-xl md:text-3xl font-bold">
                    {para.heading2}
                  </h1>
                )}
                <h1 className="text-xl md:text-3xl font-bold">
                  {para.heading}
                </h1>
                <div className="flex flex-col gap-7">
                  {para.array.map((p, index) => (
                    <p
                      key={index}
                      className="text-lg st:text-xl leading-8 st:leading-9"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResourceBlogPara2;
