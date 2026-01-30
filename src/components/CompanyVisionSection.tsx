import { motion } from 'framer-motion';
import { Building2, Award, ShieldCheck, TrendingUp, Users } from 'lucide-react';
import vision2030Logo from '@/assets/vision-2030-logo.png';

const highlights = [
  {
    icon: Building2,
    label: 'سجل تجاري',
    value: '1010241832',
  },
  {
    icon: Award,
    label: 'ترخيص هيئة السوق المالية',
    value: '0812537',
  },
  {
    icon: ShieldCheck,
    label: 'متوافقة مع الشريعة',
    value: '100%',
  },
  {
    icon: Users,
    label: 'رأس المال المدفوع',
    value: '250 مليون ريال',
  },
];

export const CompanyVisionSection = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <TrendingUp className="w-4 h-4" />
              <span>نحو مستقبل استثماري مزدهر</span>
            </motion.div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              <span className="inline">شركة </span>
              <span className="text-gradient-gold inline">وساطة كابيتال</span>
              <br />
              شريكك في بناء الثروة
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              شركة وساطة كابيتال هي شركة مساهمة سعودية مرخصة من هيئة السوق المالية، 
              تأسست برأس مال مدفوع بالكامل يبلغ 250 مليون ريال سعودي. نقدم خدمات 
              استثمارية متكاملة تشمل إدارة الاستثمارات، التعامل بصفة أصيل ووكيل، 
              الترتيب والحفظ.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              نلتزم بأحكام الشريعة الإسلامية في جميع أنشطتنا، ونسعى لتحقيق أهداف 
              رؤية المملكة 2030 في تطوير القطاع المالي وتمكين المواطنين من الاستثمار 
              بطريقة آمنة ومبتكرة.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-card rounded-xl p-4 border border-gold/10 shadow-soft"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center shadow-gold">
                      <item.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                  <p className="text-lg font-bold text-foreground">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Vision 2030 Logo Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
            >
              {/* Decorative ring */}
              <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-gold/10 to-transparent blur-xl" />
              
              <img
                src={vision2030Logo}
                alt="رؤية السعودية 2030"
                className="w-full max-w-md h-auto relative z-10"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-center text-muted-foreground mt-8 max-w-sm leading-relaxed"
            >
              نفخر بمساهمتنا في تحقيق أهداف رؤية المملكة 2030 
              لبناء اقتصاد مزدهر ومجتمع حيوي
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
