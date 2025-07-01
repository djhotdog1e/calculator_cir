export const percentProfitUsn7 = {
  key: 'percentProfitUsn7',
  label: '% прибыль',
  dependsOn: ['sale', 'profitUsn7'],
  calculate: ({ sale , profitUsn7 }) => {
    const sale1 = (parseFloat(sale) || 0);
    const profit = (parseFloat(profitUsn7) || 0);
    return profit / sale1 * 100;
  },
};