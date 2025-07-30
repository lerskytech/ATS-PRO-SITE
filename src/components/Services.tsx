import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';


const services = [
  {
    icon: <img src="/assets/service_icon_1.png" alt="" className="w-10 h-10 mb-4" />,
    title: 'Precision Engineering',
    description: 'Architecting robust, scalable, and secure back-end systems that power the future of your business.',
  },
  {
    icon: <img src="/assets/service_icon_2.png" alt="" className="w-10 h-10 mb-4" />,
    title: 'UI/UX Alchemy',
    description: 'Transforming complex requirements into intuitive, beautiful, and unforgettable user experiences.',
  },
  {
    icon: <img src="/assets/service_icon_3.png" alt="" className="w-10 h-10 mb-4" />,
    title: 'Digital Acceleration',
    description: 'Propelling your brand forward with cutting-edge deployment, optimization, and growth strategies.',
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    },
  };

  return (
    <section ref={ref} className="py-20 px-4 bg-black/50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">Core Services</h2>
        <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">We deliver excellence across the entire digital spectrum, from foundational code to final launch.</p>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-white/5 backdrop-blur-md p-8 rounded-lg border border-white/10 text-left hover:border-cyan-400/50 hover:shadow-[0_0_20px_5px_rgba(0,255,255,0.2)] transition-all duration-300 hover:-translate-y-2"
              variants={itemVariants}
            >
              {service.icon}
              <h3 className="text-2xl font-bold mb-2 text-white">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
