export const netCost = {
  key: 'netCost',
  label: 'Себестоимость без НДС',
  dependsOn: ['buy'],
  calculate: ({ buy }) => parseFloat(buy) || 0,
};