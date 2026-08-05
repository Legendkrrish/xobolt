import React, { useEffect, useState } from 'react';

const LoadingScreen = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 22) + 12;
        if (next >= 100) {
          clearInterval(interval);
          return 100;
        }
        return next;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const fadeTimer = setTimeout(() => setFadeOut(true), 200);
      const removeTimer = setTimeout(() => {
        if (onLoaded) onLoaded();
      }, 650);
      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(removeTimer);
      };
    }
  }, [progress, onLoaded]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white font-sans transition-opacity duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative z-10 flex flex-col items-center">
        {/* Actual Xobolt Logo */}
        <div className="relative mb-6">
          <img 
            src="https://xobolt.in/wp-content/uploads/2025/06/Logo-with-no-bg.png" 
            alt="Xobolt Logo" 
            className="w-20 h-20 object-contain animate-charger-cinematic drop-shadow-xl"
            loading="eager"
          />
        </div>

        {/* Brand Name */}
        <h1 className="font-display font-black text-3xl text-slate-900 tracking-[0.2em] mb-2">
          XOBOLT
        </h1>
        
        <p className="text-slate-400 text-xs font-mono font-bold tracking-widest uppercase mb-10">
          Powering India's Next Generation
        </p>

        {/* Ribbon Drawing Loader Line */}
        <div className="w-56 max-w-[80vw] flex flex-col gap-2">
          <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden relative">
            <div 
              className="h-full bg-[#0A0A0A] rounded-full transition-all duration-150 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
