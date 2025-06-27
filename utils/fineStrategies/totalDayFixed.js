export const totalDayFixed = {
  key: 'totalDayFixed',
  label: 'Итог',
  dependsOn: ['fixedRate', 'qtDays'],
  calculate: ({ fixedRate, qtDays }) => {
    const total = (parseFloat(fixedRate) || 0) *(parseFloat(qtDays) || 0);
    return total;
  },
};
