export const profitUsn7Nds20 = {
  key: 'profitUsn7Nds20',
  label: 'Прибыль',
  dependsOn: ['buy', 'sale', 'totalTaxUsn7Nds20'],
  calculate: ({ buy, sale , totalTaxUsn7Nds20 }) => {
    const buy1 = (parseFloat(buy) || 0);
    const sale1 = (parseFloat(sale) || 0);
    const tax = (parseFloat(totalTaxUsn7Nds20) || 0);
    return sale1 - buy1 - tax;
  },
};