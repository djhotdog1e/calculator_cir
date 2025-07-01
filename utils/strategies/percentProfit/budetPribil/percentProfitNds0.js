export const percentProfitNds0 = {
  key: 'percentProfitNds0',
  label: '% прибыль',
  dependsOn: ['sale', 'profitNds0'],
  calculate: ({ sale , profitNds0 }) => {
    const sale1 = (parseFloat(sale) || 0);
    const profit = (parseFloat(profitNds0) || 0);
    return profit / sale1 * 100;
  },
};