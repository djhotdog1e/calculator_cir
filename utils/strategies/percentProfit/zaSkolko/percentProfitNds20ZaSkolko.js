export const percentProfitNds20ZaSkolko = {
  key: 'percentProfitNds20ZaSkolko',
  label: '% прибыль',
  dependsOn: ['saleFields', 'profitNds20ZaSkolko'],
  calculate: ({ saleFields , profitNds20ZaSkolko }) => {
    const sale1 = (parseFloat(saleFields) || 0);
    const profit = (parseFloat(profitNds20ZaSkolko) || 0);
    return profit / sale1 * 100;
  },
};