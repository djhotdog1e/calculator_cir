import React from 'react';
import ResultHeader from '@/app/components/ResultTable/ResultHeader/ResultHeader';
import ResultRow from '@/app/components/ResultTable/ResultRow/ResultRow';
import { getRows } from './rows.js'
import { sections } from './sections.js'

export default function ResultForm({ results, values }) {
  const rows = getRows(values);
  const calculateTotalColumns = () => {
    let total = 1;
    sections.forEach(section => {
      section.subSections.forEach(subSection => {
        total += subSection.taxTypes.length;
      });
    });
    return total;
  };

  const totalColumns = calculateTotalColumns();

  return (
    <div className="w-full overflow-x-auto">
      <div 
        className="grid border"
        style={{ 
          gridTemplateColumns: `200px repeat(${totalColumns-1}, minmax(100px, 1fr))`,
        }}
      >
        <ResultHeader sections={sections} />
        {rows.map(row => (
          <ResultRow 
            key={row.id}
            row={row}
            sections={sections}
            results={results}
            values={values}
          />
        ))}
      </div>
    </div>
  );
}
