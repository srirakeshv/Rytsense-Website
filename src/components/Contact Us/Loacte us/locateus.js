import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../varients";

const LocateUs = () => {
  return (
    <div>
      <div className="max-w-7xl p-5 mx-auto">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-col gap-3"
        >
          <div className="relative">
            <p className="text-3xl mt-7 font-bold sm:text-5xl sm:mt-10">
              Locate Us
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
              Locate
            </h1>
          </div>
        </motion.div>
        <div className="mt-28 flex gap-16 flex-wrap text-center">
          <section className="flex-1 flex flex-col gap-32 items-center">
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="grow h-80 w-80 p-4 bg-amber-100 flex flex-col gap-8 items-center"
            >
              <div
                className="w-24 h-32 rounded-md bg-white"
                style={{
                  marginTop: "-80px",
                }}
              >
                <img></img>
              </div>
              <div className="flex gap-1 justify-center items-center">
                <img
                  className="w-8 h-6"
                  src="/images/uk flag.png"
                  alt="UK Flag"
                ></img>
                <h1 className="text-2xl font-bold">UK Office</h1>
              </div>
              <p className="text-xl font-normal">
                338A, Kingston Road, Wimbledon, London SW208LR
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="grow h-80 w-80 p-4 bg-purple-100 flex flex-col gap-8 items-center"
            >
              <div
                className="w-24 h-32 rounded-md bg-white flex justify-center items-center"
                style={{
                  marginTop: "-80px",
                }}
              >
                <img
                  className="w-20"
                  src="/images/output-onlinepngtools (1).png"
                ></img>
              </div>
              <div className="flex gap-1 justify-center items-center">
                <img
                  className="w-8 h-6"
                  src="/images/India Flag.png"
                  alt="USA Flag"
                ></img>
                <h1 className="text-2xl font-bold">INDIA Office</h1>
              </div>
              <p className="text-xl font-normal">
                First floor, SM tower, Perungudi, OMR Chennai, TamilNadu 600096
              </p>

              <div className="flex gap-1 text-xl font-normal justify-center hover:text-indigo-500 hover:cursor-pointer">
                <span>+91</span>
                <span>70100</span>
                <span>455153</span>
              </div>
            </motion.div>
          </section>
          <section className="flex-1 flex flex-col gap-32 items-center">
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="grow h-80 w-80 p-4 bg-sky-100 flex flex-col gap-8 items-center"
            >
              <div
                className="w-24 h-32 rounded-md bg-white"
                style={{
                  marginTop: "-80px",
                }}
              >
                <img></img>
              </div>
              <div className="flex gap-1 justify-center items-center">
                <img
                  className="w-8 h-6"
                  src="/images/australia flag.png"
                  alt="USA Flag"
                ></img>
                <h1 className="text-2xl font-bold">AUSTRALIA Office</h1>
              </div>
              <p className="text-xl font-normal">
                4 Matisse street Cranbourne West Vic 3977
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="grow h-80 w-80 p-4 bg-cyan-100 flex flex-col gap-8 items-center"
            >
              <div
                className="w-24 h-32 rounded-md flex justify-center items-center bg-white"
                style={{
                  marginTop: "-80px",
                }}
              >
                <img src="/images/email (2).png" alt="icon"></img>
              </div>
              <div className="flex gap-1 justify-center">
                <h1 className="text-2xl font-bold">Email Us</h1>
              </div>
              <p className="text-xl font-normal hover:text-indigo-500">
                <a href="mailto:hey@rytsensetech.com">hey@rytsensetech.com</a>
              </p>
              <div className="w-40 h-40">
                <img
                  className="w-full rounded-t-lg"
                  src="/images/email-6520447_1280.jpg"
                  alt="emailimage"
                ></img>
              </div>
            </motion.div>
          </section>
          <section className="flex-1 flex flex-col gap-32 items-center">
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="grow h-80 w-80 p-4 bg-stone-100 flex flex-col gap-8 items-center"
            >
              <div
                className="w-24 h-32 rounded-md bg-white"
                style={{
                  marginTop: "-80px",
                }}
              >
                <img></img>
              </div>
              <div className="flex gap-1 justify-center items-center">
                <img
                  className="w-8 h-6"
                  src="/images/Usa Flag.png"
                  alt="USA Flag"
                ></img>
                <h1 className="text-2xl font-bold">USA Office</h1>
              </div>
              <p className="text-xl font-normal">
                334 Pioneer way, Mountain View, California 94041, USA
              </p>

              <div className="flex gap-1 text-xl font-normal justify-center hover:text-indigo-500 hover:cursor-pointer">
                <span>+1</span>
                <span>650</span>
                <span>681</span>
                <span>0090</span>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="grow h-80 w-80 p-4 bg-rose-100 flex flex-col gap-8 items-center"
            >
              <div
                className="w-24 h-32 rounded-md flex justify-center items-center bg-white"
                style={{
                  marginTop: "-80px",
                }}
              >
                <img src="/images/social.png" alt="icon"></img>
              </div>
              <div className="flex gap-1 justify-center">
                <h1 className="text-2xl font-bold">Skype</h1>
              </div>
              <p className="text-xl font-normal hover:text-indigo-500">
                <a href="#">Rytsensetechnologies</a>
              </p>
              <div className="w-40 h-40">
                <img
                  className="w-full rounded-t-lg"
                  src="/images/online-5059831_1280.jpg"
                  alt="emailimage"
                ></img>
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LocateUs;
