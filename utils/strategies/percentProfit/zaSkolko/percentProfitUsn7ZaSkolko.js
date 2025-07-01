export const percentProfitUsn7ZaSkolko = {
  key: 'percentProfitUsn7ZaSkolko',
  label: '% прибыль',
  dependsOn: ['saleFields', 'profitUsn7ZaSkolko'],
  calculate: ({ saleFields , profitUsn7ZaSkolko }) => {
    const sale1 = (parseFloat(saleFields) || 0);
    const profit = (parseFloat(profitUsn7ZaSkolko) || 0);
    return profit / sale1 * 100;
  },
};