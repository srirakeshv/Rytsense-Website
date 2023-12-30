import React, {useState} from 'react'
import {motion} from 'framer-motion'
import {fadeIn} from '../../../../varients'
export default function Technology() {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabIndex) => {
      setActiveTab(tabIndex);
    };
  return (
    <div className="tabs  rounded-xl ml-24 mr-24 mt-20">
      <motion.h2 
  className="font-bold text-2xl md:text-3xl lg:text-3xl text-center mb-6 mt-6 uppercase"
  variants={fadeIn("up", 0.2)}
  initial="hidden"
  whileInView={"show"}
  viewport={{ once: false, amount: 0.5 }}
>
  Technology We Work On
</motion.h2>

      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav
          className="-mb-0.5 flex justify-center space-x-6 pt-10"
          aria-label="Tabs"
          role="tablist"
        >
          <button
            type="button"
            className={`py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 ${
              activeTab === 1
                ? "font-bold text-2xl border-blue-600 text-gray-900"
                : ""
            }`}
            onClick={() => handleTabClick(1)}
            role="tab"
            aria-selected={activeTab === 1 ? "true" : "false"}
            aria-controls="horizontal-alignment-1"
            id="horizontal-alignment-item-1 "
          >
            Mobile
          </button>
          <button
            type="button"
            className={`py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 ${
              activeTab === 2
                ? "font-bold text-2xl border-blue-600 text-gray-900"
                : ""
            }`}
            onClick={() => handleTabClick(2)}
            role="tab"
            aria-selected={activeTab === 2 ? "true" : "false"}
            aria-controls="horizontal-alignment-1"
            id="horizontal-alignment-item-1"
          >
            FrontEnd
          </button>
          <button
            type="button"
            className={`py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 ${
              activeTab === 3
                ? "font-bold text-2xl border-blue-600 text-gray-900"
                : ""
            }`}
            onClick={() => handleTabClick(3)}
            role="tab"
            aria-selected={activeTab === 3 ? "true" : "false"}
            aria-controls="horizontal-alignment-1"
            id="horizontal-alignment-item-1"
          >
            BackEnd
          </button>
          <button
            type="button"
            className={`py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-900 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 ${
              activeTab === 4
                ? "font-bold text-2xl border-blue-600 text-gray-900"
                : ""
            }`}
            onClick={() => handleTabClick(4)}
            role="tab"
            aria-selected={activeTab === 4 ? "true" : "false"}
            aria-controls="horizontal-alignment-1"
            id="horizontal-alignment-item-1"
          >
            CMS
          </button>
        </nav>
      </div>

      <div className="mt-3">
        <div
          id="horizontal-alignment-1"
          role="tabpanel"
          aria-labelledby="horizontal-alignment-item-1"
          style={{ display: activeTab === 1 ? "block" : "none" }}
        >
          <motion.div variants={fadeIn("right",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.5}}  className="flex flex-wrap gap-10 max-w-full place-items-center p-10 justify-center">
             <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\android.png" alt=""
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\ios.png" alt=""
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\flutter.png" alt=""
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\react-native.png"  alt=""
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\kotlin.jfif"  alt=""
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\ionic.png"  alt=""
            />
            


          </motion.div>
          <motion.div variants={fadeIn("right",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.5}}  className="flex flex-wrap gap-10 max-w-full place-items-center p-10 justify-center">
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\swift.png"  alt=""
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\xamarin.png"  alt=""
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\ipad.png"  alt=""
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\windos.png"  alt=""
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\phonegap.png"  alt=""
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\augment-reality.png"  alt=""
            />
          </motion.div>
          <motion.div variants={fadeIn("right",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.5}}  className="flex flex-wrap gap-10 max-w-full place-items-center p-10 justify-center">
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\virtual-reality.jfif"  alt=""
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\beacon.jfif"  alt=""
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\wearabless.webp"  alt=""
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\aperavle-titnum.png"  alt=""
            />
          </motion.div>
        </div>
        <div
          id="horizontal-alignment-1"
          role="tabpanel"
          aria-labelledby="horizontal-alignment-item-1"
          style={{ display: activeTab === 2 ? "block" : "none" }}
        >
          <motion.div variants={fadeIn("right",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.5}}  className="flex flex-wrap gap-10 max-w-full place-items-center p-10 justify-center">
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\senchattouch.jfif" alt=""
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\typescript.png" alt=""
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\javascript.png" alt=""
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\reactjs.png"alt=""
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\golang.jfif" alt=""
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\angularjs.png" alt=""
            />
          </motion.div>
        </div>
        <div
          id="horizontal-alignment-1"
          role="tabpanel"
          aria-labelledby="horizontal-alignment-item-1"
          style={{ display: activeTab === 3 ? "block" : "none" }}
        >
          <motion.div variants={fadeIn("right",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.5}}  className="flex flex-wrap gap-10 max-w-full place-items-center p-10 justify-center">
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\php.png" alt=""
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\yii.png" alt=""
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\cakephp.png" alt=""
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\java.png" alt=""
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\dotnet.jfif" alt=""
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\csharp.png" alt=""
            />
          </motion.div>
          <motion.div variants={fadeIn("right",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.5}}  className="flex flex-wrap gap-10 max-w-full place-items-center p-10 justify-center">
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\rails.png" alt=""
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\codeignter.png" alt=""
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\python.png" alt=""
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\laravel.png" alt=""
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\scala.png" alt=""
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\symfony.png"  alt=""
            />
          </motion.div>
          <motion.div variants={fadeIn("right",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.5}}  className="flex flex-wrap gap-10 max-w-full place-items-center p-10 justify-center">
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\zend.png"  alt=""
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\nodejs.png"  alt=""
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\django.png"  alt=""
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\graphql.png"  alt=""
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\parse.png"  alt=""
            />
          </motion.div>
        </div>
        <div
          id="horizontal-alignment-1"
          role="tabpanel"
          aria-labelledby="horizontal-alignment-item-1"
          style={{ display: activeTab === 4 ? "block" : "none" }} 
        >
          <motion.div variants={fadeIn("right",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.5}}  className="flex flex-wrap gap-10 max-w-full place-items-center p-10 justify-center ">
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\wordpress.png"  alt=""
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\mangeto.png"  alt=""
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\prestashop.png" alt=""
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\joomla.png" alt=""
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\bigcommerce.png" alt=""
            />
          </motion.div>
          <motion.div variants={fadeIn("right",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.5}}  className="flex flex-wrap gap-10 max-w-full place-items-center p-10 justify-center">
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\drupal.png" alt=""
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\virtumart.jfif" alt=""
            />
           
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\cscart.jfif" alt=""
            />
           <img
  className="hover:opacity-75 h-20"
  src="\images\service-img\sitecore.png"
  alt=""
/>


          </motion.div>
        </div>
      </div>
    </div>

  )
}
