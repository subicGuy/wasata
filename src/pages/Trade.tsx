import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { TrendingUp, Zap, Shield, Brain, Percent, Clock, BarChart3, Sparkles } from 'lucide-react';
import phoneMockup from '@/assets/phone-mockup.png';
import shariaMember1 from '@/assets/sharia-member-1.png';
import shariaMember2 from '@/assets/sharia-member-2.png';
import shariaMember3 from '@/assets/sharia-member-3.png';
import { StockTicker } from '@/components/trade/StockTicker';
import { CandlestickChart } from '@/components/trade/CandlestickChart';
import { FloatingParticles } from '@/components/trade/FloatingParticles';
import { TradingGrid } from '@/components/trade/TradingGrid';

const features = [
  {
    icon: TrendingUp,
    title: 'أسعار مباشرة',
    description: 'تحديث أسعار السوق لحظة بلحظة',
  },
  {
    icon: Percent,
    title: 'خصم 50% على عمولة التداول',
    description: 'نصف العمولة لجميع تداولاتك بالسوق الأمريكي',
  },
  {
    icon: Brain,
    title: 'وساطة AI',
    description: 'مساعدك الذكي لتحليل السوق',
  },
  {
    icon: Sparkles,
    title: 'عوائد تصل حتى 3%',
    description: 'استفد من عوائد على رصيدك غير المستثمر',
  },
];

const whyChooseUs = [
  {
    icon: Percent,
    title: '+3%',
    subtitle: 'على رصيد محفظتك غير المستثمر',
    description: 'عوائد شهرية بمعدل 3% سنوياً على رصيدك غير المستثمر، ربحان حتى وأنت تنتظر الصفقة الجاية',
  },
  {
    icon: Clock,
    title: 'سهولة وفورية فتح الحساب',
    subtitle: '',
    description: 'فتح الحساب الاستثماري بشكل سهل فوري في دقائق فقط من خلال التطبيق',
  },
  {
    icon: Zap,
    title: 'اعتمادية وسرعة تنفيذ العمليات',
    subtitle: '',
    description: 'تنفيذ مباشر وسريع للصفقات بدون أي تأخير في الأوامر أو تغير في الأسعار',
  },
  {
    icon: BarChart3,
    title: 'أدوات تدعم القرارات الاستثمارية',
    subtitle: '',
    description: 'معرفة تحليلات الخبراء وتوقعاتهم لأسعار الأسهم مع توضيح أسباب حركة السهم',
  },
  {
    icon: Brain,
    title: 'مساعد وساطة الذكي (AI)',
    subtitle: '',
    description: 'فهم السوق صار أسهل مع مساعد وساطة الذكي للحصول على رؤى السوق وبيانات الشركات',
  },
  {
    icon: Shield,
    title: 'التزام بأحكام الشريعة الإسلامية',
    subtitle: '',
    description: 'التمييز بين الشركات الشرعية وغير الشرعية مع حاسبة الزكاة والتطهير لكل سهم',
  },
];

const shariaMembers = [
  {
    name: 'أ.د. يوسف الشبيلي',
    role: 'رئيس اللجنة الشرعية',
    image: shariaMember3,
  },
  {
    name: 'د. فيصل الشمري',
    role: 'عضواً',
    image: shariaMember2,
  },
  {
    name: 'عبدالعزيز الدميجي',
    role: 'عضواً',
    image: shariaMember1,
  },
];

const Trade = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen pt-24 overflow-hidden bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90">
        {/* Trading Grid Background */}
        <TradingGrid />
        
        {/* Floating Particles */}
        <FloatingParticles />
        
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Phone Mockup with Chart */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative">
                <img
                  src={phoneMockup}
                  alt="تطبيق وساطة تداول"
                  className="w-full max-w-md mx-auto drop-shadow-2xl relative z-10"
                />
                {/* Candlestick Chart behind phone */}
                <div className="absolute -right-16 top-1/4 w-64 opacity-80">
                  <CandlestickChart />
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 to-transparent rounded-full blur-3xl scale-150 -z-10" />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-right order-1 lg:order-2"
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-background mb-6">
                وساطة تداول يجمّلك
              </h1>
              <p className="text-lg lg:text-xl text-background/70 mb-8 leading-relaxed">
                تداول بالسوق الأمريكي باعتمادية وسرعة تنفيذ عالية مع أدوات ذكية تساعدك تفهم السوق وأنت متطمن من شرعية الأسهم
              </p>
              <Button variant="gold" size="xl" className="mb-8">
                تداول بذكاء
              </Button>
              
              {/* License Badge */}
              <div className="flex items-center justify-end gap-4">
                <span className="text-background/60">مرخص من</span>
                <div className="bg-background/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-gold/20">
                  <span className="text-sm font-medium text-background">هيئة السوق المالية</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stock Ticker */}
      <StockTicker />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              سجّل اليوم واحصل على المزايا الحصرية مجاناً
            </h2>
            <p className="text-lg text-muted-foreground">
              نفّذ أوامرك بسرعة، وادخل الأسواق المحلية والعالمية بسهولة وأمان
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-cream/50 to-white p-6 rounded-2xl border border-gold/10 hover:shadow-gold transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center mb-4 shadow-gold">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="gold" size="xl">
              انضم للقائمة الآن
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-cream/30 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              لماذا وساطة تداول؟
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gold/5"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-gold flex items-center justify-center mb-6 shadow-gold">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                {item.subtitle && (
                  <p className="text-sm text-muted-foreground mb-2">{item.subtitle}</p>
                )}
                <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sharia Compliance Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-right"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                تداول متوافق مع الشريعة
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                نلتزم بأحكام الشريعة الإسلامية، حيث يتم التوضيح وبشكل مباشر الشركات الشرعية وغير الشرعية مع تفصيل كامل عن سبب عدم شرعيتها. بالإضافة إلى الأدوات التي توضح المتطلبات الشرعية تجاه الاستثمارات مثل حاسبة الزكاة وحاسبة التطهير التفصيلية لكل سهم
              </p>
              <Button variant="gold" size="lg">
                ابدأ التداول الشرعي
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4"
            >
              {shariaMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="text-center"
                >
                  <div className="relative mb-4">
                    <div className="w-24 h-24 lg:w-32 lg:h-32 mx-auto rounded-full overflow-hidden border-4 border-gold/20 shadow-lg">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h4 className="font-bold text-foreground text-sm lg:text-base">{member.name}</h4>
                  <p className="text-xs lg:text-sm text-muted-foreground">{member.role}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-gold">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
              ابدأ رحلتك الاستثمارية اليوم
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              انضم إلى آلاف المستثمرين الذين يثقون في وساطة كابيتال لتحقيق أهدافهم المالية
            </p>
            <Button 
              size="xl" 
              className="bg-white text-primary hover:bg-white/90 shadow-elevated"
            >
              سجّل الآن مجاناً
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Trade;
