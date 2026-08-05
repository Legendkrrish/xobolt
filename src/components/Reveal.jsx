import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Reveal({ children, width = "fit-content", delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "visible" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50, rotateX: -10 },
          visible: { opacity: 1, y: 0, rotateX: 0 },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.8, delay: delay, type: "spring", bounce: 0.3 }}
        style={{ transformOrigin: "bottom" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
