export const percentProfitUsn6 = {
  key: 'percentProfitUsn6',
  label: '% прибыль',
  dependsOn: ['sale', 'profitUsn6'],
  calculate: ({ sale , profitUsn6 }) => {
    const sale1 = (parseFloat(sale) || 0);
    const profit = (parseFloat(profitUsn6) || 0);
    return profit / sale1 * 100;
  },
};