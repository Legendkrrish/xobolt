import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

export default function MagneticCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState('default'); // 'default', 'button', 'product', 'charger'
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Only hide cursor when hovering specific elements, handled in mouseover
    document.body.style.cursor = 'auto';
    
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      
      if (target.closest('[data-cursor="product"]')) {
        setCursorState('product');
        document.body.style.cursor = 'none';
      } else if (target.closest('[data-cursor="charger"]')) {
        setCursorState('charger');
        document.body.style.cursor = 'none';
      } else if (
        target.tagName?.toLowerCase() === 'button' || 
        target.tagName?.toLowerCase() === 'a' ||
        target.closest('button') || 
        target.closest('a')
      ) {
        setCursorState('button');
        document.body.style.cursor = 'none';
      } else {
        setCursorState('default');
        document.body.style.cursor = 'auto';
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const variants = {
    default: {
      width: 12,
      height: 12,
      x: mousePosition.x - 6,
      y: mousePosition.y - 6,
      backgroundColor: '#38FF7A',
      border: '0px solid transparent',
      scale: 0,
      opacity: 0,
    },
    button: {
      width: 48,
      height: 48,
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      backgroundColor: 'transparent',
      border: '2px solid #38FF7A',
      scale: isClicking ? 0.8 : 1.2,
      opacity: 1,
    },
    product: {
      width: 72,
      height: 72,
      x: mousePosition.x - 36,
      y: mousePosition.y - 36,
      backgroundColor: '#38FF7A',
      border: '0px solid transparent',
      scale: isClicking ? 0.9 : 1,
      opacity: 1,
    },
    charger: {
      width: 80,
      height: 80,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      backgroundColor: 'rgba(56, 255, 122, 0.1)',
      border: '1px solid rgba(56, 255, 122, 0.5)',
      scale: isClicking ? 0.9 : 1,
      opacity: 1,
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full flex items-center justify-center xobolt-green-glow"
        animate={variants[cursorState]}
        transition={{ type: 'spring', mass: 0.1, stiffness: 600, damping: 25 }}
      >
        <AnimatePresence mode="wait">
          {cursorState === 'product' && (
            <motion.div
              key="product-arrow"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight size={28} className="text-black" />
            </motion.div>
          )}
          {cursorState === 'charger' && (
            <motion.div
              key="charger-pulse"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 rounded-full animate-ping border-2 border-[#38FF7A]"
            />
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
