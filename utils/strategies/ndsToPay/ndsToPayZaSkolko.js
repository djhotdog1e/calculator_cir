//для ндс 0, 5 , 7 за сколько продавать

export const ndsToPayZaSkolko = {
  key: 'ndsToPayZaSkolko',
  label: 'НДС к уплате',
  dependsOn: ['buy', 'markup', 'nds'],
  calculate: ({ buy, markup, nds }) => {
    const buyNdsPay = (parseFloat(buy) || 0);
    const markupNdsPay = (parseFloat(markup) || 0) / 100;
    const valNds = (parseFloat(nds || 0));
    const saleNdsPay = buyNdsPay * (1 + markupNdsPay);

    return saleNdsPay * valNds / 100;
  },
};