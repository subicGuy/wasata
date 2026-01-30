import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  type: 'number' | 'symbol' | 'dot';
  content: string;
}

const symbols = ['$', '€', '£', '¥', '₿', '▲', '▼', '+', '%'];
const numbers = ['1.25', '0.89', '3.14', '2.71', '99.9', '42', '7.77', '5.55'];

export const FloatingParticles = () => {
  const particles = useMemo<Particle[]>(() => {
    const items: Particle[] = [];
    
    for (let i = 0; i < 40; i++) {
      const type = Math.random() < 0.3 ? 'number' : Math.random() < 0.6 ? 'symbol' : 'dot';
      items.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: type === 'dot' ? Math.random() * 4 + 2 : Math.random() * 14 + 10,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 10,
        type,
        content: type === 'number' 
          ? numbers[Math.floor(Math.random() * numbers.length)]
          : type === 'symbol'
          ? symbols[Math.floor(Math.random() * symbols.length)]
          : '',
      });
    }
    
    return items;
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute ${
            particle.type === 'dot' 
              ? 'rounded-full bg-gold/20' 
              : 'text-gold/15 font-mono font-bold'
          }`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            fontSize: particle.type !== 'dot' ? particle.size : undefined,
            width: particle.type === 'dot' ? particle.size : undefined,
            height: particle.type === 'dot' ? particle.size : undefined,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {particle.content}
        </motion.div>
      ))}
    </div>
  );
};
