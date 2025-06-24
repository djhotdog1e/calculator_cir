import React, { useMemo } from 'react';
import { ReactTabulator } from 'react-tabulator';
import 'tabulator-tables/dist/css/tabulator.min.css';

export default function ResultForm({ results, values }) {
  const columns = useMemo(() => [
    {
      title: "",
      field: "label",
      frozen: true,
      width: 200,
      headerSort: false
    },
    {
      title: "СиР",
      columns: [
        {
          title: "Какая будет прибыль", 
          columns: [
            { title: "НДС 20%", field: "sir_profit_nds20" },
            { title: "НДС 20% Закуп НДС 0%", field: "sir_profit_nds20_zero" },
            { title: "УСН 6% НДС 0,5,7%", field: "sir_profit_usn6" },
            { title: "НДС 0%", field: "sir_profit_nds0" }
          ]
        },
        {
          title: "За сколько продавать",
          columns: [
            { title: "НДС 20%", field: "sir_sale_nds20" },
            { title: "УСН 6% НДС 0,5,7%", field: "sir_sale_usn6" },
            { title: "УСН ДР 7% (НДС 0,5,7%)", field: "sir_sale_usn_dr7" }
          ]
        }
      ]
    },
    {
      title: "СиР ПП (УСН 6%)",
      columns: [
        {
          title: "Прямой расчет",
          columns: [
            { title: "УСН 6% (НДС 0,5,7%)", field: "sir_pp_direct_usn6" }
          ]
        },
        {
          title: "За сколько продавать", 
          columns: [
            { title: "УСН 6% (НДС 0,5,7%)", field: "sir_pp_sale_usn6" }
          ]
        }
      ]
    },
    {
      title: "Экспорт",
      columns: [
        { title: "Экспорт", field: "export" }
      ]
    },
    {
      title: "ИП ДР 7%",
      columns: [
        {
          title: "Прямой расчет",
          columns: [
            { title: "УСН ДР 7% (НДС 0,5,7%)", field: "ip_dr7_direct_usn" },
            { title: "УСН ДР 7%", field: "ip_dr7_direct" }
          ]
        },
        {
          title: "За сколько продавать",
          columns: [
            { title: "УСН ДР 7% (НДС 0,5,7%)", field: "ip_dr7_sale_usn" },
            { title: "УСН ДР 7%", field: "ip_dr7_sale" }
          ]
        }
      ]
    }
  ], []);

  const getCellValue = (row, results) => {
    if (row.value !== undefined) {
      return row.value;
    }
    if (row.strategy && results[row.strategy] !== undefined) {
      return results[row.strategy];
    }
    return '';
  };

  const data = useMemo(() => {
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

    return rows.map(row => {
      const rowData = { label: row.label };
      
      columns.slice(1).forEach(section => {
        if (section.columns) {
          section.columns.forEach(subSection => {
            if (subSection.columns) {
              subSection.columns.forEach(col => {
                rowData[col.field] = getCellValue(row, results);
              });
            } else {
              rowData[subSection.field] = getCellValue(row, results);
            }
          });
        } else {
          rowData[section.field] = getCellValue(row, results);
        }
      });
      
      return rowData;
    });
  }, [results, values, columns]);

  const options = {
    layout: "fitColumns",
    responsiveLayout: "hide",
    placeholder: "Нет данных",
    movableColumns: true,
    resizableColumns: true,
    columnHeaderVertAlign: "middle",
    tooltips: true,
    downloadConfig: {
      columnGroups: true,
      rowGroups: true,
      columnCalcs: true
    }
  };

  return (
    <div className="w-full">
      <ReactTabulator
        columns={columns}
        data={data}
        options={options}
      />
    </div>
  );
}
