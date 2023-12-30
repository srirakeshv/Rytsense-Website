import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../varients";
import Technology from "../../mobile-app/Technology";
import Footer from "../../../../common/Footer";
import Header from "../../../../../components/common/Header"
import Topbar from "../../../../common/Topbar";

export default function Virtual() {
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
                Virtual Reality Game Development
              </span>
              <span className="block text-indigo-600 xl:inline">Company</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Experience the best Game Development on Virtual Reality with
              Rytsense Technology
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
              src="\images\service-img\virtual-banner.png"
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
              Best Virtual Reality Game Development
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="text-gray-700"
            >
              Virtual Augmented Game development is alluring more concern from
              many business people because their thought process predicts that
              they can harvest massive profits if they could find the right
              baseball concept to develop. The leading lady of a very successful
              game concept is Zombie for a game lover which is very conceptual
              yet very addictive virtual game has now made many dollars off it
              and will credibly standout to earn even more as the game's
              popularity soar upwards. So what are the agents that can help you
              pursue virtual reality Game development fruitfully?
            </motion.p>
          </section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700">
              Are you a game lover? Are you having game conception in your mind?
              If yes, then you need to pull out your concept to let you drive to
              your fantasy. If you hold up a team of fanciful employees working
              on game development with you, then keep aside an afternoon to
              brainstorm with them to bring your game conception to existence.
              Make a note that brainstorming means exploring all up approaches -
              the sky is the limit. As far as the game concept is feasible in
              virtual reality then it is acceptable.
            </p>
          </motion.section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700 mt-5">
              But before pondering for the virtual reality app development a
              query arises in mind is what exactly is a Virtual reality? Well,
              the Virtual reality is an unnatural environment that is created
              using software and tendered to the user in a way that the user
              dangles belief and admits it as a real environment. Insight
              computer, virtual reality is mainly experienced through two of the
              five senses: sight and sound. A 3D image can be said as one of the
              simplest yet a popular form of virtual reality.{" "}
            </p>
          </motion.section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700 mt-5">
              Secondly, do you have a competent developer likeRytsense
              Technology who can make dream conception of the virtual game a
              reality? This is the coherent later step because all ideas need to
              have practical application in the game app universe. You have to
              be seated with the virtual game developers team explaining your
              storyboard to them asking them if they can turn the concept into
              virtuality in form of game development. Choosing developer
              likeRytsense Technology can integrate your obscures idea and
              incorporate them into the game of virtual world where you will be
              lost in the creation of virtually developed around you.
            </p>{" "}
          </motion.section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700 mt-5">
              Lastly, are you confirmed that the developer won't escape with
              your marvelous and groundbreaking new game idea? Some clients feel
              they've been conned into disclosing their most crucial concept
              when the developer takes off their idea and tenured as their own.
              To ensure that the developer will not filch your virtual game
              idea, make the development team sign-up a 100% non-disclosure
              agreement well in advance.Do confirm all the meetings and stuff
              with the team so that it becomes lucid in front of court-of-law
              that who is the proprietor of the idea. In this manner, you can
              restrain command over your idea for any game development.
            </p>{" "}
          </motion.section>
        </div>
        <Technology />
      </div>
      <Footer/>
    </div>
  );
}
