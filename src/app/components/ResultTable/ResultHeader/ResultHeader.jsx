import React from 'react';

export default function ResultHeader({ sections }) {
  
  const getTaxTypesCount = (section) => {
    return section.subSections.reduce((count, subSection) => count + subSection.taxTypes.length, 0);
  };
  
  return (
    <>
      <div className="border p-2"></div>
      
      {sections.map((section, sectionIndex) => {
        const colSpan = getTaxTypesCount(section);
        return (
          <div 
            key={`section-${sectionIndex}`}
            className="border p-2 text-center font-semibold"
            style={{ gridColumn: `span ${colSpan}` }}
          >
            {section.title}
          </div>
        );
      })}
      
      <div className="border p-2"></div>
      {sections.map((section, sectionIndex) => 
        section.subSections.map((subSection, subSectionIndex) => (
          <div 
            key={`subsection-${sectionIndex}-${subSectionIndex}`}
            className="border p-2 text-center font-medium"
            style={{ gridColumn: `span ${subSection.taxTypes.length}` }}
          >
            {subSection.title}
          </div>
        ))
      )}
      
      <div className="border p-2"></div>
      {sections.map((section) => 
        section.subSections.map((subSection) => 
          subSection.taxTypes.map((taxType, taxTypeIndex) => (
            <div 
              key={`tax-type-${taxType}-${taxTypeIndex}`}
              className="border p-2 text-center text-sm"
            >
              {taxType}
            </div>
          ))
        )
      )}
    </>
  );
}
