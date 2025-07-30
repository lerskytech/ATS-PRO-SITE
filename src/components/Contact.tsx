import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const formVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 }
    }
  };

  const fieldVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section ref={ref} className="py-20 px-4 bg-black/50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">Start Your Legacy</h2>
        <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">Ready to transform your vision into a digital landmark? Reach out and let's build the future together.</p>

        <motion.form 
          className="max-w-xl mx-auto text-left"
          variants={formVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div className="mb-4" variants={fieldVariants}>
            <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
            <input type="text" id="name" className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white" />
          </motion.div>
          <motion.div className="mb-4" variants={fieldVariants}>
            <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
            <input type="email" id="email" className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white" />
          </motion.div>
          <motion.div className="mb-4" variants={fieldVariants}>
            <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
            <textarea id="message" rows={4} className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white"></textarea>
          </motion.div>
          <motion.button 
            type="submit" 
            className="w-full mt-4 group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 ease-in-out rounded-lg bg-cyan-500/80 hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-cyan-500"
            variants={fieldVariants}
          >
            Send Inquiry
          </motion.button>
        </motion.form>

        <div className="mt-20">
            <h3 className="text-2xl font-bold mb-4 text-white">Stay Ahead of the Curve</h3>
            <p className="text-gray-400 mb-6">Subscribe to our newsletter for insights on digital innovation.</p>
            <form className="flex justify-center max-w-md mx-auto">
                <input type="email" placeholder="your.email@example.com" className="flex-grow p-3 bg-white/10 border border-white/20 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white" />
                <button type="submit" className="px-6 py-3 bg-cyan-500 text-black font-bold rounded-r-lg hover:bg-cyan-400 transition-colors">Subscribe</button>
            </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
