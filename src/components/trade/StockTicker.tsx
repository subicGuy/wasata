import { motion } from 'framer-motion';

const stocks = [
  { symbol: 'AAPL', price: '189.25', change: '+2.34%', up: true },
  { symbol: 'MSFT', price: '378.91', change: '+1.12%', up: true },
  { symbol: 'GOOGL', price: '141.80', change: '-0.45%', up: false },
  { symbol: 'AMZN', price: '178.25', change: '+1.89%', up: true },
  { symbol: 'TSLA', price: '248.50', change: '-1.23%', up: false },
  { symbol: 'META', price: '505.75', change: '+3.21%', up: true },
  { symbol: 'NVDA', price: '875.30', change: '+4.56%', up: true },
  { symbol: 'BRK.B', price: '408.20', change: '+0.78%', up: true },
  { symbol: 'JPM', price: '198.45', change: '-0.32%', up: false },
  { symbol: 'V', price: '279.80', change: '+1.45%', up: true },
];

export const StockTicker = () => {
  const duplicatedStocks = [...stocks, ...stocks, ...stocks];

  return (
    <div className="w-full overflow-hidden bg-foreground/95 backdrop-blur-sm py-3 border-y border-gold/20">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ['0%', '-33.33%'] }}
        transition={{
          x: {
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
      >
        {duplicatedStocks.map((stock, index) => (
          <div key={`${stock.symbol}-${index}`} className="flex items-center gap-3">
            <span className="font-bold text-background">{stock.symbol}</span>
            <span className="text-muted">${stock.price}</span>
            <span className={stock.up ? 'text-green-400' : 'text-red-400'}>
              {stock.change}
            </span>
            <span className={`text-lg ${stock.up ? 'text-green-400' : 'text-red-400'}`}>
              {stock.up ? '▲' : '▼'}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
