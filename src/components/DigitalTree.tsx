import { motion, type Variants } from 'framer-motion';

const DigitalTree = () => {
  const draw: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  return (
    <motion.svg
      width="100%"
      height="100%"
      viewBox="0 0 400 400"
      initial="hidden"
      animate="visible"
      className="absolute inset-0 z-10"
    >
      <motion.line
        x1="200"
        y1="400"
        x2="200"
        y2="200"
        stroke="#00ffff"
        variants={draw}
        custom={1}
      />
      <motion.line
        x1="200"
        y1="200"
        x2="150"
        y2="150"
        stroke="#00ffff"
        variants={draw}
        custom={1.5}
      />
        <motion.line
        x1="200"
        y1="200"
        x2="250"
        y2="150"
        stroke="#00ffff"
        variants={draw}
        custom={1.5}
      />
    </motion.svg>
  );
};

export default DigitalTree;
