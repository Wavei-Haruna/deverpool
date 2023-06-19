import React from "react";
import { motion } from "framer-motion";

export default function ({ children, height, duration, x, once }) {
  return (
    <motion.div
      animate={{ x: x || -200 }}
      whileInView={{ x: 0 }}
      transition={{ duration: duration || 1 }}
      viewport={{ once: once }}
      style={{ height: height }}
    >
      {children}
    </motion.div>
  );
}
