export const totalTaxUsn7Nds20 = {
  key: 'totalTaxUsn7Nds20',
  label: 'Всего налогов',
  dependsOn: ['nds20ToPay', 'taxProfit7Usn7Nds20'],
  calculate: ({ nds20ToPay , taxProfit7Usn7Nds20 }) => {
    const nds = (parseFloat(nds20ToPay) || 0);
    const tax = (parseFloat(taxProfit7Usn7Nds20) || 0);
    return tax + nds;
  },
};