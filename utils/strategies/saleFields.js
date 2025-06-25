// для полей за сколько продавать

export const saleFields = {
  key: 'saleFields',
  label: 'Продажа',
  dependsOn: ['buy', 'markup'],
  calculate: ({ buy, markup}) => {
    const buySale = (parseFloat(buy) || 0);
    const markupSale = (parseFloat(markup) || 0);
    return buySale * markupSale/100 + buySale;
  },
};