export const totalTaxNds20ZaSkolko = {
  key: 'totalTaxNds20ZaSkolko',
  label: 'Всего налогов',
  dependsOn: ['nds20ToPayZaSkolko', 'taxProfit25Nds20ZaSkolko'],
  calculate: ({ nds20ToPayZaSkolko , taxProfit25Nds20ZaSkolko }) => {
    const nds = (parseFloat(nds20ToPayZaSkolko) || 0);
    const tax = (parseFloat(taxProfit25Nds20ZaSkolko) || 0);
    return tax + nds;
  },
};