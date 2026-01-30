import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Scale, FileCheck, AlertTriangle, Banknote, Gavel, Clock, XCircle, HelpCircle } from 'lucide-react';

const sections = [
  {
    icon: FileCheck,
    title: 'القبول والموافقة',
    content: `باستخدامك لموقع وخدمات شركة وساطة كابيتال ("الشركة")، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي من هذه الشروط، يرجى عدم استخدام خدماتنا.

تحتفظ الشركة بالحق في تعديل هذه الشروط في أي وقت. سيتم إخطارك بأي تغييرات جوهرية عبر البريد الإلكتروني أو من خلال إشعار على موقعنا. استمرارك في استخدام خدماتنا بعد أي تعديل يعني قبولك للشروط المعدلة.`
  },
  {
    icon: Scale,
    title: 'الأهلية',
    content: `لاستخدام خدماتنا، يجب أن تستوفي الشروط التالية:

• أن تكون مواطناً سعودياً أو مقيماً في المملكة العربية السعودية
• أن يكون عمرك 18 عاماً على الأقل
• أن تكون لديك الأهلية القانونية الكاملة لإبرام العقود
• أن تقدم معلومات صحيحة ودقيقة وكاملة
• أن تلتزم بجميع القوانين واللوائح المعمول بها

الشركة تحتفظ بالحق في رفض تقديم الخدمات لأي شخص لا يستوفي هذه المتطلبات.`
  },
  {
    icon: Banknote,
    title: 'الخدمات والرسوم',
    content: `تقدم الشركة خدمات إدارة الاستثمارات والمحافظ الادخارية وفقاً للشروط التالية:

الرسوم:
• رسوم إدارة المحافظ الاستثمارية: 1% سنوياً من الأصول المدارة
• رسوم المحفظة الادخارية: 0.5% سنوياً من الأصول المدارة
• يتم استقطاع الرسوم شهرياً

الحد الأدنى للاستثمار:
• الحد الأدنى للاستثمار الأولي: 1,000 ريال سعودي
• الحد الأدنى للإضافات اللاحقة: 50 ريال سعودي

تحتفظ الشركة بالحق في تعديل الرسوم مع إشعار مسبق للعملاء.`
  },
  {
    icon: AlertTriangle,
    title: 'المخاطر والإفصاحات',
    content: `تحذير مهم: الاستثمار في الأوراق المالية ينطوي على مخاطر، بما في ذلك احتمال خسارة رأس المال.

إفصاحات المخاطر:
• الأداء السابق لا يضمن النتائج المستقبلية
• قيمة الاستثمارات قد ترتفع أو تنخفض
• لا يوجد ضمان لتحقيق أهداف الاستثمار
• قد تؤثر تقلبات السوق والظروف الاقتصادية على أداء المحافظ
• العوائد المتوقعة ليست مضمونة

يجب على العميل قراءة وفهم جميع وثائق الإفصاح قبل الاستثمار.`
  },
  {
    icon: XCircle,
    title: 'السحب والإنهاء',
    content: `حقوق السحب:
• يحق للعميل سحب استثماراته في أي وقت
• قد تستغرق عملية السحب من 1-5 أيام عمل
• قد تطبق رسوم سحب مبكر في بعض الحالات

إنهاء الحساب:
• يحق للعميل إغلاق حسابه في أي وقت
• يجب سداد أي مستحقات قبل الإغلاق
• تحتفظ الشركة بالحق في إنهاء الحساب في حالة مخالفة الشروط
• عند الإنهاء، سيتم تحويل الأصول المتبقية إلى الحساب البنكي المسجل`
  },
  {
    icon: Gavel,
    title: 'القانون الواجب التطبيق',
    content: `تخضع هذه الشروط والأحكام لأنظمة المملكة العربية السعودية:

• تخضع الشركة لرقابة هيئة السوق المالية السعودية
• أي نزاع ينشأ يخضع للقضاء السعودي
• يتم تسوية النزاعات وفقاً لنظام السوق المالية ولوائحه التنفيذية
• اللغة العربية هي اللغة المعتمدة لهذه الشروط

في حالة وجود تعارض بين النسخة العربية والإنجليزية، تسود النسخة العربية.`
  },
  {
    icon: Clock,
    title: 'حقوق الملكية الفكرية',
    content: `جميع المحتويات على موقعنا وتطبيقاتنا محمية بموجب قوانين الملكية الفكرية:

• العلامات التجارية والشعارات مملوكة للشركة
• المحتوى والنصوص والرسومات محمية بحقوق النشر
• لا يجوز نسخ أو إعادة إنتاج أي محتوى دون إذن كتابي
• يمنح العميل ترخيصاً محدوداً للاستخدام الشخصي فقط

أي استخدام غير مصرح به قد يعرض المخالف للمساءلة القانونية.`
  },
  {
    icon: HelpCircle,
    title: 'الاتصال والشكاوى',
    content: `للاستفسارات والشكاوى:

• البريد الإلكتروني: legal@wasatahcapital.com
• الهاتف: +966 11 XXX XXXX
• العنوان: برج الفيصلية، الطابق 25، طريق الملك فهد، الرياض

آلية الشكاوى:
• تقديم الشكوى كتابياً عبر البريد الإلكتروني أو البريد العادي
• سيتم الرد خلال 10 أيام عمل
• في حالة عدم الرضا، يمكن التصعيد لهيئة السوق المالية`
  }
];

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Scale className="w-5 h-5" />
              <span className="font-medium">الإطار القانوني</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              الشروط <span className="text-gradient-gold">والأحكام</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              آخر تحديث: يناير 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-card border border-gold/10"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold">
                    <section.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{section.title}</h2>
                </div>
                <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Acceptance Section */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">هل لديك أسئلة؟</h2>
            <p className="text-muted-foreground mb-6">
              للاستفسارات القانونية، يرجى التواصل مع فريقنا القانوني
            </p>
            <p className="text-primary font-medium">legal@wasatahcapital.com</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsConditions;
