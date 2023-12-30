import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../varients";
import Technology from "../../mobile-app/Technology";
import Footer from "../../../../common/Footer";
import Header from "../../../../../components/common/Header"
import Topbar from "../../../../common/Topbar";

export default function Agumented() {
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
                Agumented Reality Game Development
              </span>
              <span className="block text-indigo-600 xl:inline">Company</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Convert Your Raw Idea into AR Featured Application!
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
              src="\images\service-img\augmented-banner.png"
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
              Augmented Reality has become one of the next big moves in the
              application sector. What we see surrounding us is the world in its
              most natural form and augmented Reality is exactly the opposite of
              the same. It is a dual mixture of digital and the real world that
              gives inception to the new world. What AR does is that it adds
              advancement to certain components like sound, picture & images,
              motion along with GPS data to make the view more alluring
              meanwhile informative. It lies in the phantom between VR and
              reality blotting the line that makes the difference about what is
              computer generated and what is real by improvising the users’
              senses. Generally, augmented reality represents a changed view of
              reality by augmenting the elements or components in context to the
              environment. With the help of AR technology, users find themselves
              in the middle of a digitally manipulating and interactive
              surrounding that can be masked into the real world.{" "}
            </motion.p>
          </section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700">
              Rytsense Technology leverages significant years of expertise in
              the latest trend of Augmented Reality app development for both the
              platforms. As one of the top AR application development
              company,Rytsense Technology utilize latest techniques to speed up
              project delivery. We cling to the industry standards, to cater the
              best ever solutions that fit the client's requirements along with
              the business goals and objectives. AtRytsense Technology, you have
              access to the dedicated team that works with proven development
              methodologies having a transparent working pattern which gives
              curves to your vision. You can be assured for the unmatched AR
              apps development solutions at quite affordable rates within your
              proposed time.{" "}
            </p>
          </motion.section>
        </div>
        <Technology />
      </div>
      <Footer/>
    </div>
  );
}
