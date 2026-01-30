import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from 'react';

interface PriceCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export const PriceCounter = ({ 
  value, 
  prefix = '$', 
  suffix = '', 
  duration = 2,
  className = ''
}: PriceCounterProps) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => latest.toFixed(2));
  const [displayValue, setDisplayValue] = useState('0.00');

  useEffect(() => {
    const controls = animate(count, value, { duration });
    const unsubscribe = rounded.on('change', (v) => setDisplayValue(v));
    
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [value, count, rounded, duration]);

  return (
    <motion.span 
      className={`font-mono tabular-nums ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {prefix}{displayValue}{suffix}
    </motion.span>
  );
};

export const AnimatedPercentage = ({ value, isPositive }: { value: number; isPositive: boolean }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => latest.toFixed(2));
  const [displayValue, setDisplayValue] = useState('0.00');

  useEffect(() => {
    const controls = animate(count, value, { duration: 1.5 });
    const unsubscribe = rounded.on('change', (v) => setDisplayValue(v));
    
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [value, count, rounded]);

  return (
    <motion.span 
      className={`font-mono tabular-nums flex items-center gap-1 ${isPositive ? 'text-green-400' : 'text-red-400'}`}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
    >
      <span className="text-lg">{isPositive ? '▲' : '▼'}</span>
      {isPositive ? '+' : '-'}{displayValue}%
    </motion.span>
  );
};
