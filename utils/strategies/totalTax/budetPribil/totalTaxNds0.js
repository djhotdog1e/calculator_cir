export const totalTaxNds0 = {
  key: 'totalTaxNds0',
  label: 'Всего налогов',
  dependsOn: ['taxProfit25Nds0'],
  calculate: ({ taxProfit25Nds0 }) => {
    const tax = (parseFloat(taxProfit25Nds0) || 0);
    return tax;
  },
};