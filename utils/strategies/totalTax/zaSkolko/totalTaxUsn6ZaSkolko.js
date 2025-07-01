export const totalTaxUsn6ZaSkolko = {
  key: 'totalTaxUsn6ZaSkolko',
  label: 'Всего налогов',
  dependsOn: ['ndsToPayZaSkolko', 'taxProfit6Usn6ZaSkolko'],
  calculate: ({ ndsToPayZaSkolko , taxProfit6Usn6ZaSkolko }) => {
    const nds = (parseFloat(ndsToPayZaSkolko) || 0);
    const tax = (parseFloat(taxProfit6Usn6ZaSkolko) || 0);
    return tax + nds;
  },
};