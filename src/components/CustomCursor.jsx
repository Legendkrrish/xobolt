import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Soft Blue Circle Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-[#0B4ED9]/30"
        animate={{
          x: mousePos.x - (isHovered ? 26 : 16),
          y: mousePos.y - (isHovered ? 26 : 16),
          width: isHovered ? 52 : 32,
          height: isHovered ? 52 : 32,
          backgroundColor: isHovered ? 'rgba(11, 78, 217, 0.08)' : 'rgba(11, 78, 217, 0.03)',
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
      />
      {/* Blue Center Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-[#0B4ED9]"
        animate={{
          x: mousePos.x - 3,
          y: mousePos.y - 3,
          width: 6,
          height: 6,
          scale: isHovered ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 40,
        }}
      />
    </>
  );
}
