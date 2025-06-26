//для ндс 20

export const nds20ToPay = {
  key: 'nds20ToPay',
  label: 'НДС к уплате',
  dependsOn: ['buy', 'sale'],
  calculate: ({ buy, sale }) => {
    const buyNdsPay = (parseFloat(buy) || 0);
    const saleNdsPay = (parseFloat(sale) || 0);
    return (saleNdsPay*20/120) - (buyNdsPay*20/120);
  },
};