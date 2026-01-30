import { motion } from 'framer-motion';
import { TrendingUp, Shield, Wallet } from 'lucide-react';

interface PortfolioCardProps {
  title: string;
  description: string;
  returnRate: string;
  icon: 'growth' | 'safe' | 'balanced';
  delay?: number;
}

const icons = {
  growth: TrendingUp,
  safe: Shield,
  balanced: Wallet,
};

export const PortfolioCard = ({ title, description, returnRate, icon, delay = 0 }: PortfolioCardProps) => {
  const Icon = icons[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-shadow duration-300 border border-gold/10"
    >
      <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center mb-4 shadow-soft">
        <Icon className="w-7 h-7 text-primary-foreground" />
      </div>

      <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>

      <div className="flex items-center justify-between pt-4 border-t border-border">
        <span className="text-sm text-muted-foreground">العائد السنوي</span>
        <span className="text-2xl font-bold text-gradient-gold">{returnRate}</span>
      </div>
    </motion.div>
  );
};
