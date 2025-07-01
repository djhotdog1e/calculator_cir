export const percentProfitNds20Buy0 = {
  key: 'percentProfitNds20Buy0',
  label: '% прибыль',
  dependsOn: ['sale', 'profitNds20Buy0'],
  calculate: ({ sale , profitNds20Buy0 }) => {
    const sale1 = (parseFloat(sale) || 0);
    const profit = (parseFloat(profitNds20Buy0) || 0);
    return profit / sale1 * 100;
  },
};