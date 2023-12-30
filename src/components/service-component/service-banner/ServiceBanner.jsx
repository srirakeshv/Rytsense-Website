import React from 'react';
import {motion} from 'framer-motion'
import {fadeIn} from '../../../varients'



function ServiceBanner() {
  return (

    <div className="min-h-screen flex flex-col p-8 sm:p-16 md:p-24 justify-center bg-white">
 
  <div data-theme="teal" className="mx-auto max-w-6xl">
    <h2 className="sr-only">Featured case study</h2>
    <section className="font-sans text-black">
      <div className="[ lg:flex lg:items-center ] [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ]">
        <motion.div  variants={fadeIn("right",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.5}} className="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
          <div className="h-full">
            <article className="h-full">
              <div className="h-full">
                <img className="h-full object-cover" src='/images/service-img/banner-img.jpg' width="733" height="412" alt='""' typeof="foaf:Image" />
              </div>
            </article>
          </div>
        </motion.div>
        <motion.div variants={fadeIn("left",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.5}} className="p-6 bg-grey">
          <div className="leading-relaxed">
            <h2 className="leading-tight text-4xl font-bold"> Services:  Because We Believe In Delivering Excellence!</h2>
            <p className="mt-4">Our team of skilled professionals is passionate about leveraging the latest advancements in technology to deliver customized solutions that meet the unique needs of our clients.</p>
            <p className="mt-4"> We specialize in crafting custom software solutions that are
                designed to address your specific business requirements. Our
                development process involves in-depth analysis, to ensure that
                the final product aligns perfectly with your vision.</p>
            <p><a className="mt-4 button button--secondary hover:text-pink-700" href="/">Explore</a></p>
          </div>
        </motion.div>
      </div>
    </section>
  </div>
</div>
    
  );
}

export default ServiceBanner;
