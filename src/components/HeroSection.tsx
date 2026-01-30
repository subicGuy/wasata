import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import phoneMockup from '@/assets/phone-mockup.png';
import goldCoin from '@/assets/gold-coin-3d.png';
import { SubtleParticles } from '@/components/home/SubtleParticles';
import { GrowthChart } from '@/components/home/GrowthChart';

export const HeroSection = () => {
  return (
    <section id="hero" className="relative bg-gradient-hero pt-36 md:pt-40 pb-8 overflow-hidden">
      {/* Subtle Floating Particles */}
      <SubtleParticles />
      
      {/* Growth Chart Background */}
      <GrowthChart />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-right"
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="inline">استثمار يفهم </span>
              <span className="text-gradient-gold inline">مستقبلك</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 lg:mr-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              ابدأ رحلتك الاستثمارية مع وساطة كابيتال واستثمر في محافظ شرعية ومتنوعة تناسب أهدافك
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Button variant="gold" size="xl" className="animate-pulse-gold">
                ابدأ الاستثمار الآن
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="/contact">تواصل معنا</a>
              </Button>
            </motion.div>

            {/* Trust Badge */}
            <motion.div
              className="mt-10 flex items-center gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <div className="flex items-center gap-2 bg-card shadow-card rounded-lg px-4 py-2">
                <span className="text-sm text-muted-foreground">مرخصة من</span>
                <span className="font-bold text-foreground">هيئة السوق المالية</span>
              </div>
            </motion.div>

            {/* Trading Stats */}
            <motion.div
              className="mt-16 mb-6 grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <div className="text-center lg:text-right">
                <div className="text-2xl lg:text-3xl font-bold text-gradient-gold">+50K</div>
                <div className="text-xs text-muted-foreground">مستثمر نشط</div>
              </div>
              <div className="text-center lg:text-right">
                <div className="text-2xl lg:text-3xl font-bold text-gradient-gold">+200</div>
                <div className="text-xs text-muted-foreground">سهم متاح</div>
              </div>
              <div className="text-center lg:text-right">
                <div className="text-2xl lg:text-3xl font-bold text-gradient-gold">24/7</div>
                <div className="text-xs text-muted-foreground">دعم فني</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            className="relative flex justify-center items-center mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Phone Mockup with background wrapper */}
            <motion.div
              className="relative z-10"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img
                src={phoneMockup}
                alt="تطبيق وساطة كابيتال"
                className="w-[180px] sm:w-[220px] md:max-w-[280px] lg:max-w-[320px] drop-shadow-2xl"
              />
            </motion.div>

            {/* 3D Gold Coin */}
            <motion.div
              className="absolute -bottom-2 -left-2 sm:-left-6 lg:left-4 z-20"
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: 'easeInOut',
                delay: 0.5
              }}
            >
              <img
                src={goldCoin}
                alt="عملة ذهبية"
                className="w-16 sm:w-24 md:w-36 lg:w-44 drop-shadow-xl"
              />
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/4 right-0 w-32 sm:w-64 h-32 sm:h-64 bg-gold/10 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 left-0 w-24 sm:w-48 h-24 sm:h-48 bg-gold-light/10 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
