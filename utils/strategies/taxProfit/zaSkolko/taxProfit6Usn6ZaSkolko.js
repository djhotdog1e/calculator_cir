export const taxProfit6Usn6ZaSkolko = {
  key: 'taxProfit6Usn6ZaSkolko',
  label: 'База прибыль',
  dependsOn: ['saleFields', 'profitRate6', 'ndsToPayZaSkolko'],
  calculate: ({ saleFields, profitRate6, ndsToPayZaSkolko }) => {
    const tax = (parseFloat(saleFields) || 0) - (parseFloat(ndsToPayZaSkolko) || 0);
    const rate = (parseFloat(profitRate6) || 0);
    return tax * rate / 100;
  },
};