import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../varients";
import Technology from "../../mobile-app/Technology";
import Footer from "../../../../common/Footer";
import Header from "../../../../../components/common/Header"
import Topbar from "../../../../common/Topbar";

export default function DevopsTab() {
 
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
              <span className="block xl:inline">DevOps</span>
              <span className="block text-indigo-600 xl:inline">Company</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              For The Faster, Accurate, and Reliable DevOps Soltuions{" "}
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
              src="\images\service-img\Devops.png"
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
        className="mb-8 border border-gray-300 shadow-2xl rounded-2xl ml-10 mr-10 mt-5"
      >
        <div className="p-10 my-4 mb-4">
          <p className="text-gray-600">
            {" "}
            Dev stands for Software Development, and Ops stands for information
            technology operations. Adopting DevOps aims to reduce the system's
            development life cycle and provide perpetual delivery with
            high-quality software. Moreover, it helps to fix business objectives
            and keep the features and updates frequently in close alignment. It
            helps build cross-functional operations and supports various tools.
            It evolves and enhances products at a quickening speed. The
            organization speed gets better with DevOps software and offers more
            effectively in the market. The DevOps toolchain is a compressive
            tool that improves the system in the development life cycle.
            Modifying the software consumes time because of multiple tools,
            dynamic changes, technologies, practices, etc. The impression is
            larger than other software development. It provides a reliable
            environment with faster collaboration between operations and
            developments.
          </p>
          <p className="text-gray-600 mt-5">
            The use of the software is to develop operation efficiencies by
            evolving every part of the industry's value chain, such as
            manufacturing, logistics, and more. DevOps leverages the embracement
            of monitoring, Automation, collaboration, and cloud. DevOps is known
            for reducing costs and working innovative abilities in the
            acquisition of acknowledgments. The DevOps brings teams together to
            work on optimization and productivity of the development; it brings
            the operation reliability. The software development communicates
            often, improves the service quality, gains facilities, and more to
            the consumers.
          </p>
          <p className="text-gray-600 mt-5">
            It reduces the workload of the organization and fulfills customer's
            needs by solving the issue.Rytsense Technologyused the DevOps model
            and contributed the best development and infrastructure lifecycle.
            Our quality assurance and development teams ensure that the software
            runs with the organization structure and production cycle.
          </p>
        </div>
      </motion.section>

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className=" border border-gray-300 shadow-2xl rounded-2xl ml-30 mr-30 p-16"
      >
        <h1 className="font-bold text-xl text-gray-800 mb-5">
          DevOps Services We Offer:
        </h1>
        <h1 className="font-bold text-xl text-gray-800">
          {" "}
          1) Process Automation
        </h1>
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          DevOps and Automation are two essential components for the
          organization to streamline the development process. The entire
          pipeline process from production to code generation, test cases,
          quality check, unfolds builds, and many more. We provide the most
          emerging process automation for operation and performance.
        </motion.p>
        <h1 className="font-bold text-xl text-gray-800">
          2) Support Monitoring
        </h1>
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          It is vital to monitor the DevOps, especially during the process of
          the operation. We provide the tools where it supports a monitor and
          provides controlling solutions. Rytsense solves the issue before the
          problem occurs and maintains 100% systems performance.
        </motion.p>
        <h1 className="font-bold text-xl text-gray-800">3) Cloud Management</h1>
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          We provide excellent cloud management with the abilities over multiple
          cloud platforms. With software development, we offer long-term
          business success, and it also provides predictable and secure resource
          management. The Cloud Deployment Network, Reporting Cloud Migration
          services, and storage clouding monitoring are the cloud management
          components. Our service will help you to build faster and reliable
          applications.
        </motion.p>
        <h1 className="font-bold text-xl text-gray-800">
          4) Update Pipeline Quality
        </h1>
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          It helps to automate the quality of the pipeline better and ensure the
          test is done at the right stage of the pipeline. Our service offers
          faster, accurate, and updated pipeline quality.
        </motion.p>
        <h1 className="font-bold text-xl text-gray-800">
          5) DevOps Consulting Services
        </h1>
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          One of the frequently applied DevOps services is consulting services.
          It leverages consulting services to upgrade the market of the
          software. The consulting service provides you the appropriate consult
          for the process, development, management, assessment, Automation, and
          many more.
        </motion.p>

        <h1 className="font-bold text-xl text-gray-800">
          6) Initial Framework Creation
        </h1>
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          We help you to integrate your existing tools and leverage the system.
          The framework creation is the robust ecosystem of licensed tools and
          open sources. The initial framework creation follows the process and
          ensures the step is directed rightly.{" "}
        </motion.p>

        <h1 className="font-bold text-xl text-gray-800">
          7) Capacity Management
        </h1>
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          It is similar to other services where the cloud resources ensure that
          business workloads are right-sized and cost-effectively. It is
          essential to know before serving in the business workflow, and we
          offer to serve capacity management that helps control and manage the
          work.{" "}
        </motion.p>

        <h1 className="font-bold text-xl text-gray-800">
          {" "}
          8) Environment Management
        </h1>
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          The environment management services can help you maintain your code,
          run your server and assistance ready for customers and automate
          platforms seamlessly. The management helps to secure the process and
          management of the DevOps.
        </motion.p>

        <h1 className="font-bold text-xl text-gray-800">
          {" "}
          Advantages Of DevOps Solutions
        </h1>
        <p>
          There are several benefits provided by DevOps, and have a look at what
          advantages of DevOps solution offers:
        </p>
        <ul className="list-disc text-gray-800 mt-1 mb-3 ml-10">
          <li>Enhance Productivity</li>
          <li>Resolve problems before they arise</li>
          <li> Process Automation</li>
          <li> Sustain Consistency</li>
          <li>Faster Pace of the Development</li>
          <li>Improve Operating System</li>
          <li>Less Complex</li>
          <li> Cost-Effective</li>
          <li>Reduce time-consumption</li>
          <li> Dynamic Changes</li>
        </ul>
        <h1 className="font-bold text-xl text-gray-800">
          {" "}
          Why Choose Rytsence For DevOps?{" "}
        </h1>
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          Ryte'sence Technology has successfully delivered multiple DevOps
          solutions and services. Our services contain quality and consistency
          for the operation and development system. We provide multiple
          practices, technologies, and unique techniques for DevOps. Rytsense
          concentrates on continuous deployment, integration, process
          improvement, and more. We monitor the work and facilities it to
          optimize all IT operations. Our service carter robust system that
          provides results in real-time, faster, and efficiently.
        </motion.p>

        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          Rytsense Technologydevelopers gain insightful knowledge of DevOps and
          software development. Our versatile technologies help companies to
          save costs and time. Our skilled experts research, practice, and
          implement new solutions and technologies for transforming your
          business. We evolve the DevOps with your business and bring the best
          standard outcomes.
        </motion.p>
        <ul className="list-disc text-gray-800 mt-1 mb-3 ml-10">
          <li>Transparency in the Process</li>
          <li>Excellent Essence</li>
          <li>Integrated Approach</li>
          <li> High-quality Applications</li>
          <li>Diverse Automation</li>
        </ul>
      </motion.div>
     <Technology/>
     <Footer/>
    </div>
  );
}
