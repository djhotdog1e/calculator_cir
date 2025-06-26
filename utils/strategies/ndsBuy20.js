export const ndsBuy20 = {
  key: 'ndsBuy20',
  label: 'НДС 20%',
  dependsOn: ['buy'],
  calculate: ({ buy }) => {
    const buyNds = (parseFloat(buy) || 0);
    return buyNds * 20 / 120;
  },
};