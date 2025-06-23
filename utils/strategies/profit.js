// calculator/strategies/profit.js
export const profit = {
  key: 'profit',
  label: 'Чистая прибыль',
  dependsOn: ['sale', 'buy'],
  calculate: ({ sale, buy }) => {
    return (parseFloat(sale) || 0) - (parseFloat(buy) || 0);
  },
};
