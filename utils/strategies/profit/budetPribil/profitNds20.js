export const profitNds20 = {
  key: 'profitNds20',
  label: 'Прибыль',
  dependsOn: ['buy', 'sale', 'totalTaxNds20'],
  calculate: ({ buy, sale , totalTaxNds20 }) => {
    const buy1 = (parseFloat(buy) || 0);
    const sale1 = (parseFloat(sale) || 0);
    const tax = (parseFloat(totalTaxNds20) || 0);
    return sale1 - buy1 - tax;
  },
};