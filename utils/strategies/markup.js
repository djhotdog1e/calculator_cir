export const markup = {
  key: 'markupVal',
  label: 'Наценка',
  dependsOn: ['buy', 'sale',],
  calculate: ({ buy, sale }) => {
    const buyMark = (parseFloat(buy) || 1);
    const saleMark = (parseFloat(sale) || 1);
    return saleMark / buyMark * 100 - 100;
  },
};