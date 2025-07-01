export const qtDays = {
  key: 'qtDays',
  label: 'Кол-во дней',
  dependsOn: ['startDate', 'endDate'],
  calculate: ({ startDate, endDate }) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    const diffTime = end - start;
    
    const total = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
    
    return total;
  },
};
