import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  // {
  //   icon: Phone,
  //   title: 'الهاتف',
  //   details: ['+966 11 XXX XXXX', '+966 50 XXX XXXX'],
  //   description: 'اتصل بنا خلال ساعات العمل'
  // },
  {
    icon: Mail,
    title: 'البريد الإلكتروني',
    details: ['info@wasatahcapital.com', 'support@wasatahcapital.com'],
    description: 'راسلنا في أي وقت'
  },
  {
    icon: MapPin,
    title: 'العنوان',
    details: ['7459 شارع العليا، حي المروج', 'الرياض 12283'],
    description: 'العنوان المختصر: RHGA7459'
  },
  {
    icon: Clock,
    title: 'ساعات العمل',
    details: ['الأحد - الخميس', '9:00 ص - 5:00 م'],
    description: 'بتوقيت المملكة'
  }
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "تم إرسال رسالتك بنجاح",
      description: "سيتواصل معك فريقنا في أقرب وقت ممكن",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

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
              <MessageSquare className="w-5 h-5" />
              <span className="font-medium">تواصل معنا</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              نسعد <span className="text-gradient-gold">بتواصلك</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              فريقنا جاهز للإجابة على استفساراتك ومساعدتك في رحلتك الاستثمارية
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-card border border-gold/10 text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-gold flex items-center justify-center mb-4 shadow-gold">
                  <info.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-muted-foreground">{detail}</p>
                ))}
                <p className="text-sm text-muted-foreground/70 mt-2">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 shadow-card border border-gold/10"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">أرسل لنا رسالة</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">الاسم الكامل</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="أدخل اسمك"
                      required
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@email.com"
                      required
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">رقم الهاتف</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+966 5X XXX XXXX"
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">الموضوع</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="موضوع الرسالة"
                      required
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">الرسالة</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="اكتب رسالتك هنا..."
                    rows={5}
                    required
                    className="bg-background resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="gold"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'جاري الإرسال...'
                  ) : (
                    <>
                      إرسال الرسالة
                      <Send className="w-4 h-4 mr-2" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Why Contact Us */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">لماذا تتواصل معنا؟</h2>
                <p className="text-muted-foreground leading-relaxed">
                  نحن هنا لمساعدتك في كل خطوة من رحلتك الاستثمارية. سواء كان لديك استفسار عن محافظنا الاستثمارية، 
                  أو تحتاج مساعدة في فتح حساب، أو ترغب في استشارة مالية مجانية.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  'استشارة مجانية لاختيار المحفظة المناسبة',
                  'دعم فني على مدار الساعة',
                  'مساعدة في فتح الحساب والتسجيل',
                  'الإجابة على استفساراتك المالية',
                  'شرح تفصيلي لخدماتنا ومنتجاتنا'
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 pt-8">
                <div className="bg-card rounded-xl p-6 text-center shadow-card border border-gold/10">
                  <p className="text-3xl font-bold text-gradient-gold">24</p>
                  <p className="text-sm text-muted-foreground">ساعة للرد</p>
                </div>
                <div className="bg-card rounded-xl p-6 text-center shadow-card border border-gold/10">
                  <p className="text-3xl font-bold text-gradient-gold">98%</p>
                  <p className="text-sm text-muted-foreground">رضا العملاء</p>
                </div>
              </div>
            </motion.div>
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
              جاهز لبدء الاستثمار؟
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              سجّل الآن وابدأ رحلتك الاستثمارية مع وساطة كابيتال
            </p>
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
              سجّل الآن
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
