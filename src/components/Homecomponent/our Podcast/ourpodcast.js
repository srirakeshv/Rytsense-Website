import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../varients";
import { useNavigate } from "react-router-dom";
import { resourcesarray } from "../../../resourcesarray";
import { resourcepodcastarray } from "../../../resourcepodcastarray";

const OurPodcast = () => {
  const navigate = useNavigate();
  const nav = resourcesarray[6].boxarray[2].nav;
  const nav2 = resourcesarray[6].boxarray[3].nav;
  const nav3 = resourcesarray[6].boxarray[4].nav;
  const nav4 = resourcesarray[6].topic;
  return (
    <div>
      <div className="max-w-7xl p-5 mx-auto flex flex-col gap-4">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-col gap-4"
        >
          <div className="relative">
            <h1 className="mt-7 text-3xl font-bold sm:text-5xl sm:mt-10">
              Our Podcast
            </h1>
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
              Studies
            </h1>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <p className="flex-1 text-lg sm:text-lg">
              Listen Technology Based Podcast Hosted By Rytsense Technology
            </p>

            <div
              className="self-start flex gap-2 p-4 ml-0 text-white sm:ml-auto"
              style={{ backgroundColor: "#3D5AA4" }}
            >
              <button
                onClick={() =>
                  navigate(`/resources/${nav4}`, {
                    state: {
                      navbar: resourcesarray[6].navbar,
                      heading: resourcesarray[6].heading,
                      bgtext: resourcesarray[6].bgtext,
                      boxarray: resourcesarray[6].boxarray,
                      podcast: resourcesarray[6].podcast,
                      blogs: resourcesarray[6].blogs,
                      simage: resourcesarray[6].simage,
                      passage2: resourcesarray[6].passage2,
                    },
                  })
                }
              >
                View all
              </button>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="flex gap-5 flex-wrap">
          <div
            className="grow basis-60 h-96 p-4 shadow-lg rounded-xl flex flex-col justify-between bg-cover bg-center"
            style={{
              backgroundImage:
                'url("/images/homepageimages/blockchain-3055701_1280.jpg")',
              backgroundSize: "100% 100%",
            }}
          >
            <h1 className="text-xl text-white font-semibold">Block Chain</h1>
            <div className="flex flex-col gap-3">
              <h1 className="text-white font-semibold text-xl">
                Is BlockChain Technology Worth The H ...
              </h1>
              <p className="text-white font-semibold">
                Unfolds The Revolutionary & Versatility Of Blockchain Technology
                ...{" "}
              </p>
              <div className="flex justify-between">
                <button>
                  <img src="/images/play-button (1).png" alt="icon"></img>
                </button>
                <div
                  className="flex gap-2 p-4 text-white"
                  style={{ backgroundColor: "#3D5AA4" }}
                  onClick={() =>
                    navigate(`/podcast/${nav}`, {
                      state: {
                        title: resourcepodcastarray[1].title,
                        title1: resourcepodcastarray[1].title1,
                        array: resourcepodcastarray[1].array,
                        image: resourcepodcastarray[1].image,
                        heading: resourcepodcastarray[1].heading,
                      },
                    })
                  }
                >
                  <button>Learn more</button>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="grow basis-60 h-96 p-4 shadow-lg rounded-xl flex flex-col justify-between bg-cover bg-center"
            style={{
              backgroundImage:
                'url("/images/homepageimages/pexels-jakub-zerdzicki-16859997.jpg")',
              backgroundSize: "100% 100%",
            }}
          >
            <h1 className="text-xl text-white font-semibold">IoT</h1>
            <div className="flex flex-col gap-3">
              <h1 className="text-white font-semibold text-xl">
                IoT Technology - A Future In Making ...
              </h1>
              <p className="text-white font-semibold">
                Everything You Need To Know About IoT Technology ...{" "}
              </p>
              <div className="flex justify-between">
                <button>
                  <img src="/images/play-button (1).png" alt="icon"></img>
                </button>
                <div
                  className="flex gap-2 p-4 text-white"
                  style={{ backgroundColor: "#3D5AA4" }}
                  onClick={() =>
                    navigate(`/podcast/${nav2}`, {
                      state: {
                        title: resourcepodcastarray[2].title,
                        title1: resourcepodcastarray[2].title1,
                        array: resourcepodcastarray[2].array,
                        image: resourcepodcastarray[2].image,
                        heading: resourcepodcastarray[2].heading,
                      },
                    })
                  }
                >
                  <button>Learn more</button>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="grow basis-60 h-96 p-4 shadow-lg rounded-xl flex flex-col justify-between bg-cover bg-center"
            style={{
              backgroundImage:
                'url("/images/homepageimages/mobile-app-development-company-8379091_1280.png")',
              backgroundSize: "100% 100%",
            }}
          >
            <h1 className="text-xl text-white font-semibold">Mobile Apps</h1>
            <div className="flex flex-col gap-3">
              <h1 className="text-white font-semibold text-xl">
                Flutter Vs. React Native - Choose Be ...
              </h1>
              <p className="text-white font-semibold">
                Unfolding The Confusion Of Which One Is Better ...{" "}
              </p>
              <div className="flex justify-between">
                <button>
                  <img src="/images/play-button (1).png" alt="icon"></img>
                </button>
                <div
                  className="flex gap-2 p-4 text-white"
                  style={{ backgroundColor: "#3D5AA4" }}
                  onClick={() =>
                    navigate(`/podcast/${nav3}`, {
                      state: {
                        title: resourcepodcastarray[4].title,
                        title1: resourcepodcastarray[4].title1,
                        array: resourcepodcastarray[4].array,
                        image: resourcepodcastarray[4].image,
                        heading: resourcepodcastarray[4].heading,
                      },
                    })
                  }
                >
                  <button>Learn more</button>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="grow basis-60 h-96 p-4 shadow-lg rounded-xl flex flex-col justify-between bg-cover bg-center"
            style={{ backgroundImage: 'url("/images/mobile pod.jpeg")' }}
          >
            <h1 className="text-xl text-white font-semibold">About Us</h1>
            <div className="flex flex-col gap-3">
              <p className="text-white font-semibold">
                asvjhsdjbdashdgu abshdbhjsdbhdbas jgdsadash dgvasghdvaj{" "}
              </p>
              <div className="flex justify-between">
                <button>
                  <img src="/images/play-button (1).png" alt="icon"></img>
                </button>

                <div className="flex gap-2 bg-indigo-800 p-4 text-white">
                  <button>Learn more</button>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div> */}
        </div>
      </div>
    </div>
  );
};

export default OurPodcast;
