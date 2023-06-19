import React from "react";
import { motion } from "framer-motion";

const SlideInRight = ({ children, duration, x, once }) => {
  return (
    <motion.div
      animate={{ x: x || 200 }}
      whileInView={{ x: 0 }}
      viewport={{ once: once }}
      transition={{ ease: "easeIn", duration: duration || 1 }}
    >
      {children}
    </motion.div>
  );
};

export default SlideInRight;
