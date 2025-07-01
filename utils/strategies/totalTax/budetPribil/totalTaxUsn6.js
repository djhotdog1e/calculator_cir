export const totalTaxUsn6 = {
  key: 'totalTaxUsn6',
  label: 'Всего налогов',
  dependsOn: ['ndsToPay', 'taxProfit6Usn6'],
  calculate: ({ ndsToPay , taxProfit6Usn6 }) => {
    const nds = (parseFloat(ndsToPay) || 0);
    const tax = (parseFloat(taxProfit6Usn6) || 0);
    return tax + nds;
  },
};