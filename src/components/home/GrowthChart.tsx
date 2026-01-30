import { motion } from 'framer-motion';
import { useMemo } from 'react';

export const GrowthChart = () => {
  const points = useMemo(() => {
    const pts = [];
    let y = 80;
    for (let i = 0; i <= 20; i++) {
      y = Math.max(20, Math.min(85, y + (Math.random() - 0.35) * 15));
      pts.push({ x: i * 5, y: 100 - y });
    }
    return pts;
  }, []);

  const pathD = useMemo(() => {
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const cpX = (prev.x + curr.x) / 2;
      d += ` C ${cpX} ${prev.y}, ${cpX} ${curr.y}, ${curr.x} ${curr.y}`;
    }
    return d;
  }, [points]);

  const areaD = useMemo(() => {
    return `${pathD} L 100 100 L 0 100 Z`;
  }, [pathD]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 w-full h-1/2"
      >
        <defs>
          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--gold))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--gold))" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--gold))" stopOpacity="0.5" />
            <stop offset="50%" stopColor="hsl(var(--gold))" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(var(--gold))" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        
        {/* Area fill */}
        <motion.path
          d={areaD}
          fill="url(#chartGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        
        {/* Line */}
        <motion.path
          d={pathD}
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        />
        
        {/* Animated dot at end */}
        <motion.circle
          cx={points[points.length - 1].x}
          cy={points[points.length - 1].y}
          r="1.5"
          fill="hsl(var(--gold))"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 1],
            scale: [0, 1.5, 1],
          }}
          transition={{ 
            duration: 0.5, 
            delay: 2,
            times: [0, 0.5, 1]
          }}
        />
        
        {/* Pulse effect */}
        <motion.circle
          cx={points[points.length - 1].x}
          cy={points[points.length - 1].y}
          r="1.5"
          fill="none"
          stroke="hsl(var(--gold))"
          strokeWidth="0.3"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0.5, 0],
            r: [1.5, 4, 6],
          }}
          transition={{ 
            duration: 2,
            delay: 2.5,
            repeat: Infinity,
          }}
        />
      </svg>
    </div>
  );
};
