import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  content: string;
}

const symbols = ['$', '₿', '▲', '%', '📈'];

export const SubtleParticles = () => {
  const particles = useMemo<Particle[]>(() => {
    const items: Particle[] = [];
    
    for (let i = 0; i < 20; i++) {
      items.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 12 + 8,
        duration: Math.random() * 25 + 20,
        delay: Math.random() * 15,
        opacity: Math.random() * 0.08 + 0.03,
        content: symbols[Math.floor(Math.random() * symbols.length)],
      });
    }
    
    return items;
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute text-gold font-mono"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            fontSize: particle.size,
            opacity: particle.opacity,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 10 - 5, 0],
            opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
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
