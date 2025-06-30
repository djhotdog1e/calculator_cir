export const totalTaxUsn7ZaSkolko = {
  key: 'totalTaxUsn7ZaSkolko',
  label: 'Всего налогов',
  dependsOn: ['ndsToPayZaSkolko', 'taxProfit7Usn7ZaSkolko'],
  calculate: ({ ndsToPayZaSkolko , taxProfit7Usn7ZaSkolko }) => {
    const nds = (parseFloat(ndsToPayZaSkolko) || 0);
    const tax = (parseFloat(taxProfit7Usn7ZaSkolko) || 0);
    return tax + nds;
  },
};