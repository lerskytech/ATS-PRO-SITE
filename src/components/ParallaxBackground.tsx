import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <motion.div
      className="absolute inset-0 z-0 w-full h-full"
      style={{ y }}
    >
      <img
        src="/assets/parallax_background.png"
        alt="Futuristic Light Symphony"
        className="w-full h-full object-cover opacity-20"
      />
    </motion.div>
  );
};

export default ParallaxBackground;
