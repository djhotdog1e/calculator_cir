import React from 'react';
import ResultCell from '@/app/components/ResultTable/ResultCell/ResultCell';

export default function ResultRow({ row, sections, results }) {

  const FORMATTED_ROWS = ['markup', 'profitPercent', 'totalCostWithLossAndAdvancePercent', 'profitRate'];

  const shouldFormat = FORMATTED_ROWS.includes(row.id);

  const formatValue = (value) => {
    if (typeof value !== 'number') return value;
    return shouldFormat ? value.toFixed(2) : Math.round(value);
  };

  const getCellValue = (section, subSection, taxType) => {
    const strategyKeys = [
      `${section.title}|${subSection.title}|${taxType}`, // 1. Полный путь
      subSection.title,  // 2. Только подсекция 
      taxType,  // 3. Только taxType
    ];

    // Поиск по ключу
    for (const key of strategyKeys) {
      if (row.strategies?.[key] !== undefined && results[row.strategies[key]] !== undefined) {
        return formatValue(results[row.strategies[key]]);
      }
    }

    // Общая стратегия для всей строки
    if (row.strategy && results[row.strategy] !== undefined) {
      return formatValue(results[row.strategy]);
    }

    // Значение по умолчанию
    return formatValue(row.value ?? '0');
  };

  return (
    <>
      <div className="border p-2 font-medium">
        {row.label}
      </div>
      
      {sections.map((section, sectionIndex) => 
        section.subSections.map((subSection) => 
          subSection.taxTypes.map((taxType) => (
            <ResultCell 
              key={`cell-${row.id}-${section.title}-${subSection.title}-${taxType}`}
              value={getCellValue(section, subSection, taxType)}
            />
          ))
        )
      )}
    </>
  );
}