//для ндс 20 за сколько продавать

export const nds20ToPayZaSkolko = {
  key: 'nds20ToPayZaSkolko',
  label: 'НДС к уплате',
  dependsOn: ['buy', 'markup'],
  calculate: ({ buy, markup }) => {
    const buyNdsPay = (parseFloat(buy) || 0);
    const markupNdsPay = (parseFloat(markup) || 0) / 100;
    const saleNdsPay = buyNdsPay * (1 + markupNdsPay);

    return saleNdsPay * 20 / 120 - buyNdsPay * 20 / 120;
  },
};