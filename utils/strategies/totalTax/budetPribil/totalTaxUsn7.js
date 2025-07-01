export const totalTaxUsn7 = {
  key: 'totalTaxUsn7',
  label: 'Всего налогов',
  dependsOn: ['ndsToPay', 'taxProfit7Usn7'],
  calculate: ({ ndsToPay , taxProfit7Usn7 }) => {
    const nds = (parseFloat(ndsToPay) || 0);
    const tax = (parseFloat(taxProfit7Usn7) || 0);
    return tax + nds;
  },
};