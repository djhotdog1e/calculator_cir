export const profitUsn7 = {
  key: 'profitUsn7',
  label: 'Прибыль',
  dependsOn: ['buy', 'sale', 'totalTaxUsn7'],
  calculate: ({ buy, sale , totalTaxUsn7 }) => {
    const buy1 = (parseFloat(buy) || 0);
    const sale1 = (parseFloat(sale) || 0);
    const tax = (parseFloat(totalTaxUsn7) || 0);
    return sale1 - buy1 - tax;
  },
};