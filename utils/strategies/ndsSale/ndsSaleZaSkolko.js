//для полей за сколько продавать и ндс 20%

export const ndsSaleZaSkolko = {
  key: 'ndsSaleZaSkolko',
  label: 'НДС с продаж',
  dependsOn: ['buy', 'markup'],
  calculate: ({ buy, markup}) => {
    const buySale = (parseFloat(buy) || 0);
    const markupSale = (parseFloat(markup) || 0);
    return (buySale * markupSale/100 + buySale) * 20 / 120;
  },
};