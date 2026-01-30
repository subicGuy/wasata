import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'هل شركة وساطة كابيتال مرخصة من قبل هيئة السوق المالية؟',
    answer: 'نعم، وساطة كابيتال مرخصة من هيئة السوق المالية لممارسة أنشطة إدارة الاستثمارات، التعامل، والحفظ في أعمال الأوراق المالية.',
  },
  {
    question: 'ما هو أقل مبلغ للاستثمار؟',
    answer: 'أقل مبلغ للاستثمار الأولي هو 1000 ريال سعودي. بعد ذلك بإمكانك إضافة أي مبلغ إضافي بحد أدنى 50 ريال سعودي.',
  },
  {
    question: 'هل الاستثمارات متوافقة مع الأحكام الشرعية؟',
    answer: 'نعم، جميع منتجاتنا الاستثمارية تمت مراجعتها والموافقة عليها من قبل اللجنة الشرعية لوساطة كابيتال.',
  },
  {
    question: 'ما هي الرسوم المفروضة على الخدمة؟',
    answer: 'تبلغ رسوم وساطة كابيتال 1% من الأموال المدارة للعميل في المحافظ الاستثمارية و0.5% في المحفظة الادخارية بشكل سنوي ويتم استقطاعها بشكل شهري.',
  },
  {
    question: 'هل يمكنني السحب والإيداع في أي وقت؟',
    answer: 'نعم، عن طريق تطبيق وساطة تستطيع إيداع وسحب استثماراتك في أي وقت.',
  },
];

export const FAQSection = () => {
  return (
    <section className="py-10 md:py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="inline">أسئلة </span>
            <span className="text-gradient-gold inline">شائعة</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-gold/10 px-6 shadow-card"
              >
                <AccordionTrigger className="text-right hover:text-primary hover:no-underline py-5 text-foreground font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
