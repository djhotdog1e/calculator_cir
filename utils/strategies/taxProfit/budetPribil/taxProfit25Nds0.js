export const taxProfit25Nds0 = {
  key: 'taxProfit25Nds0',
  label: 'База прибыль',
  dependsOn: ['profit', 'profitRate25',],
  calculate: ({ profit, profitRate25 }) => {
    const tax = (parseFloat(profit) || 0);
    const rate = (parseFloat(profitRate25) || 0);
    return tax * rate / 100;
  },
};