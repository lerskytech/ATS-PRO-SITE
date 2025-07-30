import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const draw: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: 'spring', duration: 2, bounce: 0 },
        opacity: { duration: 0.01 },
      },
    },
  };

  return (
    <section ref={ref} className="py-20 px-4 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">The Alchemy</h2>
        <p className="text-lg text-gray-300 mb-12">Our process is a fusion of strategy, design, and technology.</p>
        
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Left Image */}
          <motion.div 
            className="w-full md:w-1/3" 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src="/assets/process_image_1.png" alt="Digital Transformation" className="rounded-lg shadow-lg aspect-[3/2] object-cover" />
          </motion.div>

          {/* SVG Path - Hidden on small screens */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full hidden md:block">
            <motion.svg width="100%" height="100%" viewBox="0 0 500 200">
              <motion.path
                d="M 100,100 C 200,0 300,200 400,100"
                stroke="#00ffff"
                strokeWidth="2"
                fill="transparent"
                variants={draw}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              />
            </motion.svg>
          </div>

          {/* Right Image */}
          <motion.div 
            className="w-full md:w-1/3" 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img src="/assets/process_image_2.png" alt="Blueprint to Success" className="rounded-lg shadow-lg aspect-[2/3] object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Process;
