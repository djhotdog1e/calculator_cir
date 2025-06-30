export const totalTaxNds20Buy0 = {
  key: 'totalTaxNds20Buy0',
  label: 'Всего налогов',
  dependsOn: ['ndsSale', 'taxProfit25Nds20Buy0'],
  calculate: ({ ndsSale , taxProfit25Nds20Buy0 }) => {
    const nds = (parseFloat(ndsSale) || 0);
    const tax = (parseFloat(taxProfit25Nds20Buy0) || 0);
    return tax + nds;
  },
};