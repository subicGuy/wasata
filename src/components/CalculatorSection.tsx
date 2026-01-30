import { useState } from 'react';
import { motion } from 'framer-motion';
import { Slider } from '@/components/ui/slider';
import { Calculator } from 'lucide-react';

const portfolioOptions = [
  { id: 'saudi', name: 'محفظة السوق السعودي', returnRate: 0.39 },
  { id: 'growth', name: 'محفظة النمو', returnRate: 0.25 },
  { id: 'balanced', name: 'المحفظة المتوازنة', returnRate: 0.15 },
  { id: 'safe', name: 'المحفظة الآمنة', returnRate: 0.058 },
];

export const CalculatorSection = () => {
  const [initialDeposit, setInitialDeposit] = useState([10000]);
  const [monthlyDeposit, setMonthlyDeposit] = useState([500]);
  const [selectedPortfolio, setSelectedPortfolio] = useState('saudi');
  const years = 5;

  const currentPortfolio = portfolioOptions.find(p => p.id === selectedPortfolio) || portfolioOptions[0];
  const annualReturn = currentPortfolio.returnRate;

  // Compound interest calculation
  const calculateFutureValue = () => {
    const P = initialDeposit[0];
    const PMT = monthlyDeposit[0];
    const r = annualReturn / 12;
    const n = years * 12;

    const futureValueInitial = P * Math.pow(1 + r, n);
    const futureValueMonthly = PMT * ((Math.pow(1 + r, n) - 1) / r);
    
    return Math.round(futureValueInitial + futureValueMonthly);
  };

  const totalInvested = initialDeposit[0] + (monthlyDeposit[0] * years * 12);
  const futureValue = calculateFutureValue();
  const profit = futureValue - totalInvested;

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  return (
    <section id="calculator" className="py-10 md:py-16 bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-64 h-64 bg-gold-light/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-16 mx-auto rounded-2xl bg-gradient-gold flex items-center justify-center mb-6 shadow-gold"
          >
            <Calculator className="w-8 h-8 text-primary-foreground" />
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight whitespace-nowrap">
            احسب نتيجة <span className="text-gradient-gold">استثمارك!</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            حدد المبالغ واختر المحفظة لمعرفة القيمة المتوقعة لاستثمارك
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-3xl p-6 md:p-10 shadow-elevated border border-gold/10"
          >
            {/* Portfolio Selection */}
            <div className="mb-8">
              <label className="block text-foreground font-medium mb-4 text-center">اختر المحفظة الاستثمارية</label>
              <div className="flex flex-wrap justify-center gap-3">
                {portfolioOptions.map((portfolio) => (
                  <motion.button
                    key={portfolio.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedPortfolio(portfolio.id)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      selectedPortfolio === portfolio.id
                        ? 'bg-gradient-gold text-primary-foreground shadow-gold'
                        : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
                    }`}
                  >
                    {portfolio.name}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Inputs */}
              <div className="space-y-8">
                {/* Initial Deposit */}
                <div className="bg-secondary/30 rounded-2xl p-6">
                  <div className="flex justify-between mb-4">
                    <label className="font-medium text-foreground">حدد الدفعة الأولى</label>
                    <motion.span 
                      key={initialDeposit[0]}
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      className="text-primary font-bold text-lg"
                    >
                      {formatNumber(initialDeposit[0])} ريال
                    </motion.span>
                  </div>
                  <Slider
                    value={initialDeposit}
                    onValueChange={setInitialDeposit}
                    max={500000}
                    min={1000}
                    step={1000}
                    className="calculator-slider"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>1,000 ريال</span>
                    <span>500,000 ريال</span>
                  </div>
                </div>

                {/* Monthly Deposit */}
                <div className="bg-secondary/30 rounded-2xl p-6">
                  <div className="flex justify-between mb-4">
                    <label className="font-medium text-foreground">حدد الدفعة الشهرية</label>
                    <motion.span 
                      key={monthlyDeposit[0]}
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      className="text-primary font-bold text-lg"
                    >
                      {formatNumber(monthlyDeposit[0])} ريال
                    </motion.span>
                  </div>
                  <Slider
                    value={monthlyDeposit}
                    onValueChange={setMonthlyDeposit}
                    max={50000}
                    min={50}
                    step={50}
                    className="calculator-slider"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>50 ريال</span>
                    <span>50,000 ريال</span>
                  </div>
                </div>

                {/* Investment Details */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-secondary/30 rounded-xl p-4 text-center">
                    <p className="text-sm text-muted-foreground mb-1">فترة الاستثمار</p>
                    <p className="text-xl font-bold text-foreground">{years} سنوات</p>
                  </div>
                  <div className="bg-secondary/30 rounded-xl p-4 text-center">
                    <p className="text-sm text-muted-foreground mb-1">العائد المتوقع</p>
                    <p className="text-xl font-bold text-gradient-gold">{(annualReturn * 100).toFixed(1)}%</p>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="flex flex-col">
                <motion.div 
                  key={selectedPortfolio}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-gold rounded-3xl p-8 text-primary-foreground flex-1 flex flex-col justify-center"
                >
                  <div className="text-center mb-8">
                    <p className="text-primary-foreground/80 text-lg mb-2">قيمة المحفظة المتوقعة</p>
                    <motion.p
                      key={futureValue}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                      className="text-4xl md:text-5xl lg:text-6xl font-bold"
                    >
                      {formatNumber(futureValue)}
                    </motion.p>
                    <p className="text-primary-foreground/80 mt-2">ريال سعودي</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-t border-primary-foreground/20">
                      <span className="text-primary-foreground/80">المبلغ المستثمر</span>
                      <motion.span 
                        key={totalInvested}
                        initial={{ x: 10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="font-bold text-lg"
                      >
                        {formatNumber(totalInvested)} ريال
                      </motion.span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-t border-primary-foreground/20">
                      <span className="text-primary-foreground/80">الأرباح المتوقعة</span>
                      <motion.span 
                        key={profit}
                        initial={{ x: 10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="font-bold text-lg"
                      >
                        {formatNumber(profit)} ريال
                      </motion.span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-t border-primary-foreground/20">
                      <span className="text-primary-foreground/80">نسبة الربح</span>
                      <motion.span 
                        key={Math.round((profit / totalInvested) * 100)}
                        initial={{ x: 10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="font-bold text-lg"
                      >
                        {Math.round((profit / totalInvested) * 100)}%
                      </motion.span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Disclaimer */}
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-xs text-muted-foreground text-center mt-8 bg-secondary/30 rounded-xl p-4"
            >
              ⚠️ هذه التوقعات مبنية على الأداء التاريخي لمحافظ وساطة المالية ولا يوجد أي ضمانات فيما يتعلق بقيمة التوقعات المستقبلية
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
