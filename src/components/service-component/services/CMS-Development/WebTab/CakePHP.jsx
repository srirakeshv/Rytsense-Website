import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../varients";
import Technology from "../../mobile-app/Technology";
import Footer from "../../../../common/Footer";
import Header from "../../../../../components/common/Header"
import Topbar from "../../../../common/Topbar";

export default function CakePHP() {
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
              <span className="block xl:inline">CakePHP Web Development</span>
              <span className="block text-indigo-600 xl:inline">Company</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              This Is A Web Application Framework That Is Very Useful For
              Commercial Applications{" "}
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
              src="\images\service-img\cakephp-banner.png"
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
              Why Your Business May Need The CakePHP Framework
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="text-gray-700"
            >
              To those who don’t know, CakePHP is actually a web application
              framework that is very useful for commercial applications.It was
              founded on the PHP web development language and got its
              inspiration from Ruby on Rails. With CakePHP on your side, you can
              create new web applications without having to use excessive code –
              this makes web app development simpler yet faster. Of course, some
              business owners don’t want to be hampered by having to learn
              CakePHP from the ground up so you could always consider hiring
              Rytsense Technology to handle the heavy coding for you.{" "}
            </motion.p>
          </section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700">
              Because CakePHP was founded on PHP and does not contain YAML or
              XML files, CakePHP allows you to work fast by creating the
              database then moving on from there. You can rely on CakePHP
              conventions as your app development guide so that you won’t have
              to decide which components have to go where. Other necessities
              such as authentication, validation, caching, database access and
              translations are also provided. Security is also easier with
              CakePHP because it has its own tools for XSS protection, SQL
              injection protection, Form tampering prevention, CSRF protection,
              and input validation.{" "}
            </p>
          </motion.section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700 mt-5">
              Those who are willing to put their nose to the grind can benefit
              from participating in hands-on training in CakePHP without having
              to leave work or home. You will need Internet access of course and
              a computer with the right hardware to make this feasible.
              Actually, this is a very good idea even if you hireRyt'sense
              Technology to do the coding for you because you probably want a
              working knowledge of CakePHP so you can follow the progress of
              your web app development. You should also consider attending the
              CakeFest which is held every year for the benefit of fans and
              developers of the CakePHP framework.
            </p>
          </motion.section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700 mt-5">
              At the same time, there is literally a global community of CakePHP
              developers that you can rely on to provide their knowledge,
              skills, and experience if you encounter web application problems.
              You can also seek assistance from the Cake Development
              Corporation. If you find that CakePHP has been useful for your
              business you might even consider making a regular donation to the
              Cake Software Foundation which promotes further development of the
              CakePHP system. Donations can start at $1 upwards.{" "}
            </p>
          </motion.section>
        </div>
      </div>
      <Technology />
      <Footer/>
    </div>
  );
}
