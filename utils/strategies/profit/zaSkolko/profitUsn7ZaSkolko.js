export const profitUsn7ZaSkolko = {
  key: 'profitUsn7ZaSkolko',
  label: 'Прибыль',
  dependsOn: ['buy', 'saleFields', 'totalTaxUsn7ZaSkolko'],
  calculate: ({ buy, saleFields , totalTaxUsn7ZaSkolko }) => {
    const buy1 = (parseFloat(buy) || 0);
    const sale1 = (parseFloat(saleFields) || 0);
    const tax = (parseFloat(totalTaxUsn7ZaSkolko) || 0);
    return sale1 - buy1 - tax;
  },
};