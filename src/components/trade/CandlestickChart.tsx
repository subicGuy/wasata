import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Candle {
  id: number;
  open: number;
  close: number;
  high: number;
  low: number;
  isGreen: boolean;
}

const generateCandles = (): Candle[] => {
  const candles: Candle[] = [];
  let lastClose = 50;
  
  for (let i = 0; i < 20; i++) {
    const change = (Math.random() - 0.48) * 15;
    const open = lastClose;
    const close = Math.max(10, Math.min(90, open + change));
    const high = Math.max(open, close) + Math.random() * 8;
    const low = Math.min(open, close) - Math.random() * 8;
    const isGreen = close > open;
    
    candles.push({ id: i, open, close, high, low, isGreen });
    lastClose = close;
  }
  
  return candles;
};

export const CandlestickChart = () => {
  const [candles, setCandles] = useState<Candle[]>(generateCandles());

  useEffect(() => {
    const interval = setInterval(() => {
      setCandles(generateCandles());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-48 flex items-end justify-center gap-1 px-4">
      {/* Grid lines */}
      <div className="absolute inset-0 flex flex-col justify-between opacity-20">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="border-t border-gold/30 w-full" />
        ))}
      </div>
      
      {candles.map((candle, index) => {
        const bodyHeight = Math.abs(candle.close - candle.open);
        const bodyBottom = Math.min(candle.open, candle.close);
        const wickHeight = candle.high - candle.low;
        const wickBottom = candle.low;
        
        return (
          <motion.div
            key={candle.id}
            className="relative flex flex-col items-center"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            style={{ height: '100%' }}
          >
            {/* Wick */}
            <motion.div
              className={`absolute w-0.5 ${candle.isGreen ? 'bg-green-400' : 'bg-red-400'}`}
              style={{
                bottom: `${wickBottom}%`,
                height: `${wickHeight}%`,
              }}
              initial={{ height: 0 }}
              animate={{ height: `${wickHeight}%` }}
              transition={{ delay: index * 0.05 + 0.1, duration: 0.3 }}
            />
            
            {/* Body */}
            <motion.div
              className={`absolute w-3 rounded-sm ${
                candle.isGreen 
                  ? 'bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]' 
                  : 'bg-red-400 shadow-[0_0_10px_rgba(248,113,113,0.5)]'
              }`}
              style={{
                bottom: `${bodyBottom}%`,
                height: `${Math.max(bodyHeight, 2)}%`,
              }}
              initial={{ height: 0 }}
              animate={{ height: `${Math.max(bodyHeight, 2)}%` }}
              transition={{ delay: index * 0.05 + 0.15, duration: 0.4 }}
            />
          </motion.div>
        );
      })}
    </div>
  );
};
