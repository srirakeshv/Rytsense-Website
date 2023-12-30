import React from "react";

const Mediacoveage = () => {
  const mediaarray = [
    "/images/homepageimages/media1.png",
    "/images/homepageimages/CNBC-Symbol4.png",
    "/images/homepageimages/Entrepreneur 2.png",
    "/images/homepageimages/yahoo4.png",
    "/images/homepageimages/The_Economic_Times_logo3.png",
  ];
  return (
    <div>
      <div className="max-w-7xl p-5 mx-auto">
        <div>
          <h1 className="text-5xl font-bold text-center">Media Coverage</h1>
        </div>
        <div className="mt-8 flex gap-10 items-center flex-wrap justify-center xl:justify-start">
          {mediaarray.map((media, index) => (
            <div className={`w-52 py-2 `}>
              <img
                src={media}
                key={index}
                alt="logo"
                className={`h-20 pr-10 border-0 ${
                  index !== mediaarray.length - 1 ? "sf:border-r-2" : ""
                }`}
              ></img>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mediacoveage;
