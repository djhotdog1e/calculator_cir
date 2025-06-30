export const totalTaxUsn7Nds20ZaSkolko = {
  key: 'totalTaxUsn7Nds20ZaSkolko',
  label: 'Всего налогов',
  dependsOn: ['nds20ToPayZaSkolko', 'taxProfit7Usn7Nds20ZaSkolko'],
  calculate: ({ nds20ToPayZaSkolko , taxProfit7Usn7Nds20ZaSkolko }) => {
    const nds = (parseFloat(nds20ToPayZaSkolko) || 0);
    const tax = (parseFloat(taxProfit7Usn7Nds20ZaSkolko) || 0);
    return tax + nds;
  },
};