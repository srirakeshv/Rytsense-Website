import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../varients";
import Technology from "../../mobile-app/Technology";
import Footer from "../../../../common/Footer";
import Header from "../../../../common/Header"
import Topbar from "../../../../common/Topbar";

export default function IOT_Dashboard() {
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
              <span className="block xl:inline">IOT Dashboard And Analyst</span>
              <span className="block text-indigo-600 xl:inline">Company</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Compelling Your Data With IoT Dashboard And Analytics
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
              src="\images\service-img\iotdash-banner.png"
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
        className="p-10"
      >
        <p className="text-gray-700">
          IoT Dashboards is an appealing way to analyse data with visualisation.
          IoT integrated with embedded analytics on the Dashboard. IoT Dashboard
          and Analytics is quite helpful to visualise data and information with
          charts, graphs, tables, and maps. IoT analytics allows companies to
          extract actionable insights from data produced by the connected
          devices to the IoT cloud. The data is received from IoT devices which
          will appear on the mobile device or computer. Using Machine Learning,
          Artificial Intelligence, and the Internet of Things, users can access
          processes, manage, and monitor. Dashboards enable the control of every
          aspect of connected devices and perspective through the visualisation
          of data devices.
        </p>
      </motion.section>
      <motion.section
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="p-10"
      >
        <p className="text-gray-700">
          Dashboards are easily customised without any disruptions and process
          device data for further process. Every aspect of connected devices,
          complexity, everything has been made simpler with IoT Dashboard and
          Analytics. User interference helps users interact with other connected
          devices, and IoT dashboards are the primary function of IoT platforms.
          IoT Analytics has benefits of IoT insights which help to obtain
          analytics solutions. It is applied with IoT Analytics tools and needs
          to set up the launch, after-launch, and evolution way.
        </p>
      </motion.section>

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className=" rounded-2xl ml-30 mr-30 p-20"
      >
        <h1 className="font-bold text-xl text-gray-800 mb-5">
          Benefits Of Using IoT Dashboard And Analytics:
        </h1>
        <h1 className="font-bold text-xl text-gray-800"> Real-time Data</h1>
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          The IoT Dashboard and Analytics solutions are provided in real-time.
          It helps get quick and efficient data and information, and the
          analytics helps collect relevant information and insights. The
          real-time data enables one to react to occurred developments or
          problems and take real-time decisions.
        </motion.p>
        <h1 className="font-bold text-xl text-gray-800">Powerful Monitoring</h1>
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          The IoT tools provide a powerful monitor which helps to obtain insight
          data. Controlling support to monitor and make necessary changes. The
          technology monitors the inside and outside by using a variety of IoT
          devices and sensors.
        </motion.p>{" "}
        <h1 className="font-bold text-xl text-gray-800">
          Make Complicated Simpler
        </h1>
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          The IoT technology makes things simpler and connected most
          effectively. With any complex issues, IoT Dashboard and Analytics
          helps to unsolve the problem and bring the easiest form of the
          objective. With analysing, track, and report the data to make
          complicated things more manageable.
        </motion.p>{" "}
        <h1 className="font-bold text-xl text-gray-800">
          Unfolds Opportunities
        </h1>
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          The IoT technology and devices uncover several opportunities. With the
          simplest objective, the IoT Dashboards and Analytics brings the data
          to many ways. By classifying the data and analysis, the Dashboard
          shows how the data is used appropriately.
        </motion.p>{" "}
        <h1 className="font-bold text-xl text-gray-800">Notify Trends</h1>
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          The IoT Analytics and Dashboard notify about the latest trends in the
          market. Moreover, it helps to run and create new trends for the
          industry. The trends will help the company to sustain itself in the
          present market and operate the business efficiently.
        </motion.p>
      </motion.div>
      <motion.section
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="p-2 ml-10"
      >
        {" "}
        <h1 className="font-bold text-xl text-gray-800">
          Why Choose Rytsense Technology For IoT Dashboards And Analytics?
        </h1>
        <p className="text-gray-700">
          The skilled team ofRytsense Technology helps to customise dashboards
          and make them to the top. They ensure that the user can operate it
          without any flaws or disruption in the IoT processor device. We gather
          tons of data from the device within a minute and manage the data in
          IoT Analytics. Meanwhile, allow IoT dashboards to access with a simple
          URL through any standard browser globally. Our proficient developers
          with insight knowledge help to visualise the data with efficiency and
          make the process effortless.Rytsense Technology is always there to
          solve queries or complexity and help to accomplish the client's goal.
        </p>
      </motion.section>
      <Technology />
      <Footer/>
    </div>
  );
}
