import React, { useEffect, useRef, useState } from 'react';
import { Sun, Wind, Battery, Zap, Globe, Sparkles } from 'lucide-react';

export default function FutureMobility() {
  const canvasRef = useRef(null);
  const [activeGridMode, setActiveGridMode] = useState('solar');

  // Microgrid Interactive Canvas Animation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrame;

    const resize = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let offset = 0;
    let windAngle = 0;

    // Animated cars state
    const cars = [
      { x: 50, y: canvas.height * 0.75, speed: 2, color: '#38FF7A' },
      { x: 300, y: canvas.height * 0.75, speed: 1.8, color: '#00E5FF' },
      { x: 600, y: canvas.height * 0.75, speed: 2.4, color: '#38FF7A' }
    ];

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const width = canvas.width;
      const height = canvas.height;

      offset += 1;
      windAngle += 0.03;

      // 1. Draw Smart City Skyline Silhouette
      ctx.fillStyle = 'rgba(14, 19, 31, 0.8)';
      ctx.fillRect(0, height - 120, width, 120);

      // 2. Draw Solar Farm Array (Top Left)
      ctx.fillStyle = '#182234';
      ctx.strokeStyle = '#38FF7A';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.rect(60, height - 220, 100, 60);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#38FF7A';
      ctx.font = '10px "Space Grotesk"';
      ctx.fillText('SOLAR ARRAY 1.2MW', 60, height - 230);

      // 3. Draw Wind Turbines Spinning (Top Right)
      ctx.save();
      ctx.translate(width - 120, height - 180);
      ctx.strokeStyle = '#00E5FF';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, 80);
      ctx.stroke();

      // Blades
      ctx.save();
      ctx.rotate(windAngle);
      for (let i = 0; i < 3; i++) {
        ctx.rotate((Math.PI * 2) / 3);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -35);
        ctx.stroke();
      }
      ctx.restore();
      ctx.restore();

      // 4. Draw Battery Energy Storage System (BESS)
      ctx.fillStyle = '#1E293B';
      ctx.strokeStyle = '#38FF7A';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(width * 0.45, height - 200, 110, 65, 12);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText('BESS MEGA PACK', width * 0.45 + 10, height - 165);

      // 5. Draw Energy Flow Lines Connecting Elements
      ctx.strokeStyle = activeGridMode === 'solar' ? '#38FF7A' : '#00E5FF';
      ctx.shadowColor = activeGridMode === 'solar' ? '#38FF7A' : '#00E5FF';
      ctx.shadowBlur = 12;
      ctx.lineWidth = 3;
      ctx.setLineDash([10, 12]);
      ctx.lineDashOffset = -offset;

      ctx.beginPath();
      ctx.moveTo(110, height - 160);
      ctx.lineTo(width * 0.45, height - 160);
      ctx.lineTo(width * 0.45 + 55, height - 135);
      ctx.stroke();

      ctx.setLineDash([]);
      ctx.shadowBlur = 0;

      // 6. Draw Animated Highway Road & EVs Moving
      ctx.fillStyle = '#070A0F';
      ctx.fillRect(0, height - 60, width, 50);

      // Road markings
      ctx.strokeStyle = '#334155';
      ctx.setLineDash([20, 20]);
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, height - 35);
      ctx.lineTo(width, height - 35);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw moving EVs
      cars.forEach((car) => {
        car.x += car.speed;
        if (car.x > width + 40) car.x = -60;

        ctx.fillStyle = car.color;
        ctx.shadowColor = car.color;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.roundRect(car.x, height - 45, 36, 16, 6);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrame = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
    };
  }, [activeGridMode]);

  return (
    <section id="future-mobility" className="relative py-28 bg-[#070A0F] border-t border-slate-900 overflow-hidden">
      
      {/* Radial Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(56,255,122,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-[#38FF7A]">
            <Globe className="w-3.5 h-3.5" />
            <span>SECTION 10 — FUTURE OF MOBILITY</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
            Building Tomorrow's <br />
            <span className="text-gradient-electric">Charging Infrastructure.</span>
          </h1>

          <p className="text-slate-300 font-sans text-base sm:text-lg">
            Where solar microgrids, battery energy storage systems (BESS), autonomous vehicle charging, and vehicle-to-grid (V2G) tech unite into one intelligent energy fabric.
          </p>
        </div>

        {/* Smart City Microgrid Canvas Visualizer */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800 relative min-h-[420px] overflow-hidden flex flex-col justify-between shadow-2xl">
          
          {/* Microgrid Control Mode Buttons Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 z-20">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#38FF7A]" />
              INTERACTIVE SMART CITY MICROGRID
            </span>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveGridMode('solar')}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold flex items-center gap-2 transition-all ${
                  activeGridMode === 'solar'
                    ? 'bg-[#38FF7A] text-black shadow-[0_0_15px_#38FF7A]'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <Sun className="w-4 h-4" />
                <span>Solar Microgrid</span>
              </button>

              <button
                onClick={() => setActiveGridMode('bess')}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold flex items-center gap-2 transition-all ${
                  activeGridMode === 'bess'
                    ? 'bg-[#00E5FF] text-black shadow-[0_0_15px_#00E5FF]'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <Battery className="w-4 h-4" />
                <span>Battery BESS</span>
              </button>
            </div>
          </div>

          {/* Interactive Microgrid Canvas */}
          <div className="relative w-full h-[260px] my-4">
            <canvas ref={canvasRef} className="w-full h-full rounded-2xl" />
          </div>

          {/* Microgrid Status Bar */}
          <div className="flex flex-wrap items-center justify-between text-xs font-mono text-slate-400 pt-3 border-t border-slate-800 z-20">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#38FF7A] animate-ping" />
              <span>ACTIVE V2G HANDSHAKE ENABLED</span>
            </div>
            <span className="text-[#38FF7A] font-bold">100% RENEWABLE ENERGIZED</span>
          </div>

        </div>

      </div>
    </section>
  );
}
