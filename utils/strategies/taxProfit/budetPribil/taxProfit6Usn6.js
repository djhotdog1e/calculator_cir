export const taxProfit6Usn6 = {
  key: 'taxProfit6Usn6',
  label: 'База прибыль',
  dependsOn: ['sale', 'profitRate6', 'ndsToPay'],
  calculate: ({ sale, profitRate6, ndsToPay }) => {
    const tax = (parseFloat(sale) || 0) - (parseFloat(ndsToPay) || 0);
    const rate = (parseFloat(profitRate6) || 0);
    return tax * rate / 100;
  },
};