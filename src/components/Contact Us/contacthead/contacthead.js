import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../varients";
import { useNavigate } from "react-router-dom";

const ContactHead = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="max-w-7xl p-5 mx-auto">
        <div className="flex">
          <p className="flex gap-1 text-lg ml-auto font-normal">
            <span
              className="text-indigo-800 hover:cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </span>
            <span className="text-slate-500">/</span>
            <span className="text-slate-500">Contact Us</span>
          </p>
        </div>
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="mt-20 flex flex-col gap-3 items-center"
        >
          <div className="relative">
            <p className="mt-7 text-3xl font-bold sm:text-5xl sm:mt-10">
              Contact Us
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
              contact
            </h1>
          </div>
          <div className="text-lg text-center font-normal">
            <p className="text-slate-800">
              We would be happy to hear from you, please fill in the form below
              or mail us your requirements on
            </p>
            <p className="text-red-700">hey@rytsensetech.com</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactHead;
