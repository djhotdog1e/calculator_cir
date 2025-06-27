const FORMATTED_ROWS = ['markup', 'profitPercent', 'totalCostWithLossAndAdvancePercent'];

function formatValue(row, value) {
  if (typeof value !== 'number') return value;
  return FORMATTED_ROWS.includes(row.id) ? value.toFixed(2) : Math.round(value);
}

export function getRowsExcel(row, sections, results) {
  const rowArr = [row.label];

  sections.forEach(section => {
    section.subSections.forEach(subSection => {
      subSection.taxTypes.forEach(taxType => {
        const strategyKeys = [
          `${section.title}|${subSection.title}|${taxType}`,
          subSection.title,
          taxType,
        ];
        let value;
        for (const key of strategyKeys) {
          if (row.strategies?.[key] !== undefined && results[row.strategies[key]] !== undefined) {
            value = results[row.strategies[key]];
            break;
          }
        }
        if (value === undefined && row.strategy && results[row.strategy] !== undefined) {
          value = results[row.strategy];
        }
        if (value === undefined) value = row.value ?? '';
        rowArr.push(formatValue(row, value));
      });
    });
  });
  return rowArr;
}