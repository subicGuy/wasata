import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import shariaMember1 from '@/assets/sharia-member-1.png';
import shariaMember2 from '@/assets/sharia-member-2.png';
import shariaMember3 from '@/assets/sharia-member-3.png';

const committeeMembers = [
  {
    name: 'أ.د. يوسف الشبيلي',
    role: 'رئيساً',
    image: shariaMember2,
  },
  {
    name: 'د. فيصل الشمري',
    role: 'عضواً',
    image: shariaMember1,
  },
  {
    name: 'عبدالعزيز الدميجي',
    role: 'عضواً',
    image: shariaMember3,
  },
];

export const ShariaSection = () => {
  return (
    <section className="py-10 md:py-16 bg-card relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-light/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-20 mx-auto rounded-2xl bg-gradient-gold flex items-center justify-center mb-6 shadow-gold"
          >
            <ShieldCheck className="w-10 h-10 text-primary-foreground" />
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
            <span className="block sm:inline">استثمارات وفق</span>{' '}
            <span className="text-gradient-gold block sm:inline">الشريعة الإسلامية</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            نلتزم بأحكام الشريعة الإسلامية، حيث أن جميع استثماراتنا تخضع للجنة شرعية مؤهلة ويتم تدقيقها ومراجعتها بشكل دوري
          </p>
        </motion.div>

        {/* Committee Members */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {committeeMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="relative mb-6"
              >
                {/* Image container with gold border */}
                <div className="relative w-48 h-48 mx-auto">
                  {/* Gold ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-gold p-1 shadow-gold group-hover:shadow-elevated transition-shadow duration-300">
                    <div className="w-full h-full rounded-full bg-card overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>

                {/* Role badge */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-gold text-primary-foreground px-4 py-1 rounded-full text-sm font-medium shadow-soft"
                >
                  {member.role}
                </motion.div>
              </motion.div>

              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                {member.name}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-6"
        >
          <div className="flex items-center gap-3 bg-secondary/50 rounded-full px-6 py-3">
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-muted-foreground">مراجعة دورية</span>
          </div>
          <div className="flex items-center gap-3 bg-secondary/50 rounded-full px-6 py-3">
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-muted-foreground">تدقيق شرعي</span>
          </div>
          <div className="flex items-center gap-3 bg-secondary/50 rounded-full px-6 py-3">
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-muted-foreground">لجنة مؤهلة</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
