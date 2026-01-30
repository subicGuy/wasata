import { motion } from 'framer-motion';
import { PortfolioCard } from './PortfolioCard';

const portfolios = [
  {
    title: 'محفظة السوق السعودي',
    description: 'استثمر في محفظة السوق السعودي التي حققت عوائد تتجاوز 39% في عام 2023',
    returnRate: '39%+',
    icon: 'growth' as const,
  },
  {
    title: 'محفظة الادخار',
    description: 'حرّك أموالك الراكدة بالاستثمار في صناديق أسواق النقد بعوائد يومية',
    returnRate: '5.8%',
    icon: 'safe' as const,
  },
  {
    title: 'المحفظة المتوازنة',
    description: 'تنوع استثماري في الأسواق المحلية والعالمية لتحقيق نمو مستدام',
    returnRate: '15%+',
    icon: 'balanced' as const,
  },
];

export const PortfoliosSection = () => {
  return (
    <section id="portfolios" className="py-10 md:py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
            <span className="inline">محافظ </span>
            <span className="text-gradient-gold inline">وساطة المالية</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            اختر المحفظة الاستثمارية التي تناسب أهدافك ومستوى المخاطرة المفضل لديك
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolios.map((portfolio, index) => (
            <PortfolioCard
              key={portfolio.title}
              {...portfolio}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
