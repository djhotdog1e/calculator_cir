import React from 'react';
import ResultCell from '@/app/components/ResultTable/ResultCell/ResultCell';

export default function ResultRow({ row, sections, results}) {
  
  const getCellValue = () => {
    if (row.value !== undefined) {
      return row.value;
    } 

    if (row.strategy && results[row.strategy] !== undefined) return results[row.strategy];
    
    return ''; 
  };
  
  return (
    <>
      <div className="border p-2 font-medium">
        {row.label}
      </div>
      
      {sections.map((section, sectionIndex) => 
        section.subSections.map((subSection) => 
          subSection.taxTypes.map((taxTypeIndex) => (
            <ResultCell 
              key={`cell-${row.id}-${sectionIndex}-${taxTypeIndex}`}
              value={getCellValue()}
            />
          ))
        )
      )}
    </>
  );
}