import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Portfolio = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  // This will transform the motion value x into a clip-path percentage
  const clipPath = useTransform(x, (latestX) => {
    if (!containerRef.current) return 'polygon(0 0, 50% 0, 50% 100%, 0% 100%)';
    const bounds = containerRef.current.getBoundingClientRect();
    const percentage = (latestX / bounds.width) * 100;
    return `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0% 100%)`;
  });

  return (
    <section className="py-20 px-4 bg-black">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">Visualizing Transformation</h2>
        <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">From concept to reality. Witness the evolution of design and functionality.</p>

        <div ref={containerRef} className="relative w-full max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden select-none cursor-ew-resize">
          {/* After Image (Bottom Layer) */}
          <img 
            src="/assets/portfolio_after.png" 
            alt="After" 
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />

          {/* Before Image (Top Layer, clipped) */}
          <motion.div 
            className="absolute inset-0 w-full h-full pointer-events-none" 
            style={{ clipPath }}
          >
            <img 
              src="/assets/portfolio_before.png" 
              alt="Before" 
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
          </motion.div>

          {/* Draggable Handle */}
          <motion.div
            className="absolute top-0 bottom-0 w-1 bg-cyan-400 cursor-ew-resize z-10"
            style={{ x }}
            drag="x"
            dragConstraints={containerRef}
            dragElastic={0}
            dragMomentum={false}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-8 h-8 rounded-full bg-cyan-400 flex items-center justify-center text-black">
              <FaChevronLeft size={12} />
              <FaChevronRight size={12} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
