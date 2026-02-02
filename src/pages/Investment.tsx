import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { TrendingUp, BarChart3, PieChart, Shield, Target, Wallet, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import phoneMockup from '@/assets/phone-mockup.png';

const portfolios = [
  {
    id: 'saudi',
    name: 'محفظة السوق السعودي',
    description: 'استثمر في محفظة السوق السعودي التي حققت عوائد تتجاوز 39% في عام 2023، وتهدف إلى تحقيق نمو عالي لرأس المال',
    returnRate: '39%+',
    riskLevel: 'عالي',
    icon: TrendingUp,
    features: [
      'استثمار في أفضل الشركات السعودية',
      'إدارة نشطة للمحفظة',
      'تنويع قطاعي متوازن',
      'متابعة يومية للأداء'
    ],
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 'growth',
    name: 'محفظة النمو',
    description: 'محفظة متنوعة تستهدف تحقيق نمو طويل الأجل من خلال الاستثمار في الأسواق المحلية والعالمية',
    returnRate: '25%+',
    riskLevel: 'متوسط-عالي',
    icon: BarChart3,
    features: [
      'تنويع عالمي ومحلي',
      'استراتيجية نمو طويلة الأجل',
      'إعادة توازن دورية',
      'استثمارات متوافقة مع الشريعة'
    ],
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'balanced',
    name: 'المحفظة المتوازنة',
    description: 'تنوع استثماري في الأسواق المحلية والعالمية لتحقيق توازن بين النمو والمحافظة على رأس المال',
    returnRate: '15%+',
    riskLevel: 'متوسط',
    icon: PieChart,
    features: [
      'توازن بين المخاطر والعوائد',
      'تنويع جغرافي وقطاعي',
      'حماية من التقلبات',
      'مناسبة للمستثمر المتحفظ'
    ],
    color: 'from-purple-500 to-violet-600'
  },
  {
    id: 'safe',
    name: 'المحفظة الآمنة',
    description: 'محفظة منخفضة المخاطر تركز على المحافظة على رأس المال مع تحقيق عوائد مستقرة',
    returnRate: '8%+',
    riskLevel: 'منخفض',
    icon: Shield,
    features: [
      'حماية رأس المال',
      'عوائد مستقرة ومتوقعة',
      'سيولة عالية',
      'مخاطر منخفضة جداً'
    ],
    color: 'from-gold to-amber-600'
  }
];

const benefits = [
  {
    icon: Target,
    title: 'أهداف واضحة',
    description: 'نساعدك في تحديد أهدافك الاستثمارية واختيار المحفظة المناسبة'
  },
  {
    icon: Shield,
    title: 'استثمار شرعي',
    description: 'جميع استثماراتنا متوافقة مع أحكام الشريعة الإسلامية'
  },
  {
    icon: Wallet,
    title: 'سيولة فورية',
    description: 'اسحب أموالك في أي وقت دون قيود أو غرامات'
  },
  {
    icon: BarChart3,
    title: 'تقارير مفصلة',
    description: 'تابع أداء محفظتك بتقارير يومية وأسبوعية وشهرية'
  }
];

const Investment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                محافظ استثمارية
                <span className="text-gradient-gold block">متنوعة ومتوافقة مع الشريعة</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                اختر من بين مجموعة متنوعة من المحافظ الاستثمارية المصممة لتناسب أهدافك ومستوى المخاطرة المفضل لديك
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="gold" size="lg" asChild>
                  <a href="https://trade.wasatahcapital.com/user/register" target="_blank" rel="noopener noreferrer">
                  ابدأ الاستثمار الآن
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://trade.wasatahcapital.com/user/register" target="_blank" rel="noopener noreferrer">
                  تواصل مع مستشار
                  </a>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img 
                src={phoneMockup} 
                alt="تطبيق وساطة كابيتال"
                className="w-full max-w-md mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolios Grid */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              اختر <span className="text-gradient-gold">محفظتك</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              محافظ مصممة بعناية لتلبية احتياجاتك الاستثمارية المختلفة
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolios.map((portfolio, index) => (
              <motion.div
                key={portfolio.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-card rounded-2xl p-8 shadow-card border border-gold/10 hover:shadow-elevated transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${portfolio.color} flex items-center justify-center shadow-lg`}>
                    <portfolio.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground">العائد السنوي</p>
                    <p className="text-3xl font-bold text-gradient-gold">{portfolio.returnRate}</p>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-3">{portfolio.name}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{portfolio.description}</p>
                
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-2">مستوى المخاطرة: <span className="text-foreground font-medium">{portfolio.riskLevel}</span></p>
                </div>

                <ul className="space-y-3 mb-6">
                  {portfolio.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="gold" className="w-full group">
                  استثمر الآن
                  <ArrowUpRight className="w-4 h-4 mr-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              لماذا تستثمر <span className="text-gradient-gold">معنا</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 mx-auto rounded-2xl bg-gradient-gold flex items-center justify-center mb-4 shadow-gold"
                >
                  <benefit.icon className="w-8 h-8 text-primary-foreground" />
                </motion.div>
                <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-gold">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              ابدأ رحلتك الاستثمارية اليوم
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              سجّل الآن واحصل على استشارة مجانية لاختيار المحفظة المناسبة لك
            </p>
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90" asChild>
              <a href="https://trade.wasatahcapital.com/user/register" target="_blank" rel="noopener noreferrer">
                سجّل الآن
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Investment;
