import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../varients";
import Technology from "../../mobile-app/Technology";
import Footer from "../../../../common/Footer";
import Header from "../../../../common/Header"
import Topbar from "../../../../common/Topbar";

export default function IOT_App() {
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
              <span className="block xl:inline">IOT App Development</span>
              <span className="block text-indigo-600 xl:inline">Company</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Connect Smart IoT Apps With Rytsense Technology


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
              src="\images\service-img\IOTTab.png"
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
          The Internet of Things is an emerging technology. IoT has transformed
          and evolves business in every way. And the future of IoT is bright
          because of IoT applications. The IoT is a source of connection of
          objects and networks through the Internet. IoT applications function
          on IoT devices and are created for the specific to nearly every
          industry and all. IoT applications are utilizing Machine Learning and
          Artificial Intelligence to add smart devices. Wearable, smart
          automation, and all are part of IoT applications.{" "}
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
          The IoT applications help to make the task easier and make your work
          simpler and faster. The IoT applications require multiple technologies
          because almost every technology can provide appropriate information
          regarding its operation. The performance of an activity and situation
          differs from the control and monitor of the Internet of Things. There
          are multiple usages for IoT applications, and they can apply to
          various aspects.{" "}
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
          The IoT applications reshape entire industries and increase business
          value. The internal operations and customer experiences are enhanced
          with new digitalization. The applications make machines and networks
          smart enough to decrease human workload. The inter-connected devices
          help to share relevant information, and cloud-based applications
          provide assistance to it. IoT applications use several ways to help
          businesses automate, simplify, improve, and more. The IoT applications
          drive new business models and enhance revenue streams. The IoT
          applications provide improvement in businesses in real-time and help
          to develop services and products.{" "}
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
          Different Types Of IoT Applications:
        </h1>
        <h1 className="font-bold text-xl text-gray-800">
          {" "}
          1) Business Purpose
        </h1>
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          IoT technology provides various business purposes for multi-device.
          The services use their device IoT software to receive notification
          about the service, even if it alerts about changes and action that
          needs to be taken care of. While applying IoT applications for
          business purposes helps to reduce development costs and enhance
          services. IoT makes it easy to manage multiple data altogether and
          provides sensors that make the work more efficient. The automation
          improves the business purpose, and IoT applications become useful for
          the companies.{" "}
        </motion.p>
        <h1 className="font-bold text-xl text-gray-800">2) Smart City</h1>
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          Smart City is the upcoming future, which we all are going to witness
          soon. A smart city is operated with IoT, and hence the demand for this
          IoT application is accelerating. There are various use cases of smart
          cities, such as water distribution, traffic management, urban
          security, waste management, etc. Several people and businesses are
          planning to adopt it because of its excellent services. The smart city
          provides a smart solution to daily life activity, and it decreases
          pollution and makes a city a better place.{" "}
        </motion.p>
        <h1 className="font-bold text-xl text-gray-800">
          3) Industrial Internet
        </h1>
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          One of the most used Internet of Things applications is Industrial
          Internet. It might not be that known among people, but it will provide
          splendid opportunities in the future. The industrial Internet of
          things (IIoT) uses smart sensors and actuators to improve production
          and industrial processes. The industrial Internet has a wider concept
          with profitable potential.{" "}
        </motion.p>
        <h1 className="font-bold text-xl text-gray-800">4) Smart Home</h1>
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          The most used and famous IoT application is Smart Home. The smart home
          is an application that enables house owners to control and manage the
          home through devices and the Internet. The system is operated through
          a tablet, smartphone, or any Internet-connected device. The Smart Home
          is quite convenient for the house owners and helps them to save money.
          The IoT application is given instruction, and it could be a voice
          control also. It reduces the workload for the owners and helps to make
          work faster and sleek.
        </motion.p>
        <h1 className="font-bold text-xl text-gray-800">5) Health Care</h1>
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          IoT HealthCare applications are a blessing in disguise. The IoT
          applications help medical reports, machines to function better and
          show accuracy. The rate of accuracy has increased due to IoT
          HealthCare applications. The application requires an expert, but it
          has made medical research more efficient. It provides information or
          data in real-time, and there is plenty of medical usage in these IoT
          applications. It is quite valuable to analyze and experiment with. It
          has an increase in the amount of wellness and enhances the devices.
          The IoT encourages devices to be in power and helps you to improve the
          current system. Rytsense Technology provides the IoT as mentioned
          earlier applications and more. We offer excellent IoT apps that
          maintain workflow and efficiency.{" "}
        </motion.p>
      </motion.div>
      <motion.section
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="p-2 ml-10"
      >
        <p className="text-gray-700">
          Our IoT developers offer the best IoT solution and services that makes
          us the top IoT development company. With the powerful insight, we help
          to enhance technology and offer technology implementation at the
          appropriate place. Rytsense Technology is popular for providing
          extraordinary quality in the IoT applications. We tend to be known for
          making work easy and efficient for businesses. Our IoT remains updated
          with the latest technology and tools, and interest in learning new
          updates. The keen interest and brilliant performance stand them apart
          from others.{" "}
        </p>
      </motion.section>
      <motion.section
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="p-2 ml-10"
      >
        <p className="text-gray-700">
          Rytsense Technology offers IoT applications for multiple industries
          and different usage. The company deliver applications on time and
          maintain the transparency in the process. We interact and communicate
          with our clients to match and fulfill their business needs.
        </p>
      </motion.section>
      <motion.section
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="p-2 ml-10"
      >
        <p className="text-gray-700">
          Contact Us and Find Out How We Provide Best IoT applications.{" "}
        </p>
      </motion.section>
      <Technology />
      <Footer/>
    </div>
  );
}
