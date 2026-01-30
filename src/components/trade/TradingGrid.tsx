import { motion } from 'framer-motion';

export const TradingGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--gold)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--gold)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Animated horizontal scan lines */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`h-${i}`}
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
          initial={{ top: '-10%' }}
          animate={{ top: '110%' }}
          transition={{
            duration: 8,
            delay: i * 2.5,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
      
      {/* Animated vertical scan lines */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent"
          initial={{ left: '-10%' }}
          animate={{ left: '110%' }}
          transition={{
            duration: 12,
            delay: i * 5,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
      
      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-gold/10 rounded-tl-lg" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-gold/10 rounded-tr-lg" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-gold/10 rounded-bl-lg" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-gold/10 rounded-br-lg" />
      
      {/* Glowing nodes at intersections */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute w-2 h-2 rounded-full bg-gold/30"
          style={{
            left: `${15 + (i % 3) * 35}%`,
            top: `${20 + Math.floor(i / 3) * 60}%`,
          }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
            boxShadow: [
              '0 0 0 0 rgba(212, 175, 55, 0)',
              '0 0 20px 5px rgba(212, 175, 55, 0.3)',
              '0 0 0 0 rgba(212, 175, 55, 0)',
            ],
          }}
          transition={{
            duration: 3,
            delay: i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};
