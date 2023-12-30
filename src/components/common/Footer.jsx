import React from 'react'
import {motion} from 'framer-motion'
import {fadeIn} from '../../varients'
import { Link } from 'react-router-dom'
export default function Footer() {

  return (

    <motion.footer variants={fadeIn("up",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.5}}
      className="flex flex-col items-center bg-neutral-900 text-center text-white mb-10">
      <div className="container px-6 pt-6">
     
        <motion.div variants={fadeIn("up",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.5}} className="mb-6 flex justify-center">
          <Link
            href="#!"
            type="button"
            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
            data-te-ripple-init
            data-te-ripple-color="light">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-full w-4"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </Link>
          <Link
            href="#!"
            type="button"
            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
            data-te-ripple-init
            data-te-ripple-color="light">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-full w-4"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </Link>
    
          <Link
            href="#!"
            type="button"
            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
            data-te-ripple-init
            data-te-ripple-color="light">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-full w-4"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                fill-rule="evenodd"
                clip-rule="evenodd" />
            </svg>
          </Link>
    
          <Link
            href="#!"
            type="button"
            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
            data-te-ripple-init
            data-te-ripple-color="light">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-full w-4"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </Link>
    
          <Link
            href="#!"
            type="button"
            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
            data-te-ripple-init
            data-te-ripple-color="light">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-full w-4"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </Link>
    
          <Link
            href="#!"
            type="button"
            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
            data-te-ripple-init
            data-te-ripple-color="light">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-full w-4"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </Link>
        </motion.div>
    
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 text-left p-5">
          <motion.div  variants={fadeIn("left",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.5}} className="mb-6">
            <h5 className="mb-2.5 text-2xl font-bold uppercase">  About</h5>
    
            <ul className="mb-0 list-none">
            <li>
            <Link to="/who-we-are"  className="  dark:text-neutral-200  hover:text-rose-500">Who We Are</Link >
          </li>
          <li>
           <Link to="/career"  className="  dark:text-neutral-200  hover:text-rose-500">Career</Link >
          </li>
          <li>
           <Link to="/event"  className="  dark:text-neutral-200  hover:text-rose-500">Events</Link>
          </li>
          <li>
           <Link to="/services"  className="  dark:text-neutral-200  hover:text-rose-500">Services</Link>
          </li>
          <li>
           <Link to="#!"  className="  dark:text-neutral-200  hover:text-rose-500">Industries</Link>
          </li>
          <li>
           <Link to="#!"  className="  dark:text-neutral-200  hover:text-rose-500">Case Study</Link>
          </li>
          <li>
           <Link to="/services"  className="  dark:text-neutral-200  hover:text-rose-500">Services</Link>
          </li> 
          <li>
           <Link to="#!"  className="  dark:text-neutral-200  hover:text-rose-500">Porfolio</Link>
          </li>
          <li>
           <Link to="#!"  className="  dark:text-neutral-200  hover:text-rose-500">Sitemap</Link>
          </li>
          <li>
           <Link to="#!"  className="  dark:text-neutral-200  hover:text-rose-500">Contact US</Link >
          </li>
            </ul>
          </motion.div>
    
          <motion.div variants={fadeIn("left",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.5}} className="mb-6"> 
             <h5 className="mb-2.5 text-2xl font-bold uppercase"> Mobile</h5>
    
            <ul className="mb-0 list-none">
            <li>
           <Link to="/android"  className="  dark:text-neutral-200  hover:text-rose-500">Android Apps</Link>
          </li>
          <li>
           <Link to="/iphone"  className="  dark:text-neutral-200  hover:text-rose-500">iPhone Apps</Link>
          </li>
          <li>
           <Link to="/hybrid"  className="  dark:text-neutral-200  hover:text-rose-500">Hybrid Apps</Link>
          </li>
          <li>
           <Link to="/flutter"  className="  dark:text-neutral-200  hover:text-rose-500" >Flutter</Link>
          </li>
          <li>
           <Link to="/reactnative"  className="  dark:text-neutral-200  hover:text-rose-500">React Native</Link>
          </li>
          <li>
           <Link to="/kotlin"  className="  dark:text-neutral-200  hover:text-rose-500">Kotlin</Link>
          </li>
          <li>
           <Link to="/ionic"  className="  dark:text-neutral-200  hover:text-rose-500">Ionic</Link>
          </li>
          <li>
           <Link to="/swift"  className="  dark:text-neutral-200  hover:text-rose-500">Swift</Link>
          </li>
          <li>
           <Link to="/xamarin"  className="  dark:text-neutral-200  hover:text-rose-500">Xamrin</Link>
          </li>
            </ul>
          </motion.div>
    
          <motion.div variants={fadeIn("left",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.5}} className="mb-6">
             <h5 className="mb-2.5 text-2xl font-bold uppercase">Web</h5>
    
            <ul className="mb-0 list-none">
            <li>
           <Link to="/php"  className="  dark:text-neutral-200  hover:text-rose-500">PHP</Link>
          </li>
          <li>
           <Link to=""  className="  dark:text-neutral-200  hover:text-rose-500" >Java</Link>
          </li>
          <li>
           <Link to="/python"  className="  dark:text-neutral-200  hover:text-rose-500">Python</Link>
          </li>
          <li>
           <Link to="/wordpress"  className="  dark:text-neutral-200  hover:text-rose-500">Wordpress</Link >
          </li>
          <li>
           <Link to="/drupal"  className="  dark:text-neutral-200  hover:text-rose-500">Drupal</Link>
          </li>
          <li>
           <Link to="/laravel"  className="  dark:text-neutral-200  hover:text-rose-50" >Laravel</Link>
          </li>
          <li>
           <Link to="/codeigniter"  className="  dark:text-neutral-200  hover:text-rose-500">CodeIgniter</Link>
          </li>
          <li>
           <Link to="/cakephp"  className="  dark:text-neutral-200  hover:text-rose-500">CakesPHP</Link >
          </li>
          <li>
           <Link to="/typescript"  className="  dark:text-neutral-200  hover:text-rose-500">TypeScript</Link>
          </li>
            </ul>
          </motion.div>
    
          <motion.div variants={fadeIn("left",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.5}} className="mb-6">
             <h5 className="mb-2.5 text-2xl font-bold uppercase">Ecommerce</h5>
    
            <ul className="mb-0 list-none">
            <li>
           <Link to="/mangeto"  className="  dark:text-neutral-200  hover:text-rose-500">Magento</Link>
          </li>
          <li>
           <Link to="/shopify"  className="  dark:text-neutral-200  hover:text-rose-500">Shopify</Link>
          </li>
          <li>
           <Link to="/ubercart"  className="  dark:text-neutral-200  hover:text-rose-500">Ubercart</Link>
          </li>
          <li>
           <Link to="/prestashop"  className="  dark:text-neutral-200  hover:text-rose-500" >Prestashop</Link >
          </li>
          <li>
           <Link to="/cscart"  className="  dark:text-neutral-200  hover:text-rose-500" >CS Cart</Link>
          </li>
          <li>
           <Link to="/virtumart"  className="  dark:text-neutral-200  hover:text-rose-500">VirtueMart</Link>
          </li>
          <li>
           <Link to="/bigcommerce"  className="  dark:text-neutral-200  hover:text-rose-500">BigCommerce</Link>
          </li>
          <li>
           <Link to="/woo"  className="  dark:text-neutral-200  hover:text-rose-500">WooCommerce</Link>
          </li>
            </ul>
          </motion.div>
           
          <motion.div variants={fadeIn("right",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.5}} className="mb-6">
             <h5 className="mb-2.5 text-2xl font-bold uppercase">AI & ML</h5>
    
            <ul className="mb-0 list-none">
            <li>
           <Link to="/texttospeech"  className="  dark:text-neutral-200  hover:text-rose-500" >Text to Speech</Link >
          </li>
          <li>
           <Link to="/intelligence"  className="  dark:text-neutral-200  hover:text-rose-500">Business Intelligence</Link>
          </li>
          <li>
           <Link to="/forcasting"  className="  dark:text-neutral-200  hover:text-rose-500">Data Forecasting</Link>
          </li>
          <li>
           <Link to="/natural"  className="  dark:text-neutral-200  hover:text-rose-500">Natural LAnguage Processing</Link>
          </li>
          <li>
           <Link to="/data-analytics"  className="  dark:text-neutral-200  hover:text-rose-500">Data Analytics</Link>
          </li>
          <li>
           <Link to="/objectreco"  className="  dark:text-neutral-200  hover:text-rose-500">Object Recognition</Link>
          </li>
          <li>
           <Link to="/senti-analysis"  className="  dark:text-neutral-200  hover:text-rose-500">Semitimental Analysis</Link >
          </li>
          <li>
           <Link to="/alexa-skill"  className="  dark:text-neutral-200  hover:text-rose-500">Alexa SKill Development</Link >
          </li>

            </ul>
          </motion.div> 

          <motion.div variants={fadeIn("right",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.5}} className="mb-6">
             <h5 className="mb-2.5 text-2xl font-bold uppercase">IOT & Embedded</h5>
    
            <ul className="mb-0 list-none">
            <li>
           <Link to="/iotapp"  className="  dark:text-neutral-200  hover:text-rose-500" >IOT App</Link>
          </li>
          <li>
           <Link to="/embedded"  className="  dark:text-neutral-200  hover:text-rose-500">Embedded Software</Link >
          </li>
          <li>
           <Link to="/hardware"  className="  dark:text-neutral-200  hover:text-rose-500">IOT Hardware Prototyping</Link >
          </li>
          <li>
           <Link to="/dashboard"  className="  dark:text-neutral-200  hover:text-rose-500">IOT Dashboard and Analytics</Link>
          </li>
          <li>
           <Link to="/smarthome"  className="  dark:text-neutral-200  hover:text-rose-500">Smart Home -Home Automation</Link >
          </li>
            </ul>
          </motion.div>

          <motion.div  variants={fadeIn("right",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.5}}className="mb-6">
             <h5 className="mb-2.5 text-2xl font-bold uppercase">Blockchain</h5>
    
            <ul className="mb-0 list-none">
            <li>
           <Link to="/wallet"  className="  dark:text-neutral-200  hover:text-rose-500">Wallet</Link>
          </li>
          <li>
           <Link to="/exchnage"  className="  dark:text-neutral-200  hover:text-rose-500">Exchange</Link>
          </li>
          <li>
           <Link to="/etherum"  className="  dark:text-neutral-200  hover:text-rose-500">Ethereum </Link>
          </li>
          <li>
           <Link to="/hyperledger"  className="  dark:text-neutral-200  hover:text-rose-500">HyperLedger</Link >
          </li>
          <li>
           <Link to="/smart"  className="  dark:text-neutral-200  hover:text-rose-500">Smart Contracts</Link >
          </li>
          <li>
           <Link to="/private"  className="  dark:text-neutral-200  hover:text-rose-500">Private Blockchains</Link>
          </li>
          <li>
           <Link to="/nft"  className="  dark:text-neutral-200  hover:text-rose-500">NFT Marketplace</Link>
          </li>
            </ul>
          </motion.div>
          <motion.div variants={fadeIn("right",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.5}} className="mb-6">
             <h5 className="mb-2.5 text-2xl font-bold uppercase">Games</h5>
    
            <ul className="mb-0 list-none">
            <li>
           <Link to="/unity"  className=" dark:text-neutral-200  hover:text-rose-500">Unity 3D</Link>
          </li>
          <li>
           <Link to="/unreal"  className="  dark:text-neutral-200  hover:text-rose-500">Unreal Engine</Link >
          </li>
          <li>
           <Link to="/agumented"  className="  dark:text-neutral-200  hover:text-rose-500">Augmented Reality</Link>
          </li>
          <li>
           <Link to="/virtual"  className="  dark:text-neutral-200  hover:text-rose-500">Virtual Reality</Link>
          </li>
          <li>
           <Link to="/casual"  className="  dark:text-neutral-200  hover:text-rose-500">Casual Games</Link>
          </li>
          <li>
           <Link to="/virtual"  className="  dark:text-neutral-200  hover:text-rose-500" >Virtual Reality</Link >
          </li>
            </ul>
          </motion.div>
        </div>
      </div>
    
      
     <motion.div variants={fadeIn("up",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.5}} className="flex flex-col ml-20 p-5">
  <h6 className="mb-4 flex justify-start font-bold uppercase text-2xl ml-5">
    Locate US
  </h6>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
 <div className="mb-4 flex items-center justify-start md:justify-center text-left">     <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5">
            <path
              d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path
              d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>
      India - first floor, SM tower, Perungudi, OMR Chennai , Tamil Nadu 600096
    </div>
 <div className="mb-4 flex items-center justify-start md:justify-center text-left">      <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5">
            <path
              d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path
              d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>
      USA -334 Pioneer way, Mountain View, California 94041, USA
    </div>
 <div className="mb-4 flex items-center justify-start md:justify-center text-left">      <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5">
            <path
              d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path
              d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>
      Australia- 4 Matisse street Cranbourne West Vic 3977
    </div>
 <div className="mb-4 flex items-center justify-start md:justify-center text-left">      <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5">
            <path
              d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path
              d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>
      Uk address - 338A, Kingston Road,Wimbledon, London SW20 8LR
    </div>
  </div>
</motion.div>




     <div className="flex justify-start items-center mb-10">
  <div>
    <img src='images/service-img/ryt-logo.png' alt="Logo" className="h-10 pr-5" />
  </div>
  <div className="text-right">
    <p className="text-white">
      © 2023 Copyright :
      <a href="/" className="text-white"> rytsense</a>
    </p>
  </div>
</div>

    </motion.footer>      
  )
}
