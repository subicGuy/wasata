import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Shield, Lock, Eye, FileText, Users, Bell } from 'lucide-react';

const sections = [
  {
    icon: FileText,
    title: 'المقدمة',
    content: `تلتزم شركة وساطة كابيتال ("الشركة" أو "نحن") بحماية خصوصية عملائها ومستخدمي موقعها الإلكتروني وتطبيقاتها. توضح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية المعلومات الشخصية التي تقدمها لنا.

باستخدامك لخدماتنا، فإنك توافق على الممارسات الموضحة في هذه السياسة. نحتفظ بالحق في تعديل هذه السياسة في أي وقت، وسيتم نشر أي تغييرات على هذه الصفحة.`
  },
  {
    icon: Eye,
    title: 'المعلومات التي نجمعها',
    content: `نقوم بجمع أنواع مختلفة من المعلومات لتقديم خدماتنا وتحسينها:

• المعلومات الشخصية: الاسم الكامل، رقم الهوية الوطنية، تاريخ الميلاد، الجنسية
• معلومات الاتصال: رقم الهاتف، البريد الإلكتروني، العنوان البريدي
• المعلومات المالية: معلومات الحساب البنكي، تاريخ المعاملات، الملف الاستثماري
• معلومات الجهاز: عنوان IP، نوع المتصفح، نظام التشغيل
• معلومات الاستخدام: الصفحات التي تزورها، مدة التصفح، الإجراءات التي تتخذها`
  },
  {
    icon: Shield,
    title: 'كيف نستخدم معلوماتك',
    content: `نستخدم المعلومات التي نجمعها للأغراض التالية:

• تقديم وإدارة خدماتنا الاستثمارية
• التحقق من هويتك والامتثال لمتطلبات "اعرف عميلك" (KYC)
• معالجة المعاملات المالية وتنفيذ الأوامر
• إرسال التقارير والإشعارات المتعلقة بحسابك
• تحسين خدماتنا وتطوير منتجات جديدة
• الامتثال للمتطلبات التنظيمية والقانونية
• منع الاحتيال وحماية أمن حسابك`
  },
  {
    icon: Users,
    title: 'مشاركة المعلومات',
    content: `لا نبيع معلوماتك الشخصية لأطراف ثالثة. قد نشارك معلوماتك في الحالات التالية:

• مع الجهات التنظيمية: هيئة السوق المالية والجهات الحكومية المختصة
• مع مزودي الخدمات: الشركات التي تساعدنا في تقديم خدماتنا (معالجة المدفوعات، التخزين السحابي)
• للامتثال القانوني: عند الطلب بموجب أمر قضائي أو إجراء قانوني
• لحماية الحقوق: لحماية حقوق وممتلكات الشركة أو العملاء

جميع الأطراف الثالثة ملزمة بالحفاظ على سرية معلوماتك واستخدامها فقط للأغراض المحددة.`
  },
  {
    icon: Lock,
    title: 'أمن المعلومات',
    content: `نطبق إجراءات أمنية صارمة لحماية معلوماتك:

• التشفير: جميع البيانات المنقولة مشفرة باستخدام بروتوكول SSL/TLS
• التحكم في الوصول: وصول محدود للموظفين المصرح لهم فقط
• المراقبة: مراقبة مستمرة للأنظمة للكشف عن أي نشاط مشبوه
• النسخ الاحتياطي: نسخ احتياطية منتظمة للبيانات في مواقع آمنة
• التدريب: تدريب موظفينا على أفضل ممارسات أمن المعلومات

رغم جهودنا، لا يمكن ضمان أمان المعلومات المنقولة عبر الإنترنت بنسبة 100%.`
  },
  {
    icon: Bell,
    title: 'حقوقك',
    content: `لديك الحقوق التالية فيما يتعلق بمعلوماتك الشخصية:

• الوصول: طلب نسخة من المعلومات التي نحتفظ بها عنك
• التصحيح: طلب تصحيح أي معلومات غير دقيقة
• الحذف: طلب حذف معلوماتك (مع مراعاة المتطلبات القانونية)
• الاعتراض: الاعتراض على استخدام معلوماتك لأغراض معينة
• سحب الموافقة: سحب موافقتك على معالجة البيانات في أي وقت

لممارسة أي من هذه الحقوق، يرجى التواصل معنا عبر البريد الإلكتروني: privacy@wasatahcapital.com`
  }
];

const PrivacyPolicy = () => {
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
              <Shield className="w-5 h-5" />
              <span className="font-medium">حماية بياناتك أولويتنا</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              سياسة <span className="text-gradient-gold">الخصوصية</span>
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

      {/* Contact Section */}
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
              إذا كان لديك أي استفسار حول سياسة الخصوصية، يرجى التواصل معنا
            </p>
            <p className="text-primary font-medium">privacy@wasatahcapital.com</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
