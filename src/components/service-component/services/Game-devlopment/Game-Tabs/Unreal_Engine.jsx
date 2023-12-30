import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../varients";
import Technology from "../../mobile-app/Technology";
import Footer from "../../../../common/Footer";
import Header from "../../../../../components/common/Header"
import Topbar from "../../../../common/Topbar";

export default function Unreal_Engine() {
  return (
    <div>
      <Topbar/>
      <Header/>
      <section className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="sm:text-center lg:text-left"
          >
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">
                Unreal Engine Game Development
              </span>
              <span className="block text-indigo-600 xl:inline">Company</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Acquire Best Quality Unreal Engine With Us
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4"
          >
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src="\images\service-img\unreal-banner.png"
              alt=""
            />
          </motion.div>
        </div>
      </section>

      <div className=" min-h-screen">
        <div className="container mx-auto py-8 px-4">
          <section className="mb-8">
            <motion.p
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="text-gray-700"
            >
              The Unreal Engine is an open-source platform, and the engine has
              specialized in creating 2D/ 3D game development. An Unreal engine
              is an emerging software that has high definition and is unique for
              game development. Earlier, it was applied to build 3D or 2D games,
              but now it is used for 3D-infused game services. The software
              development supports all platforms for game development, such as
              iOS to Android and AR/VR technologies.{" "}
            </motion.p>
          </section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700">
              The unreal engine holds several benefits, and one of them is how
              it helps to take game app development to another level. The
              features of Unreal engine software have a more comprehensive range
              and are used for building high-quality games.Rytsense Technology
              provides a seamless gaming experience with an unreal engine. Our
              developers create game app development that functions efficiently,
              is smooth, and improves the gaming experience. We offer the
              best-uncompromised quality service that brings impeccable results.
              Software development enables experts to work at pace and
              determines several business goals.{" "}
            </p>
          </motion.section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700 mt-5">
              Moreover, multiple game developers trust unreal engines for game
              development, and many famous games have been developed with the
              software. The engine offers a robust workflow that leverages quick
              results and experience. Our company holds in-depth knowledge of
              engines and has specialization from several Unreal engine game app
              developments. Whether a small or big enterprise,Rytsense
              Technology is by your side for the game app development. From the
              development stage to the deployment stage of game development, our
              game developers maintain high quality. The unreal engine develops
              multiple platforms of 3D and 3D games with excellent standards in
              every aspect. The developers design photoreal models that
              eventually provide a surreal experience in visualization. It is
              beneficial for the experts, designers, architects, and many more
              who have specializations in modern designs. Our experienced
              developers offer expert consulting of the unreal engine and
              provide your team superior performance and quality as per the
              client's requirements. It will support you and provide a more
              realistic approach in graphics, effects, shadows, and much more.{" "}
            </p>
          </motion.section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700 mt-5">
              Do you think the process of excellent game software would be long
              and time-consuming? Well, you're mistaken. It is pretty short, and
              the engine saves your time on game app development. The engine
              offers freedom to the developers to design a 3D game or any
              variety of games they want. Every game is suitable and appropriate
              for the Unreal game development engine. It empowers the developer
              to create multiple game functionality with simple prototypes and
              no coding. Thus, it validates your idea and decreases the cost of
              game app development. In-game app development, with the help of an
              unreal engine, you can experience cinematic with 3D qualities. The
              game could be storytelling, photogrammetry, facial animation,
              character design, VR features, and much more. It increases the
              gaming interactivity faster and tends to give the ultimate
              delivered result. By hiringRytsense Technology, you will get
              versatile unreal engine game development in agile time. There are
              many different versions of the unreal engine; the latest one is
              unreal engine 5.
            </p>{" "}
          </motion.section>
        </div>
      </div>
      <Technology />
      <Footer/>
    </div>
  );
}
