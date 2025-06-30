export const totalTaxNds20 = {
  key: 'totalTaxNds20',
  label: 'Всего налогов',
  dependsOn: ['nds20ToPay', 'taxProfit25Nds20'],
  calculate: ({ nds20ToPay , taxProfit25Nds20 }) => {
    const nds = (parseFloat(nds20ToPay) || 0);
    const tax = (parseFloat(taxProfit25Nds20) || 0);
    return tax + nds;
  },
};