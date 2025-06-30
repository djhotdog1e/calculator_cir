export const percentProfitUsn7Nds20ZaSkolko = {
  key: 'percentProfitUsn7Nds20ZaSkolko',
  label: '% прибыль',
  dependsOn: ['saleFields', 'profitUsn7Nds20ZaSkolko'],
  calculate: ({ saleFields , profitUsn7Nds20ZaSkolko }) => {
    const sale1 = (parseFloat(saleFields) || 0);
    const profit = (parseFloat(profitUsn7Nds20ZaSkolko) || 0);
    return profit / sale1 * 100;
  },
};