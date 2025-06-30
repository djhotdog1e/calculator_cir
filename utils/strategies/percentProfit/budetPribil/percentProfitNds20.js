export const percentProfitNds20 = {
  key: 'percentProfitNds20',
  label: '% прибыль',
  dependsOn: ['sale', 'profitNds20'],
  calculate: ({ sale , profitNds20 }) => {
    const sale1 = (parseFloat(sale) || 0);
    const profit = (parseFloat(profitNds20) || 0);
    return profit / sale1 * 100;
  },
};