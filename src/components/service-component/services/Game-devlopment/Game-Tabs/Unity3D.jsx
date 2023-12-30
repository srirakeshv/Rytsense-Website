import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../varients";
import Footer from "../../../../common/Footer";
import Header from "../../../../../components/common/Header"
import Topbar from "../../../../common/Topbar";

export default function Unity3D() {
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
              <span className="block xl:inline">Unity 3D Game Development</span>
              <span className="block text-indigo-600 xl:inline">Company</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              You Can Pursure Unity 3D Game Development.
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
              src="\images\service-img\gametab.png"
              alt=""
            />
          </motion.div>
        </div>
      </section>
      <div className=" min-h-screen">
        <div className="container mx-auto py-8 px-4">
          <section className="mb-8">
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="my-4 font-bold text-3xl text-gray-800 sm:text-4xl mb-4"
            >
              How To Make Unity 3D Game Development Work In Your Favor
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="text-gray-700"
            >
              Unity 3D Game development is actually founded on the use of the
              multi-platform Unity game engine. Basically, the game engine
              allows developers to make video games for different platforms,
              including mobile devices, consoles and even desktop applications.
              You can pursue Unity 3D Game development if you want to take
              advantage of the fact that it is supported on various common
              platforms – such as Wii U, Windows Phone 8, Xbox 360, PlayStation
              3, Flash, Linux, OS X, Blackberry, Windows, Android, and iOS and
              web browsers.
            </motion.p>
          </section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700">
              One of the big advantages of using the Unity game engine is
              whether you are associated with fresher game developers or
              experienced ones. You will be relying on the same tools all it
              matters is how proficient the game developers are, but with
              Rytsense Technology, you will be in good hands. The Unity game
              engine is not only powerful but it also brings down the cost of
              game development for the smaller players. So not only do you have
              the same capability as the big boys but you will also be able to
              put out a smaller investment for your new game’s development. This
              helps bring down the risk that you will assume if you pursue Unity
              3D Game development.
            </p>
          </motion.section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700 mt-5">
              As its name suggests, Unity 3D Game development means creating
              three-dimensional games that are appealing to play because they
              are so lifelike. The special effects rendered with Unity 3D can be
              so good that you can see the character’s face reflected on calm
              water while shadows seem to fall naturally behind the game
              characters. If you are attracted to creating your own 3D game,
              then you may need help from an experienced developer such as
              Rytsense Technology. We can assist you from point A (game
              conceptualization) to point G (developing the actual game) to
              point Z (debugging and pilot testing your game). If you don’t have
              much experience in the Unity game engine tools we can always
              assume that load for you while you figure out what to do with your
              game once it has been released.
            </p>
          </motion.section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700 mt-5">
              One reason you may need expert assistance is that not everyone has
              the talents to cover all aspects of designing a game. Some people
              in your team may be good in the artistic aspect meaning creating
              the game concept, fleshing out the script and the character
              profile, while others can be good at determining the logical game
              play progression. By hiring us you will be able to get your unique
              Unity 3D Game up and running in no time so that your target market
              will pay attention and start playing.{" "}
            </p>
          </motion.section>
        </div>
      </div>
      
      <Footer/>
    </div>
  );
}
