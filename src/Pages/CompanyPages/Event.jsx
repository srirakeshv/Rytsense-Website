import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../varients";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import Topbar from "../../components/common/Topbar";
export default function Event() {
  return (
    <div>
      <Topbar/>
      <Header/>
      <div className="text-center p-10">
        <h1 className="text-xl sm:text-xl md:text-2xl lg:text-7xl xl:text-3xl font-bold">
          Events & Conferences
        </h1>
        <span className=" font-semibold">
          Discover The International Events Where We Showcase Our Business.
        </span>
      </div>

      <div className="relative overflow-hidden bg-white">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <motion.div  variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="sm:max-w-lg">
              <h1 className="font text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                Game Connection Europe 2022
              </h1>
              <p className="mt-4  text-gray-500">
                Hosting three Game Connection Online, the Game Connection Europe
                was held in Paris for 2 days this year. Game Connection Europe
                is one of the gaming industry's international events, offering a
                chance for businesses, developers, and investors to connect and
                communicate. Being one of the top game development companies,
                Rytsense Technology would never miss a chance to connect with
                1,500+ senior decision-makers, and 750+ companies from around
                60+ countries. That we got with Game Connection 2022.
              </p>
              <p className="mt-4  text-gray-500">
                The team of Rytsense Technology presented innovative gaming
                solutions enriched and enhanced with the latest technologies and
                trends, such as Metaverse, NFT marketplace and many more with
                higher. We, as the team of Rytsense Technology, are grateful to
                be part of this global technical event where we got a chance to
                enhance our global network by building new connections with
                attendees. The game connection 2022 was one of the glorious
                events of Rytsense Technology that offered lots of
                acknowledgement, outstanding responses and incredible attendee
                visits. We would love to meet you again next year.
              </p>
            </motion.div>
            <div>
              <div className="mt-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <motion.div variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="\images\service-img\event1.jpeg"
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                        <motion.div variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="\images\service-img\event2.jfif"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <motion.div variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="\images\service-img\event3.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                        <motion.div variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="\images\service-img\event4.jfif"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                        <motion.div variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="\images\service-img\event5.jfif"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <motion.div variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="\images\service-img\event6.webp"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                        <motion.div variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="\images\service-img\event7.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-48 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-indigo-700" />

      <div className="relative overflow-hidden bg-white">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <motion.div variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="sm:max-w-lg">
              <h1 className="font text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                GITEX Global 2022
              </h1>
              <p className="mt-4  text-gray-500">
                One of the largest tech events of the year GITEX global 2022
                came to end on the 14th of October 2022. This 5-day tech event
                was held at the Dubai World Trade centre. Not breaking the
                tradition, the team of Rytsense Technology participated in this
                tech event again this year. Along with exhibiting the web and
                app development solutions enriched with Artificial Intelligence,
                Big Data, Blockchain, Cloud, IoT, and AR/VR; this year we
                showcased our expertise in NFT marketplace development and
                Metaverse development as well.
              </p>
              <p className="mt-4  text-gray-500">
                At the GITEX Global 2022, we got a chance to discuss innovative
                ideas and business growth using digital innovation with our
                visitors. The GITEX global 2022 offered the team of Hyperlink
                InfoSystem a chance to discuss the tech revolution, it's future
                and potential opportunities for tech innovation for the world
                tomorrow with global visitors. We are overwhelmed with the
                response and visits we have gotten through the event. If you
                have missed a chance to meet us; we will be glad to see you at
                GITEX Global 2023. Let's meet again.
              </p>
            </motion.div>
            <div>
              <div className="mt-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <motion.div variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="\images\service-img\event1.jpeg"
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                        <motion.div variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="\images\service-img\event2.jfif"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        {/* <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="\images\service-img\event3.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div> */}
                        <motion.div variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="\images\service-img\event4.jfif"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                        <motion.div variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="\images\service-img\event5.jfif"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <motion.div variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="\images\service-img\event6.webp"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                        <motion.div variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="\images\service-img\event7.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-48 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-indigo-700" />

      <div className="relative overflow-hidden bg-white">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <motion.div variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="sm:max-w-lg">
              <h1 className="font text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                CES 2020
              </h1>
              <p className="mt-4  text-gray-500">
                CES 2020 is over! It was one of the biggest tradeshows held in
                Las Vegas, NV between 7th to 10th Jan 2020 attended by
                businesses around the world to showcase the latest tech
                innovations and their business services. For the first time,
                Rytsense Technology participated in this tech event and had an
                amazing response from the visitors, entrepreneurs, and investors
                from different countries. Our team showcased the latest
                technologies and services offered by us like Web, Mobile Apps,
                Artificial Intelligence, IoT, Blockchain, AR/VR and many more.
                With an overwhelming response from the audience, we're excited
                to attend CES 2021. Have a Look at the glimpse of CES 2020!
              </p>
            </motion.div>
            <div>
              <div className="mt-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        {/* <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="\images\service-img\event1.jpeg"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="\images\service-img\event2.jfif"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div> */}
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <motion.div variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="\images\service-img\event3.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                        <motion.div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="\images\service-img\event4.jfif"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          {/* <img
                            src="\images\service-img\event5.jfif"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          /> */}
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <motion.div variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="\images\service-img\event6.webp"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                        <motion.div variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="\images\service-img\event7.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-48 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-indigo-700" />

      <div className="relative overflow-hidden bg-white">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <motion.div variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="sm:max-w-lg">
              <h1 className="font text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                38th GITEX Technology Week 2018
              </h1>
              <p className="mt-4  text-gray-500">
                38th GITEX Technology Week was held from 14th to 18th October
                2018 at Dubai World Trade Centre. Rytsense Technology showcase
                the creative ideas of the latest technologies and most
                innovative products that may change the future of the mobile
                industry. In the 3rd consecutive years, Rytsense Technology
                booked stall at Zabeel Hall 1, Stand C1-20 at Dubai World Trade
                Centre to exhibit our services like mobile app development to
                Blockchain Development, Web Design & Development, AI and many
                more. Excited to be the part of 39th Gitex Technology Week next
                year.
              </p>
            </motion.div>
            <div>
              <div className="mt-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <motion.div variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="\images\service-img\event1.jpeg"
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                        <motion.div variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="\images\service-img\event2.jfif"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <motion.div variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="\images\service-img\event3.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                        <motion.div variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="\images\service-img\event4.jfif"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                        <motion.div variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="\images\service-img\event5.jfif"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-48 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-indigo-700" />

      <div className="relative overflow-hidden bg-white">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <motion.div variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="sm:max-w-lg">
              <h1 className="font text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                MWC Americas 2018
              </h1>
              <p className="mt-4  text-gray-500">
                Mobile World Congress Americas was held on September 12-14, 2018
                at the Los Angeles Convention Center. We showcase our services
                and most innovative products that may change the future of the
                mobile industry. Rytsense Technology booked stand W. 320, West
                Hall and exhibited their services like mobile app development to
                Blockchain, AI and many more. With exceptional experience ending
                with some great discussions at #MWCA2018 Looking forward to be
                at MWC Los Angeles 2019.
              </p>
            </motion.div>
            <div>
              <div className="mt-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <motion.div variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="\images\service-img\event4.jfif"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                        <motion.div variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="\images\service-img\event5.jfif"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <motion.div variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="\images\service-img\event6.webp"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                        <motion.div variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="\images\service-img\event7.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-48 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-indigo-700" />
      <div className="relative overflow-hidden bg-white">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <motion.div variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="sm:max-w-lg">
              <h1 className="font text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                CeBIT 2018
              </h1>
              <p className="mt-4  text-gray-500">
                CeBIT is the largest trade show for IT and digitization, happens
                in Germany every year. This year CeBIT was held from 11th to
                15th June 2018. We participated for the first time to showcase
                an array of technology and the best tailor-made software for
                every budget offered by us. We had a great experience with our
                visitors at stand no.: D29, Hall No: 016.
              </p>
            </motion.div>
            <div>
              <div className="mt-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        {/* <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="\images\service-img\event1.jpeg"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="\images\service-img\event2.jfif"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div> */}
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <motion.div variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="\images\service-img\event3.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                        <motion.div variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="\images\service-img\event4.jfif"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          {/* <img
                            src="\images\service-img\event5.jfif"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          /> */}
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <motion.div variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="\images\service-img\event6.webp"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                        <motion.div variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="\images\service-img\event7.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-48 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-indigo-700" />
      <div className="relative overflow-hidden bg-white">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <motion.div variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="sm:max-w-lg">
              <h1 className="font text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                37th GITEX Technology Week 2017
              </h1>
              <p className="mt-4  text-gray-500">
                37th Gitex Technology Week 2017 was held in Dubai World Trade
                Centre, Dubai, UAE between 8th to 12th October 2017. With an
                overwhelming response from previous year, we booked 2 stands and
                received amazing business opportunities to work with so many new
                clients. We have exhibited our services at Stand MAC6-27 at Hall
                6 and Stand SR-F10 at Sheikh Rashid Hall - India Pavilion.
              </p>
            </motion.div>
            <div>
              <div className="mt-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <motion.div variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="\images\service-img\event1.jpeg"
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                        <motion.div variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="\images\service-img\event2.jfif"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        {/* <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="\images\service-img\event3.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div> */}
                        <motion.div variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="\images\service-img\event4.jfif"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                        <motion.div variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="\images\service-img\event5.jfif"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <motion.div  variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="\images\service-img\event6.webp"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                        <motion.div variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="\images\service-img\event7.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-48 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-indigo-700" />

      <div className="relative overflow-hidden bg-white">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <motion.div variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="sm:max-w-lg">
              <h1 className="font text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                MWC Americas 2017
              </h1>
              <p className="mt-4  text-gray-500">
                First MWC Americas was organized by GSMA in partnership with
                CTIA between 12th to 14th September 2017 in San Francisco. We
                made our debut at MWCA2017 in South Hall, Stall No: S. 2261 and
                S. 2263 and exhibit our app development services with the latest
                technologies. It was amazing opportunity for us to present our
                services in front of such interactive audience.
              </p>
            </motion.div>
            <div>
              <div className="mt-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <motion.div variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="\images\service-img\event4.jfif"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                        <motion.div variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="\images\service-img\event5.jfif"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <motion.div variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="\images\service-img\event6.webp"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                        <motion.div variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="\images\service-img\event7.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-48 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-indigo-700" />
      <div className="relative overflow-hidden bg-white">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <motion.div variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="sm:max-w-lg">
              <h1 className="font text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                36th GITEX Technology Week 2016
              </h1>
              <p className="mt-4  text-gray-500">
                36th Gitex Technology Week 2016 held in Dubai, UAE between 16th
                to 20th October 2016 at Dubai World Trade Centre. So many
                businesses taken part and exhibited the latest technologies like
                AR/VR, Artificial Intelligence, Smart Living, Wearable, Robotics
                and many more. We exhibited our services at stall SR - E9 as a
                top mobile app development company.
              </p>
            </motion.div>
            <div>
              <div className="mt-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <motion.div variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="\images\service-img\event1.jpeg"
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="\images\service-img\event2.jfif"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <motion.div variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="\images\service-img\event3.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                        <motion.div variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="\images\service-img\event4.jfif"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                        <motion.div variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="\images\service-img\event5.jfif"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <motion.div variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="\images\service-img\event6.webp"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                        <motion.div variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="\images\service-img\event7.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
