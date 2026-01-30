import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import logoWasatah from '@/assets/logo-wasatah.png';

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-10 md:py-16">
      <div className="container mx-auto px-4">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ابدأ رحلتك الاستثمارية
          </h2>
          <p className="text-background/60 mb-6 max-w-xl mx-auto">
            حمّل تطبيق وساطة كابيتال الآن وابدأ في بناء مستقبلك المالي
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg">
              سجّل الآن
            </Button>
            <Button variant="outline" size="lg" className="border-background/30 text-background hover:bg-background/10 bg-transparent">
              اطلب العروض
            </Button>
          </div>
        </motion.div>

        {/* Footer Links */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Logo */}
            <div className="flex items-center bg-background/60 rounded-lg px-4 py-2">
              <img
                src={logoWasatah}
                alt="وساطة كابيتال"
                className="h-14 md:h-16 w-auto"
              />
            </div>

            {/* Links */}
            <div className="flex gap-6 text-sm text-background/60">
              <Link to="/privacy-policy" className="hover:text-background transition-colors">سياسة الخصوصية</Link>
              <Link to="/terms-conditions" className="hover:text-background transition-colors">الشروط والأحكام</Link>
              <Link to="/contact" className="hover:text-background transition-colors">اتصل بنا</Link>
            </div>

            {/* Copyright */}
            <p className="text-sm text-background/40">
              © 2026 وساطة كابيتال. جميع الحقوق محفوظة
            </p>
          </div>
          
          {/* License & Address Info */}
          <div className="mt-6 pt-6 border-t border-background/10 text-center space-y-2">
            <p className="text-sm text-background/50">
              7459 شارع العليا، حي المروج، الرياض 12283 | العنوان المختصر: RHGA7459
            </p>
            <p className="text-sm text-background/50">
              سجل تجاري: <span className="text-background/70 font-medium">1010241832</span> | شركة مرخصة من هيئة السوق المالية | رقم الترخيص: <span className="text-background/70 font-medium">0812537</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
