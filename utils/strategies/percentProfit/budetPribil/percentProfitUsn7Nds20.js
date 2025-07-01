export const percentProfitUsn7Nds20 = {
  key: 'percentProfitUsn7Nds20',
  label: '% прибыль',
  dependsOn: ['sale', 'profitUsn7Nds20'],
  calculate: ({ sale , profitUsn7Nds20 }) => {
    const sale1 = (parseFloat(sale) || 0);
    const profit = (parseFloat(profitUsn7Nds20) || 0);
    return profit / sale1 * 100;
  },
};