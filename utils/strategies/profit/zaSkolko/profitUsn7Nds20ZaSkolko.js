export const profitUsn7Nds20ZaSkolko = {
  key: 'profitUsn7Nds20ZaSkolko',
  label: 'Прибыль',
  dependsOn: ['buy', 'saleFields', 'totalTaxUsn7Nds20ZaSkolko'],
  calculate: ({ buy, saleFields , totalTaxUsn7Nds20ZaSkolko }) => {
    const buy1 = (parseFloat(buy) || 0);
    const sale1 = (parseFloat(saleFields) || 0);
    const tax = (parseFloat(totalTaxUsn7Nds20ZaSkolko) || 0);
    return sale1 - buy1 - tax;
  },
};