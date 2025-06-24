import React from 'react';
import ResultHeader from '@/app/components/ResultTable/ResultHeader/ResultHeader';
import ResultRow from '@/app/components/ResultTable/ResultRow/ResultRow';

export default function ResultForm({ results, values }) {
  const sections = [
    {
        title: 'СиР',
        subSections: [
            { title: 'Какая будет прибыль', taxTypes: ['НДС 20%', 'НДС 20% Закуп НДС 0%', 'УСН 6% НДС 0,5,7%', 'НДС 0%'] },
            { title: 'За сколько продавать', taxTypes: ['НДС 20%', 'УСН 6% НДС 0,5,7%', 'УСН ДР 7% (НДС 0,5,7%)'] }
        ]
    },
    {
        title: 'СиР ПП (УСН 6%)',
        subSections: [
            { title: 'Прямой расчет', taxTypes: ['УСН 6% (НДС 0,5,7%)'] },
            { title: 'За сколько продавать', taxTypes: ['УСН 6% (НДС 0,5,7%)'] }
        ]
    },
    {
        title: '',
        subSections: [ 
            {title: 'Экспорт', taxTypes: ['Экспорт']}
        ]
    },
    {
        title: 'ИП ДР 7%',
        subSections: [
            { title: 'Прямой расчет', taxTypes: ['УСН ДР 7% (НДС 0,5,7%)'] },
            { title: 'За сколько продавать', taxTypes: ['УСН ДР 7% (НДС 0,5,7%)'] }
        ]
    },
    {
        title: 'ИП ДР 7%',
        subSections: [
            { title: 'Прямой расчет', taxTypes: ['УСН ДР 7% (НДС 20%)'] },
            { title: 'За сколько продавать', taxTypes: ['УСН ДР 7% (НДС 20%)'] }
        ]
    }
  ];

  const rows = [
    { id: 'buy', label: 'Закуп', value: values.buy },
    { id: 'nds20', label: 'НДС 20%', strategy: 'totalCost' },
    { id: 'markup', label: 'Наценка', value: values.markup },
    { id: 'sale', label: 'Продажа', value: values.sale },
    { id: 'saleNds', label: 'НДС с продаж', strategy: 'totalCost' },
    { id: 'profitTaxBase', label: 'База налога на прибыль', strategy: 'profit' },
    { id: 'profitRate', label: 'Ставка, прибыль %', strategy: 'totalCost' },
    { id: 'ndsToPay', label: 'НДС к уплате', strategy: 'netCost' },
    { id: 'profitTax', label: 'Налог на прибыль', strategy: 'netCost' },
    { id: 'totalTax', label: 'Всего налогов', strategy: 'totalCost' },
    { id: 'profit', label: 'Прибыль', strategy: 'profit' },
    { id: 'profitPercent', label: '% прибыли', strategy: 'totalCost' },
    { id: 'totalCostWithLoss', label: 'Итого цена Договора с учетом потери стоимости', strategy: 'totalCost' },
    { id: 'totalCostWithLossAndAdvancePercent', label: 'Итого цена Договора с учетом потери стоимости при авансировании, %', strategy: 'totalCost' },
    { id: 'totalCostWithLossAndAdvanceAmount', label: 'Итого цена Договора с учетом потери стоимости при авансировании, сумма', strategy: 'totalCost' },
    { id: 'contractPriceUSD', label: 'Цена Договора в USD', strategy: 'totalCost' },
    { id: 'contractPriceEURO', label: 'Цена Договора в EURO', strategy: 'totalCost' },
    { id: 'exchangeDiffUSD', label: 'Курсовая разница в USD', strategy: 'profit' },
    { id: 'exchangeDiffEURO', label: 'Курсовая разница в EURO', strategy: 'profit' },
    { id: 'totalContractUSD', label: 'Итог по договору в USD', strategy: 'totalCost' },
    { id: 'totalContractEURO', label: 'Итог по договору в EURO', strategy: 'totalCost' }
  ];


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
