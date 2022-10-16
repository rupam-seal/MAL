import React from 'react';
import { motion, useCycle } from 'framer-motion';

const loaderVarient = {
  animationOne: {
    x: [-20, 20],
    y: [0, -20],
    transition: {
      x: { yoyo: Infinity, duration: 0.5 },
      y: { yoyo: Infinity, duration: 0.25, ease: 'easeOut' },
    },
  },
  animationTwo: {
    y: [0, -40],
    x: 0,
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: 'easeOut',
      },
    },
  },
};

const Loader = () => {
  const [animation, cycleAnimation] = useCycle('animationOne', 'animationTwo');
  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVarient}
        animate={animation}
      ></motion.div>
      <div onClick={() => cycleAnimation()}>Cycle Loader</div>
    </>
  );
};

export default Loader;
