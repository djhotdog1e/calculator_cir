export const taxProfit7Usn7 = {
  key: 'taxProfit7Usn7',
  label: 'База прибыль',
  dependsOn: ['buy', 'sale', 'profitRate7', 'ndsToPay'],
  calculate: ({ buy, sale, profitRate7, ndsToPay }) => {
    const tax = (parseFloat(sale) || 0) - (parseFloat(buy) || 0) - (parseFloat(ndsToPay) || 0);
    const rate = (parseFloat(profitRate7) || 0);
    return tax * rate / 100;
  },
};