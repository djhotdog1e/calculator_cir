export const profitUsn6ZaSkolko = {
  key: 'profitUsn6ZaSkolko',
  label: 'Прибыль',
  dependsOn: ['buy', 'saleFields', 'totalTaxUsn6ZaSkolko'],
  calculate: ({ buy, saleFields , totalTaxUsn6ZaSkolko }) => {
    const buy1 = (parseFloat(buy) || 0);
    const sale1 = (parseFloat(saleFields) || 0);
    const tax = (parseFloat(totalTaxUsn6ZaSkolko) || 0);
    return sale1 - buy1 - tax;
  },
};