export const percentProfitUsn6ZaSkolko = {
  key: 'percentProfitUsn6ZaSkolko',
  label: '% прибыль',
  dependsOn: ['saleFields', 'profitUsn6ZaSkolko'],
  calculate: ({ saleFields , profitUsn6ZaSkolko }) => {
    const sale1 = (parseFloat(saleFields) || 0);
    const profit = (parseFloat(profitUsn6ZaSkolko) || 0);
    return profit / sale1 * 100;
  },
};