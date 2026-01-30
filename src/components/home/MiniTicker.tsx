import { motion } from 'framer-motion';

const stocks = [
  { symbol: 'AAPL', price: '189.25', change: '+2.34%', up: true },
  { symbol: 'تداول', price: '12,450', change: '+0.85%', up: true },
  { symbol: 'أرامكو', price: '28.15', change: '-0.32%', up: false },
  { symbol: 'MSFT', price: '378.91', change: '+1.12%', up: true },
  { symbol: 'الراجحي', price: '95.20', change: '+1.45%', up: true },
  { symbol: 'GOOGL', price: '141.80', change: '-0.45%', up: false },
  { symbol: 'سابك', price: '87.60', change: '+0.67%', up: true },
  { symbol: 'NVDA', price: '875.30', change: '+4.56%', up: true },
  { symbol: 'AMZN', price: '178.25', change: '+1.89%', up: true },
  { symbol: 'stc', price: '42.35', change: '-0.78%', up: false },
  { symbol: 'TSLA', price: '248.50', change: '-1.23%', up: false },
  { symbol: 'الأهلي', price: '38.90', change: '+0.52%', up: true },
  { symbol: 'META', price: '505.75', change: '+3.21%', up: true },
  { symbol: 'معادن', price: '52.80', change: '+1.15%', up: true },
  { symbol: 'BRK.B', price: '408.20', change: '+0.78%', up: true },
  { symbol: 'زين', price: '12.45', change: '-0.24%', up: false },
  { symbol: 'JPM', price: '198.45', change: '-0.32%', up: false },
  { symbol: 'البنك السعودي', price: '45.60', change: '+0.95%', up: true },
  { symbol: 'V', price: '279.80', change: '+1.45%', up: true },
  { symbol: 'اتصالات', price: '98.30', change: '+0.88%', up: true },
  { symbol: 'DIS', price: '112.45', change: '+1.67%', up: true },
  { symbol: 'الإنماء', price: '28.75', change: '+0.42%', up: true },
  { symbol: 'NFLX', price: '628.90', change: '+2.15%', up: true },
  { symbol: 'البلاد', price: '42.30', change: '-0.55%', up: false },
  { symbol: 'AMD', price: '156.80', change: '+3.45%', up: true },
  { symbol: 'أسمنت', price: '67.40', change: '+0.28%', up: true },
  { symbol: 'ORCL', price: '125.60', change: '+1.92%', up: true },
  { symbol: 'دار الأركان', price: '15.85', change: '-0.65%', up: false },
  { symbol: 'CRM', price: '298.45', change: '+2.78%', up: true },
  { symbol: 'جرير', price: '158.20', change: '+0.95%', up: true },
  { symbol: 'PYPL', price: '68.90', change: '-1.12%', up: false },
  { symbol: 'المراعي', price: '58.60', change: '+0.75%', up: true },
  { symbol: 'INTC', price: '42.15', change: '+0.88%', up: true },
  { symbol: 'موبايلي', price: '52.40', change: '+1.25%', up: true },
  { symbol: 'CSCO', price: '52.80', change: '+0.65%', up: true },
  { symbol: 'الكهرباء', price: '18.95', change: '-0.38%', up: false },
  { symbol: 'BA', price: '178.90', change: '-2.15%', up: false },
  { symbol: 'أكوا باور', price: '385.60', change: '+1.85%', up: true },
  { symbol: 'WMT', price: '165.30', change: '+0.92%', up: true },
  { symbol: 'بنك الجزيرة', price: '19.85', change: '+0.55%', up: true },
];

export const MiniTicker = () => {
  // Duplicate stocks 4 times for seamless infinite loop
  const duplicatedStocks = [...stocks, ...stocks, ...stocks, ...stocks];

  return (
    <div className="w-full overflow-hidden bg-foreground/5 backdrop-blur-sm py-3 border-y border-gold/10">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          x: {
            duration: 60,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
      >
        {duplicatedStocks.map((stock, index) => (
          <div key={`${stock.symbol}-${index}`} className="flex items-center gap-3 text-sm">
            <span className="font-bold text-foreground">{stock.symbol}</span>
            <span className="text-muted-foreground">{stock.price}</span>
            <span className={`flex items-center gap-1 ${stock.up ? 'text-green-500' : 'text-red-500'}`}>
              <span className="text-xs">{stock.up ? '▲' : '▼'}</span>
              {stock.change}
            </span>
            <span className="text-gold/30">|</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
