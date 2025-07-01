export const taxProfit7Usn7ZaSkolko = {
  key: 'taxProfit7Usn7ZaSkolko',
  label: 'База прибыль',
  dependsOn: ['buy', 'saleFields', 'profitRate7', 'ndsToPayZaSkolko'],
  calculate: ({ buy, saleFields, profitRate7, ndsToPayZaSkolko }) => {
    const tax = (parseFloat(saleFields) || 0) - (parseFloat(buy) || 0) - (parseFloat(ndsToPayZaSkolko) || 0);
    const rate = (parseFloat(profitRate7) || 0);
    return tax * rate / 100;
  },
};