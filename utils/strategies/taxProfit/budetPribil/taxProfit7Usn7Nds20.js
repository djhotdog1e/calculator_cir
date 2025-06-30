export const taxProfit7Usn7Nds20 = {
  key: 'taxProfit7Usn7Nds20',
  label: 'База прибыль',
  dependsOn: ['buy', 'sale', 'profitRate7', 'nds20ToPay'],
  calculate: ({ buy, sale, profitRate7, nds20ToPay }) => {
    const tax = (parseFloat(sale) || 0) - (parseFloat(buy) || 0) - (parseFloat(nds20ToPay) || 0);
    const rate = (parseFloat(profitRate7) || 0);
    return tax * rate / 100;
  },
};