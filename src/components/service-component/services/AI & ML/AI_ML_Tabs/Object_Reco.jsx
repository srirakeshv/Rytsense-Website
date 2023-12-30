import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../varients";
import Footer from "../../../../common/Footer";
import Header from "../../../../../components/common/Header"
import Topbar from "../../../../common/Topbar";

export default function Object_Reco() {
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
                Machine Learning Development
              </span>
              <span className="block text-indigo-600 xl:inline">Company</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              To Identify And Determine Purpose For Particular Objects
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
              src="\images\service-img\AI_MLTab.png"
              alt=""
            />
          </motion.div>
        </div>
      </section>
      <motion.section
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="mb-8 border border-gray-300 shadow-2xl rounded-2xl ml-10 mr-10"
      >
        <div className="p-10 my-4 mb-4">
          <h1 className="font-bold text-xl text-gray-800 ">
            What Is Object Recognition?
          </h1>
          <p className="text-gray-600 p-5">
            {" "}
            It is a computer vision technique to detect and identify objects in
            images and video. It is a method driven by Artificial Intelligence
            and Machine learning. Facial practices like image, video, and other
            minor things are detected with object recognition. Through computer
            vision techniques, you can perform analytics.
          </p>
          <p className="text-gray-600 pt-5">
            For instance, while watching a movie, you can identify objects,
            visuals, scenes, people, and many more details with object
            recognition. The foremost is that it gives you instant access in
            real-time. It empowers you to locate, identify, track, and determine
            the objects in that particular image or scene. The algorithm labels
            them and provides a robust solution of APIs to serve you specific
            tagging, categorization, and much more.
          </p>
        </div>
      </motion.section>

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className=" border border-gray-300 shadow-2xl rounded-2xl ml-10 mr-10 p-16"
      >
        <h1 className="font-bold text-xl text-gray-800">
          Advantages Of Object Recognition:
        </h1>

        <h1 className="font-bold text-xl text-gray-800">
          {" "}
          Custom Object Detection
        </h1>
        <p className=" text-gray-800 mt-1 mb-3">
          Every object is detected, and later you can custom object. By this
          detection, the visual can be detected and defined, giving more
          personalized and custom purposes.
        </p>

        <h1 className="font-bold text-xl text-gray-800">
          {" "}
          Facial Search Capabilities
        </h1>
        <p className=" text-gray-800 mt-1 mb-3">
          The facial search capabilities make the work sleek and
          straightforward. The ability to find a search on the facial expression
          or look has made objection reorganization dynamic.
        </p>

        <h1 className="font-bold text-xl text-gray-800"> User Verification</h1>
        <p className=" text-gray-800 mt-1 mb-3">
          Suppose someone is looking for minor details for verification. In that
          case, object recognition makes it more accessible, and it makes
          everything on the spot and helps save time on the long going process.
        </p>

        <h1 className="font-bold text-xl text-gray-800"> Personalization</h1>
        <p className=" text-gray-800 mt-1 mb-3">
          Object Recognition provides personalization in facial practices like
          image, video, and much more. It lets users/customers search instantly
          based on the visual.
        </p>

        <h1 className="font-bold text-xl text-gray-800">
          {" "}
          Highly Reliable Resource
        </h1>
        <p className=" text-gray-800 mt-1 mb-3">
          It is a highly reliable resource because whatever object is recognized
          can be verified. The software helps you to cross-check and only go
          further with permission. If it is not the same, then it can be
          modified in real-time.
        </p>

        <h1 className="font-bold text-xl text-gray-800">
          {" "}
          Simpler And Faster Process
        </h1>
        <p className=" text-gray-800 mt-1 mb-3">
          To perform Object Recognition does not take much time and provides
          efficient results. It is a simple and faster process, and most of all,
          it is done in real-time. The service takes less effort and brings a
          quick, accurate outcome.
        </p>
        <p className=" text-gray-800 mt-1 mb-3">
          These are the benefits you can obtain from Object Recognition. It is
          an instant process that makes the workflow way easier and manageable.
          Even though analysis is a time-consuming process, object recognition
          supports reducing the time. Object recognition can be applied in the
          text as well. The computer vision technique is pretty scalable and
          impacts the collection of data. If the content or image is
          inappropriate, it will identify and notify the respective user. The
          foremost thing about object recognition is that it locates the object
          present in the photograph, video, or text. Moreover, in a single
          frame, they can locate and recognize multiple objects.
        </p>

        <h1 className="font-bold text-xl text-gray-800">
          {" "}
          Technologies We Used for Object Recognition:
        </h1>
        <ul className="list-disc text-gray-800 mt-1 mb-3 ml-10">
          <li>Machine Learning</li>
          <li>Image Sensing</li>
          <li> LiDar</li>
          <li> 3D Modelling</li>
          <li>3D Scanning</li>
        </ul>

        <h1 className="font-bold text-xl text-gray-800">
          {" "}
          Why Rytsense Technology For Object Recognition?
        </h1>
        <ul className="list-disc text-gray-800 mt-1 mb-3 ml-10">
          <li>High-Quality App at a competitive cost</li>
          <li>Error-free sprints</li>
          <li> The flexible and quick development aspect</li>
          <li> Focus on accomplishing the client's goal</li>
          <li> Secured</li>
        </ul>

        <p className="text-gray-600 p-5">
          {" "}
          Rytsense Technology supports you to identify and analyze multiple
          images and videos in a minute. Our experienced team has expertise in
          the domain field and can enhance business with object recognition
          activities in real-time. The AI and ML algorithms reviewed multiple
          and repetitive tasks. Our company creates a unique and effective
          object recognition app and transforms your business to import digital
          recognition needs. The fully managed service that scales up
          automatically and reduces the cost by enhancing your business. Our
          qualified developers create scalable, reliable, secure, analyze, and
          power more computer vision. When you choose to work with us, a part of
          our team thoroughly dedicates themselves to your business, taking care
          of all your technical requirements! Ready to partner with our expert
          object recognition developer? Contact the Rytsense Technology team
          today to get started.
        </p>
      </motion.div>
      <Footer/>
    </div>
  );
}
