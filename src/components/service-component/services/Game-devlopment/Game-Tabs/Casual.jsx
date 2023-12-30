import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../varients";
import Technology from "../../mobile-app/Technology";
import Footer from "../../../../common/Footer";
import Header from "../../../../../components/common/Header"
import Topbar from "../../../../common/Topbar";

export default function Casual() {
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
              <span className="block xl:inline">Casual Game Development</span>
              <span className="block text-indigo-600 xl:inline">Company</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Benefit Of Pursuring Casual Game Development.
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
              The Benefits Of Pursuing Casual Game development
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="text-gray-700"
            >
              Casual Game refers to video games (even software apps) that allow
              casual players to participate.The main difference between a Casual
              Game and a "hardcore" game is that a player does not have to
              adhere to any strict rules governing play in a Casual Game. A
              "hardcore" game player, on the other hand, could be obsessed with
              reaching higher and higher scores or levels of difficulty in even
              one game that he follows. You may consider that a Casual Game
              player is less stressed out - indeed, so "casual" that he can be
              said to be a "laid-back" player.
            </motion.p>
          </section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700">
              Generally, a Casual Game can be played on a computer desktop or
              laptop though there are some games in this category which may
              apply to mobile device use as well. Interestingly, Wikipedia
              states that up to 74% of people who enjoy Casual Gameplay are
              women - this could be because males tend to take video game play
              more seriously or competitively. If you are thinking of going into
              Casual Game development, you might consider hiringRytsense
              Technology to assist you in your project.Rytsense Technology to
              assist you in your project.{" "}
            </p>
          </motion.section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700 mt-5">
              One of the earmarks of Casual Game development is that the game
              does not have to be very complicated - actually the simpler it is
              the more it may appeal to the female demographic. Because many
              Casual Game fans also belong to the older generation, it is not
              surprising that they favor the simpler games. After all, these
              types of game players may be very involved in their family and
              careers and not really have the motivation, time or energy to
              pursue games with multiple levels of difficulty. (This may explain
              the popularity of a relatively simple game like Angry Birds). If
              you do want to do Casual Game development you need to come up with
              a simpler game that will still be visually appealing and pleasant
              to use.
            </p>
          </motion.section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700 mt-5">
              An interesting feature that a Casual Game can offer is free use or
              free download. Because the game comes with advertising from third
              parties, you can actually reap in advertising revenues without
              charging users for actual gameplay. Other game developers may
              supply a "free trial" version to the public - once users are
              satisfied with the kind of game offered, they have the option to
              pay for an upgrade to a more complicated version. If either of
              these strategies appeals to you, you may want to getRytsense
              Technology to work on your game development project for you so
              that your project gets results right away.{" "}
            </p>{" "}
          </motion.section>
        </div>
        <Technology />
      </div>
      <Footer/>
    </div>
  );
}
