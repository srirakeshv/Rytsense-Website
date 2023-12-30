import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../varients";

export const Services = () => {
  const details = [
    {
      heading: "AI-Ml",
    },
    {
      heading: "Mobile App",
      heading2: "Development",
    },
    {
      heading: "Software",
      heading2: "Development",
    },
    {
      heading: "Digital Transformation",
    },
    {
      heading: "Data Science &",
      heading2: "Analytics",
    },
    {
      heading: "Cloud Services",
    },
    {
      heading: "Block Services",
    },
    {
      heading: "Ideation & Design",
      heading2: "Strategy",
    },
  ];

  return (
    <div className="pb-5">
      <div className="max-w-7xl p-5 mx-auto">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-col gap-10"
        >
          <div className="relative">
            <p
              className="mt-7 flex flex-col text-base font-semibold sm:text-3xl sm:mt-10"
              style={{ color: "#3D5AA4" }}
            >
              <span>We Create New Solution & Transform</span>
              <span>Existing Ones With a Development</span>
              <span>Process That Beats Industry - Best TimeLines</span>
            </p>
            <h1
              className="text-5xl font-bold top-0 sm:text-7xl"
              style={{
                WebkitTextStroke: "2px",
                WebkitTextStrokeColor: "#F0F0F0",
                color: "white",
                position: "absolute",
                zIndex: "-1",
              }}
            >
              SERVICES
            </h1>
          </div>
          <div
            className="self-start p-4 text-white flex gap-2"
            style={{ backgroundColor: "#3D5AA4" }}
          >
            <button>our Services</button>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </div>
        </motion.div>
        <div className="mt-10 flex gap-7 flex-wrap">
          {details.map((detail, index) => (
            <div
              key={index}
              className="grow basis-60 flex items-center font-semibold text-blue1 px-2 py-3 rounded-2xl shadow-lg hover:bg-blue1 hover:cursor-pointer hover:text-white"
            >
              <p className="flex flex-col justify-center">
                <span>{detail.heading}</span>
                <span>{detail.heading2}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
