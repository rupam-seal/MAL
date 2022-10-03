import React from 'react';
import { motion } from 'framer-motion';

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
  return (
    <motion.div
      className="container order"
      variants={containerVarient}
      initial="hidden"
      animate="visible"
    >
      <h2>Thank you for your order :)</h2>
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
