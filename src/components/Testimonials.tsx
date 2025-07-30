import { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    quote: 'Alpha Trust Solutions didn\'t just build a website; they crafted a digital masterpiece that has become the cornerstone of our brand identity.',
    author: 'Evelyn Reed',
    company: 'CEO, Quantum Dynamics',
    avatar: '/assets/avatar_1.png'
  },
  {
    quote: 'Their process is nothing short of alchemy. They turned our abstract ideas into a tangible, high-performing reality that exceeded all expectations.',
    author: 'Marcus Thorne',
    company: 'Founder, Nova-Tech Innovations',
    avatar: '/assets/avatar_2.png'
  },
  {
    quote: 'The team\'s attention to detail and commitment to excellence is unparalleled. They are true partners in every sense of the word.',
    author: 'Isabelle Chen',
    company: 'Director, Apex Financial',
    avatar: '/assets/avatar_1.png'
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const variants: Variants = {
    enter: {
      opacity: 0,
      y: 20,
    },
    center: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 px-4 bg-black/50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-white">Echoes of Excellence</h2>
        <div className="relative max-w-3xl mx-auto min-h-[16rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 flex flex-col items-center justify-center bg-white/5 backdrop-blur-md p-8 rounded-lg border border-white/10"
            >
              <FaQuoteLeft className="text-cyan-400 text-3xl mb-4" />
              <p className="text-lg italic text-gray-300 mb-6">"{testimonials[index].quote}"</p>
              <div className="flex items-center">
                <img src={testimonials[index].avatar} alt={testimonials[index].author} className="w-12 h-12 rounded-full mr-4 border-2 border-cyan-400/50"/>
                <div>
                  <p className="font-bold text-white">{testimonials[index].author}</p>
                  <p className="text-gray-400">{testimonials[index].company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
