import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const containerVarient = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 8,
      stiffness: 120,
      when: 'beforeChildren',
      staggerChildren: 0.4,
    },
  },
};

const childVarient = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Order = ({ pizza }) => {
  const [title, showTitle] = useState(true);
  setTimeout(() => showTitle(false), 4000);

  return (
    <motion.div
      className="container order"
      variants={containerVarient}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence>
        {title && (
          <motion.h2 exit={{ y: -1000 }} transition={{ duration: 1 }}>
            Thank you for your order :)
          </motion.h2>
        )}
      </AnimatePresence>
      <motion.p variants={childVarient}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVarient}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
