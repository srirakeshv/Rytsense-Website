import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../varients";
import { useLocation } from "react-router-dom";

const SingleCaseStudyHead = () => {
  const location = useLocation();
  const heading = location.state && location.state.heading;
  const sub = location.state && location.state.sub;
  const topimage = location.state && location.state.topimage;
  return (
    <div>
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="max-w-7xl p-5 mx-auto"
      >
        <div className="flex justify-center">
          <img className="w-44 h-32" src={topimage} alt="iconpng"></img>
        </div>
        <div className="relative flex justify-center">
          <h1 className={`mt-7 text-3xl font-bold md:text-5xl md:mt-10`}>
            {heading || "Default Heading"}
          </h1>
          <h1
            className={`text-5xl font-bold top-0 md:text-7xl`}
            style={{
              WebkitTextStroke: "2px",
              WebkitTextStrokeColor: "#F0F0F0",
              color: "white",
              position: "absolute",
              zIndex: "-1",
            }}
          >
            {sub || "Default Heading"}
          </h1>
        </div>
      </motion.div>
    </div>
  );
};

export default SingleCaseStudyHead;
