export const profitUsn6 = {
  key: 'profitUsn6',
  label: 'Прибыль',
  dependsOn: ['buy', 'sale', 'totalTaxUsn6'],
  calculate: ({ buy, sale , totalTaxUsn6 }) => {
    const buy1 = (parseFloat(buy) || 0);
    const sale1 = (parseFloat(sale) || 0);
    const tax = (parseFloat(totalTaxUsn6) || 0);
    return sale1 - buy1 - tax;
  },
};