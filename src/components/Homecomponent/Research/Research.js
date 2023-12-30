import React from "react";
import { useNavigate } from "react-router-dom";

const ResearchContent = () => {
  const navigate = useNavigate();
  const researches = [
    {
      heading: "Blogs",
      bgimage: "/images/homepageimages/technology-3435575_1280.jpg",
      passage: "How AI is Transforming Business: A Complete Guide",
      path: "/research/guide-on-how-ai-is-transforming-businesses",
    },
    {
      heading: "Blogs",
      bgimage: "/images/homepageimages/code-1076536_1280.jpg",
      passage: "How to Hire PHP Developers in 2023?",
      path: "/research/hire-php-developers",
    },
    {
      heading: "Blogs",
      bgimage: "/images/homepageimages/create-3026190_1280.jpg",
      passage: "Definitive Guide to Hire Unity3D Developers in 2023",
      path: "",
    },
  ];
  return (
    <div>
      <div className="max-w-7xl p-5 mx-auto">
        <div className="flex flex-col gap-3">
          <div className="relative">
            <h1 className="mt-7 text-3xl font-bold md:text-5xl md:mt-10">
              Research
            </h1>
            <h1
              className="text-5xl font-bold top-0 md:text-7xl"
              style={{
                WebkitTextStroke: "2px",
                WebkitTextStrokeColor: "#F0F0F0",
                color: "white",
                position: "absolute",
                zIndex: "-1",
              }}
            >
              Research
            </h1>
          </div>
          <p>A well- Detailed Research about the Innovative Topics.</p>
        </div>
        <div className="mt-7 py-5 flex gap-5 flex-wrap justify-center lg:justify-between">
          {researches.map((research, index) => (
            <div
              className="flex-0 basis-80 shadow-lg rounded-xl lg:flex-1 hover:cursor-pointer"
              key={index}
              onClick={() => navigate(research.path)}
            >
              <img
                className="w-full h-52 rounded-t-xl"
                src={research.bgimage}
              ></img>
              <p className="p-5 text-lg font-semibold hover:text-blue1">
                {research.passage}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchContent;
