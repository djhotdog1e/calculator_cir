export const profitNds20Buy0 = {
  key: 'profitNds20Buy0',
  label: 'Прибыль',
  dependsOn: ['buy', 'sale', 'totalTaxNds20Buy0'],
  calculate: ({ buy, sale , totalTaxNds20Buy0 }) => {
    const buy1 = (parseFloat(buy) || 0);
    const sale1 = (parseFloat(sale) || 0);
    const tax = (parseFloat(totalTaxNds20Buy0) || 0);
    return sale1 - buy1 - tax;
  },
};