export const profitNds0 = {
  key: 'profitNds0',
  label: 'Прибыль',
  dependsOn: ['buy', 'sale', 'totalTaxNds0'],
  calculate: ({ buy, sale , totalTaxNds0 }) => {
    const buy1 = (parseFloat(buy) || 0);
    const sale1 = (parseFloat(sale) || 0);
    const tax = (parseFloat(totalTaxNds0) || 0);
    return sale1 - buy1 - tax;
  },
};