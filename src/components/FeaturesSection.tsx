import { motion } from 'framer-motion';
import { CalendarDays, Target, ShieldCheck, Wallet } from 'lucide-react';

const features = [
  {
    icon: CalendarDays,
    title: 'دفعات مجدولة لاستثمار سهل',
    description: 'فعّل خدمة الاستقطاع الشهري لتسهيل عملية إدارة محفظتك',
  },
  {
    icon: Target,
    title: 'خطط استثمارية تناسب أسلوبك',
    description: 'أسس خطط مالية لأهدافك واكسب مكافآت عند استمرارك بالخطة',
  },
  {
    icon: ShieldCheck,
    title: 'مرخصة من هيئة السوق المالية',
    description: 'يتم استثمار أموالك بطرق شرعية ومرخصة من هيئة السوق المالية',
  },
  {
    icon: Wallet,
    title: 'اسحب أموالك في أي وقت',
    description: 'يمكنك سحب أموالك من محفظتك الاستثمارية في أي وقت تريد',
  },
];

export const FeaturesSection = () => {
  return (
    <section id="about" className="py-10 md:py-16 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
            <span className="block sm:inline">رحلة استثمارية،</span>{' '}
            <span className="text-gradient-gold block sm:inline">مسارها النمو</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 mx-auto rounded-2xl bg-gradient-gold flex items-center justify-center mb-4 shadow-gold"
              >
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </motion.div>
              <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
