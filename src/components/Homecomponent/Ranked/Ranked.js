import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../varients";

const Rank = () => {
  const images = [
    "/images/top_clutch.co_web3_developer_bengaluru_2023.png",
    "/images/top_clutch.co_blockchain_company_bengaluru_2023.png",
    "/images/top_clutch.co_machine_learning_company_san_jose_2023.png",
    "/images/top_clutch.co_metaverse_development_company_california_2023.png",
    "/images/top_clutch.co_chatbot_company_palo_alto_2023.png",
    "/images/top_clutch.co_iot_company_palo_alto_2023.png",
  ];
  return (
    <div className="">
      <div className="py-5 px-2 flex flex-col gap-4 items-center xl:flex-row">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="grow flex flex-col gap-1"
        >
          <div className="relative">
            <h1 className="text-3xl mt-7 font-bold sm:mt-10">Ranked As #1</h1>
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
              #1
            </h1>
          </div>
          <p className="mb-10">Top Software Development Company</p>
        </motion.div>
        <div className="shadow-lg grow flex justify-between flex-wrap gap-4 p-3 sm:justify-center">
          {images.map((image, index) => (
            <div className="w-32">
              <img src={image} alt="clutch" key={index}></img>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rank;
