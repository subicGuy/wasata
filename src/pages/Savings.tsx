import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Wallet, TrendingUp, Shield, Clock, Percent, BadgeCheck, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import phoneMockup from '@/assets/phone-mockup.png';

const features = [
  {
    icon: Percent,
    title: 'عوائد يومية تصل إلى 5.8%',
    description: 'احصل على عوائد يومية تُضاف مباشرة إلى محفظتك'
  },
  {
    icon: Shield,
    title: 'حماية من التضخم',
    description: 'حافظ على قيمة أموالك الحقيقية مع عوائد تفوق معدل التضخم'
  },
  {
    icon: Clock,
    title: 'سحب فوري',
    description: 'اسحب أموالك في أي وقت بدون قيود أو فترات انتظار'
  },
  {
    icon: BadgeCheck,
    title: 'استثمار شرعي',
    description: 'صناديق أسواق النقد متوافقة 100% مع الشريعة الإسلامية'
  }
];

const howItWorks = [
  {
    step: '01',
    title: 'افتح حسابك',
    description: 'سجّل في تطبيق وساطة كابيتال في دقائق معدودة'
  },
  {
    step: '02',
    title: 'اختر محفظة الادخار',
    description: 'حدد محفظة الادخار من قائمة المحافظ المتاحة'
  },
  {
    step: '03',
    title: 'أودع أموالك',
    description: 'حوّل المبلغ الذي تريد استثماره بسهولة'
  },
  {
    step: '04',
    title: 'استمتع بالعوائد',
    description: 'شاهد عوائدك تنمو يومياً في حسابك'
  }
];

const comparisons = [
  {
    feature: 'العائد السنوي',
    savings: 'حتى 5.8%',
    traditional: '0.5% - 1%'
  },
  {
    feature: 'السيولة',
    savings: 'سحب فوري',
    traditional: 'قيود وفترات انتظار'
  },
  {
    feature: 'الحد الأدنى',
    savings: '1,000 ريال',
    traditional: '10,000+ ريال'
  },
  {
    feature: 'الرسوم',
    savings: '0.5% سنوياً',
    traditional: 'رسوم متعددة'
  },
  {
    feature: 'التوافق الشرعي',
    savings: 'معتمد شرعياً',
    traditional: 'غير مضمون'
  }
];

const Savings = () => {
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
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Wallet className="w-5 h-5" />
                <span className="font-medium">محفظة الادخار</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                حرّك أموالك الراكدة
                <span className="text-gradient-gold block">بعوائد يومية</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                استثمر في صناديق أسواق النقد بعوائد يومية تصل إلى <span className="text-primary font-bold">5.8%</span> سنوياً لحماية أموالك من التضخم
              </p>
              <p className="text-muted-foreground mb-8">
                بديل ذكي للحسابات الجارية التقليدية مع مرونة كاملة في السحب والإيداع
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="gold" size="lg">
                  ابدأ الادخار الآن
                </Button>
                <Button variant="outline" size="lg">
                  احسب عوائدك
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
                <div>
                  <p className="text-3xl font-bold text-gradient-gold">5.8%</p>
                  <p className="text-sm text-muted-foreground">عائد سنوي</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gradient-gold">0.5%</p>
                  <p className="text-sm text-muted-foreground">رسوم سنوية</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gradient-gold">24/7</p>
                  <p className="text-sm text-muted-foreground">سحب فوري</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-gold/20 rounded-full blur-3xl" />
              <img 
                src={phoneMockup} 
                alt="محفظة الادخار"
                className="w-full max-w-md mx-auto relative"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              مميزات <span className="text-gradient-gold">محفظة الادخار</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-card border border-gold/10"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center mb-4 shadow-gold">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              كيف <span className="text-gradient-gold">تبدأ</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              أربع خطوات بسيطة لبدء رحلة الادخار
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative text-center"
              >
                <div className="text-6xl font-bold text-gold/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
                
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-0 w-full h-0.5 bg-gradient-to-l from-gold/50 to-transparent -translate-x-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              لماذا <span className="text-gradient-gold">محفظة الادخار</span>؟
            </h2>
            <p className="text-lg text-muted-foreground">
              مقارنة مع الحسابات التقليدية
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-card rounded-2xl overflow-hidden shadow-card border border-gold/10"
          >
            <div className="grid grid-cols-3 bg-gradient-gold text-primary-foreground font-bold">
              <div className="p-4 text-center">المميزات</div>
              <div className="p-4 text-center">محفظة الادخار</div>
              <div className="p-4 text-center">الحسابات التقليدية</div>
            </div>
            {comparisons.map((row, index) => (
              <div key={row.feature} className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-background' : 'bg-secondary/50'}`}>
                <div className="p-4 text-foreground font-medium">{row.feature}</div>
                <div className="p-4 text-center text-primary font-medium flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  {row.savings}
                </div>
                <div className="p-4 text-center text-muted-foreground">{row.traditional}</div>
              </div>
            ))}
          </motion.div>
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
              ابدأ الادخار الذكي اليوم
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              حوّل أموالك الراكدة إلى استثمار ينمو يومياً
            </p>
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90 group">
              افتح محفظة الادخار
              <ArrowUpRight className="w-4 h-4 mr-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Savings;
