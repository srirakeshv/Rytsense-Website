import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../varients";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import Topbar from "../../components/common/Topbar";
export default function Career() {
  return (
    <div>
      <Topbar/>
      <Header/>
      <section className="px-4">
        <div className="bg-gradient-to-br from-indigo-400 via-violet-600 to-pink p-6 sm:p-10 rounded-2xl w-full text-white flex items-center justify-between max-w-2xl mx-auto mt-20">
          <div className="flex flex-col gap-6">
            <div className="">
              <span className="text-gray-200 text-4xl font-semibold">
                Are you a fresher?
              </span>

              <br />
              <span className="text-gray-200">
                Are you a fresher? Let's start your career together. At
                Rytsense Technology, we will sharpen your technical to
                communication skills.
              </span>
            </div>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="text-white bg-pink-700 hover:bg-gray-50 hover:text-pink px-4 py-2 rounded-lg w-fit  ease duration-300 flex gap-1 items-center group"
            >
              <span>Apply Here</span>
              <svg
                data-v-e660a7a7=""
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                className="group-hover:translate-x-1 transition-transform ease duration-200"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z"
                ></path>
              </svg>
            </a>
          </div>
          <div></div>
        </div>
      </section>
      <div className="sm:flex items-center max-w-screen-xl p-5">
        <div className="sm:w-1/2 p-10">
          <motion.div   variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}className="image object-center text-center">
            <img src="\images\service-img\aboutus1.webp" />
          </motion.div>
        </div>
        <div className="sm:w-1/2 p-5">
          <motion.div  variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="text">
            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
              Career
            </span>
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
              Better Together,{" "}
              <span className="text-indigo-600">Grow Together</span>
            </h2>
            <p className="text-gray-700">
              We are one of the best places to work. Rytsense Technology
              creates an atmosphere where you can grow your inner self, show
              your talents, get the best out of your own self. We believe in
              invention of new processes that ease your work. The work place at
              Rytsense Technology is very flexible.
            </p>
            <p className="text-gray-700 mt-5">
              We are looking for some fresh talents who can add cultural values
              at Rytsense Technology, some one who has the same mission that is
              ours but also can bring diversity at the same time.
            </p>
          </motion.div>
        </div>
      </div>
      <div className="bg-gray-100 min-h-screen p-4">
        <div className="container mx-auto pt-12 pb-20">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
            Perks To Work With Rytsense Technology:
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div  variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="bg-white rounded-lg shadow-lg p-8">
              <img
                src="\images\service-img\perks-img-1.png"
                className="h-12"
                alt=""
              />
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Flexible Working Hours
              </h2>
              <p className="text-gray-700">
                We are a work oriented company where work is our priority.
                According to our research, flexible working hours are one of the
                factors which lessen your stress from work
              </p>
            </motion.div>
            <motion.div  variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="bg-white rounded-lg shadow-lg p-8">
              <img
                src="\images\service-img\perks-img-2.png"
                className="h-12"
                alt=""
              />

              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Company Activities
              </h2>
              <p className="text-gray-700">
                Fun is an integral part at Rytsense Technology. We celebrate
                together, play together and work together at the same time. We
                arrange fun activities at office frequently to loosen up your
                stress.
              </p>
            </motion.div>
            <motion.div  variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="bg-white rounded-lg shadow-lg p-8">
              <img
                src="\images\service-img\perks-img-3.png"
                className="h-12"
                alt=""
              />
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Awesome Co-Workers
              </h2>
              <p className="text-gray-700">
                Everyone at Rytsense Technology maintains cordial relationships
                with peers. Though we have different departments but we are a
                big team.
              </p>
            </motion.div>
            <motion.div  variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="bg-white rounded-lg shadow-lg p-8">
              <img
                src="\images\service-img\perks-img-4.png"
                className="h-12"
                alt=""
              />

              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Transperancy from top to bottom
              </h2>
              <p className="text-gray-700">
                We at Rytsense Technology preserve complete transparency
                through each hierarchy. Everyone has a right to put their point
                of view and freedom to speak.
              </p>
            </motion.div>
            <motion.div  variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="bg-white rounded-lg shadow-lg p-8">
              <img
                src="\images\service-img\perks-img-5.png"
                className="h-12"
                alt=""
              />

              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Compatative Salaries
              </h2>
              <p className="text-gray-700">
                Rytsense Technology values a true talent and everyone gets
                their fair part of salary. We believe in performance so there is
                no bar for right skills.
              </p>
            </motion.div>
            <motion.div  variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="bg-white rounded-lg shadow-lg p-8">
              <img
                src="\images\service-img\perks-img-6.png"
                className="h-12"
                alt=""
              />

              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Growth Opportunity
              </h2>
              <p className="text-gray-700">
                Growth is never ending at Rytsense Technology. Whether it is
                about monetary or skills & talent or personal growth, everything
                is taken care of. The company has a goal to "Grow together".
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <div className=" p-4 min-h-screen">
        <div className="max-w-7xl mx-auto h-max px-6 md:px-12 xl:px-6">
          <motion.div  variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="mt-16 grid divide-x divide-y  divide-gray-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4  lg:divide-y-0 xl:grid-cols-4">
            <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-gray-100"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <div className="space-y-2">
                  <h2 className="my-8 text-2xl font-bold text-white md:text-2xl">
                    Process Of Interview
                  </h2>
                  <p className="text-gray-300">
                    Selection of any candidate is purely depended on their
                    performance in the interview process. Generally, there are
                    three stages in the interview process which are as follows.
                  </p>
                </div>
              </div>
            </div>
            <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  color="white"
                  height="50"
                  width="50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"></path>
                  <path d="M10 10l2 -2v8"></path>
                </svg>
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-white transition">
                    HR Interview
                  </h5>
                  <p className="text-gray-300">
                    At a first stage a candidate would appear for HR screening
                    where they would be asked question related to adaptability,
                    leadership, growth potential etc.
                  </p>
                </div>
              </div>
            </div>
            <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  color="white"
                  height="50"
                  width="50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"></path>
                  <path d="M10 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3"></path>
                </svg>
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                    Personal Interview
                  </h5>
                  <p className="text-gray-300">
                    Personal Interview of a candidate contains the technical
                    questions related to their domain..
                  </p>
                </div>
              </div>
            </div>
            <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  color="white"
                  height="50"
                  width="50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"></path>
                  <path d="M10 9a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1"></path>
                </svg>
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                    Practical Round
                  </h5>

                  <p className="text-gray-300">
                    This part of interview is the last stage where you need to
                    perform a program practically and show the output of the
                    same.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 text-center mt-5">
            JOB OPENING
          </h1>
        <motion.section  variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="px-4">
       
        <div className="bg-white p-6 sm:p-10 rounded-2xl w-full text-black flex items-center justify-between max-w-2xl mx-auto mt-20 border border-gray-300 shadow-3xl">
            <div className="flex flex-col gap-6">
              <div className="flex">
                <div className="mr-10 ">
                  <span className="text-gray-600 text-2xl font-semibold">
                    Magento Developer
                  </span>
                  <br />
                  <span className="text-gray-600">
                    Required experience – 2 to 4 Years
                  </span>
                </div>
                <div className="">
                  <span className="text-gray-600 text-2xl font-semibold">
                    Position
                  </span>
                  <br />
                  <span className="text-gray-600 p-2">1</span>
                </div>
              </div>

              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="text-white bg-pink hover:bg-gray-50 hover:text-pink px-4 py-2 rounded-lg w-fit  ease duration-300 flex gap-1 items-center group"
              >
                <span>Send CV</span>
                <svg
                  data-v-e660a7a7=""
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className="group-hover:translate-x-1 transition-transform ease duration-200"
                  width="1em"
                  height="1em"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z"
                  ></path>
                </svg>
              </a>
            </div>
            <div></div>
          </div>
        </motion.section>

        <motion.section  variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="px-4">
          <div className="bg-white p-6 sm:p-10 rounded-2xl w-full text-black flex items-center justify-between max-w-2xl mx-auto mt-20 border border-gray-300 shadow-3xl">
            <div className="flex flex-col gap-6">
              <div className="flex">
                <div className="mr-10 ">
                  <span className="text-gray-600 text-2xl font-semibold">
                  Business Development Manager

                  </span>
                  <br />
                  <span className="text-gray-600">
                  Required experience – 4+ Years
                  </span>
                </div>
                <div className="">
                  <span className="text-gray-600 text-2xl font-semibold">
                    Position
                  </span>
                  <br />
                  <span className="text-gray-600 p-2">1</span>
                </div>
              </div>

              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="text-white bg-pink hover:bg-gray-50 hover:text-pink px-4 py-2 rounded-lg w-fit  ease duration-300 flex gap-1 items-center group"
              >
                <span>Send CV</span>
                <svg
                  data-v-e660a7a7=""
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className="group-hover:translate-x-1 transition-transform ease duration-200"
                  width="1em"
                  height="1em"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z"
                  ></path>
                </svg>
              </a>
            </div>
            <div></div>
          </div>
        </motion.section>
      </div>
      <Footer/>
    </div>
  );
}
