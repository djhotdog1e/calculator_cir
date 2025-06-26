// для ндс 0
export const profit = {
  key: 'profit',
  label: 'Чистая прибыль',
  dependsOn: ['sale', 'buy'],
  calculate: ({ sale, buy }) => {
    return (parseFloat(sale) || 0) - (parseFloat(buy) || 0);
  },
};
