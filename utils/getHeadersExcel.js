export function getHeadersExcel(sections) {
  const header1 = [''];
  sections.forEach(section => {
    const count = section.subSections.reduce((acc, sub) => acc + sub.taxTypes.length, 0);
    for (let i = 0; i < count; i++) {
      header1.push(section.title);
    }
  });

  const header2 = [''];
  sections.forEach(section => {
    section.subSections.forEach(subSection => {
      for (let i = 0; i < subSection.taxTypes.length; i++) {
        header2.push(subSection.title);
      }
    });
  });

  const header3 = [''];
  sections.forEach(section => {
    section.subSections.forEach(subSection => {
      subSection.taxTypes.forEach(taxType => {
        header3.push(taxType);
      });
    });
  });

  return [header1, header2, header3];
}
