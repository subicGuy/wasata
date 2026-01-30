import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Shield, Users, Award, Building2, Target, Heart, Lightbulb, CheckCircle2 } from 'lucide-react';
import shariaMember1 from '@/assets/sharia-member-1.png';
import shariaMember2 from '@/assets/sharia-member-2.png';
import shariaMember3 from '@/assets/sharia-member-3.png';

const values = [
  {
    icon: Shield,
    title: 'الأمانة والشفافية',
    description: 'نؤمن بالشفافية الكاملة مع عملائنا في جميع تعاملاتنا وقراراتنا الاستثمارية'
  },
  {
    icon: Target,
    title: 'التميز والاحترافية',
    description: 'نسعى دائماً لتقديم أفضل الخدمات الاستثمارية بأعلى معايير الجودة'
  },
  {
    icon: Heart,
    title: 'العميل أولاً',
    description: 'مصلحة العميل هي أولويتنا القصوى في كل قرار نتخذه'
  },
  {
    icon: Lightbulb,
    title: 'الابتكار المستمر',
    description: 'نستخدم أحدث التقنيات لتسهيل تجربة الاستثمار لعملائنا'
  }
];

const licenses = [
  'إدارة الاستثمارات',
  'التعامل بصفة أصيل',
  'التعامل بصفة وكيل',
  'الترتيب',
  'الحفظ'
];

const shariaCommittee = [
  {
    name: 'أ.د. يوسف الشبيلي',
    role: 'رئيس اللجنة',
    image: shariaMember3
  },
  {
    name: 'د. فيصل الشمري',
    role: 'عضو',
    image: shariaMember2
  },
  {
    name: 'عبدالعزيز الدميجي',
    role: 'عضو',
    image: shariaMember1
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              عن <span className="text-gradient-gold">وساطة كابيتال</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              شركة وساطة كابيتال هي شركة استثمارية سعودية مرخصة من هيئة السوق المالية، 
              تهدف إلى تمكين الجميع من الاستثمار بطريقة سهلة وآمنة ومتوافقة مع أحكام الشريعة الإسلامية
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 shadow-card border border-gold/10"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-gold flex items-center justify-center mb-6 shadow-gold">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">رسالتنا</h2>
              <p className="text-muted-foreground leading-relaxed">
                تمكين الأفراد من تحقيق أهدافهم المالية من خلال توفير حلول استثمارية 
                مبتكرة وسهلة الاستخدام ومتوافقة مع الشريعة الإسلامية، مع الالتزام 
                بأعلى معايير الشفافية والأمانة
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 shadow-card border border-gold/10"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-gold flex items-center justify-center mb-6 shadow-gold">
                <Lightbulb className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">رؤيتنا</h2>
              <p className="text-muted-foreground leading-relaxed">
                أن نكون الخيار الأول للمستثمرين في المملكة العربية السعودية، 
                من خلال تقديم تجربة استثمارية رقمية متميزة تجمع بين السهولة 
                والأمان والعوائد المجزية
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              <span className="text-gradient-gold">قيمنا</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
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
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </motion.div>
                <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* License Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-gold flex items-center justify-center shadow-gold">
                  <Building2 className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">مرخصة من</h2>
                  <p className="text-muted-foreground">هيئة السوق المالية</p>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                وساطة كابيتال شركة مرخصة من هيئة السوق المالية في المملكة العربية السعودية 
                لممارسة أنشطة الأوراق المالية. نلتزم بجميع الأنظمة واللوائح الصادرة عن الهيئة 
                لضمان حماية مصالح المستثمرين.
              </p>

              <div className="space-y-3">
                <p className="font-medium text-foreground">أنشطتنا المرخصة:</p>
                {licenses.map((license, index) => (
                  <motion.div
                    key={license}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{license}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 shadow-card border border-gold/10"
            >
              <Award className="w-16 h-16 text-primary mx-auto mb-6" />
              <div className="text-center space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">رقم السجل التجاري</p>
                  <p className="text-2xl font-bold text-foreground">1010241832</p>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="text-sm text-muted-foreground mb-1">رقم الترخيص</p>
                  <p className="text-3xl font-bold text-gradient-gold">0812537</p>
                </div>
                <p className="text-muted-foreground mt-4 text-sm">
                  يمكنك التحقق من ترخيصنا عبر موقع هيئة السوق المالية
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sharia Committee */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-gold flex items-center justify-center mb-4 shadow-gold">
              <Shield className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              اللجنة <span className="text-gradient-gold">الشرعية</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              نلتزم بأحكام الشريعة الإسلامية، حيث أن جميع استثماراتنا تخضع للجنة شرعية مؤهلة ويتم تدقيقها ومراجعتها بشكل دوري
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {shariaCommittee.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="text-center"
              >
                <div className="relative w-40 h-40 mx-auto mb-4">
                  <div className="absolute inset-0 rounded-full bg-gradient-gold p-1">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover bg-card"
                    />
                  </div>
                </div>
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-2">
                  {member.role}
                </div>
                <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
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
              انضم إلى آلاف المستثمرين
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              ابدأ رحلتك الاستثمارية معنا اليوم واستفد من خبراتنا
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                ابدأ الاستثمار
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent" asChild>
                <a href="/contact">تواصل معنا</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
