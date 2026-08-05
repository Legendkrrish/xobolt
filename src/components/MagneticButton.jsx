import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function MagneticButton({ children, to, onClick, className = "", variant = "dark", ...rest }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = "relative inline-flex items-center justify-center overflow-hidden rounded-full font-extrabold uppercase tracking-widest text-xs transition-colors shadow-lg z-10 px-8 py-4";
  const variants = {
    dark: "bg-slate-900 text-white hover:bg-black",
    light: "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50",
  };

  const Component = to ? Link : motion.button;
  const props = to ? { to, ...rest } : { onClick, ...rest };

  return (
    <Component
      {...props}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      ref={to ? null : ref} // Link doesn't directly support ref forwarding like this easily, so we wrap it
    >
      <motion.div
        ref={to ? ref : null}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        className="w-full h-full flex items-center justify-center gap-2"
      >
        {children}
      </motion.div>
    </Component>
  );
}
