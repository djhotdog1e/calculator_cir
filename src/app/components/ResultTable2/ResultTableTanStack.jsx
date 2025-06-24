import React, { useMemo } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';

export default function ResultForm({ results = {}, values = {} }) {
  const columns = useMemo(
    () => [
      {
        header: '',
        accessorKey: 'label',
        size: 100,
      },
      {
        header: 'СиР',
        columns: [
          {
            header: 'Какая будет прибыль',
            columns: [
              { header: 'НДС 20%', accessorKey: 'sir_profit_nds20' },
              { header: 'НДС 20% Закуп НДС 0%', accessorKey: 'sir_profit_nds20_zero' },
              { header: 'УСН 6% НДС 0,5,7%', accessorKey: 'sir_profit_usn6' },
              { header: 'НДС 0%', accessorKey: 'sir_profit_nds0' },
            ],
          },
          {
            header: 'За сколько продавать',
            columns: [
              { header: 'НДС 20%', accessorKey: 'sir_sale_nds20' },
              { header: 'УСН 6% НДС 0,5,7%', accessorKey: 'sir_sale_usn6' },
              { header: 'УСН ДР 7% (НДС 0,5,7%)', accessorKey: 'sir_sale_usn_dr7' },
            ],
          },
        ],
      },
      {
        header: 'Экспорт',
        columns: [
          { header: 'Экспорт', accessorKey: 'export' },
        ],
      },
      {
        header: 'ИП Д.Р. 7%',
        columns: [
          {
            header: 'Прямой расчет',
            columns: [
              {
                header: 'УСН Д.Р. 7%',
                columns: [
                  { header: 'НДС 0,5,7%', accessorKey: 'ip_dr7_direct_usn' },
                  { header: 'НДС 20%', accessorKey: 'ip_dr7_direct_nds20' },
                ],
              },
            ],
          },
          {
            header: 'За сколько продавать',
            columns: [
              {
                header: 'УСН Д.Р. 7%',
                columns: [
                  { header: 'НДС 0,5,7%', accessorKey: 'ip_dr7_sell_usn' },
                  { header: 'НДС 20%', accessorKey: 'ip_dr7_sell_nds20' },
                ],
              },
            ],
          },
        ],
      },
    ],
    []
  );

  const getCellValue = (row, results) => {
    if (row.value !== undefined) return row.value;
    if (row.strategy && results[row.strategy] !== undefined) return results[row.strategy];
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
      { id: 'totalContractEURO', label: 'Итог по договору в EURO', strategy: 'totalCost' },
    ];

    return rows.map(row => {
      let rowData = { label: row.label };
      function fillFields(cols) {
        cols.forEach(col => {
          if (col.accessorKey && col.accessorKey !== 'label') {
            rowData[col.accessorKey] = getCellValue(row, results);
          } else if (col.columns) {
            fillFields(col.columns);
          }
        });
      }
      fillFields(columns);
      return rowData;
    });
  }, [results, values, columns]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full border text-sm border-separate border-spacing-0">
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header, i) => (
                <th
                  key={header.id}
                  colSpan={header.colSpan}
                  className="border px-2 py-1 text-center font-semibold text-center">
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell, i) => (
                <td
                  key={cell.id}
                  className={[
                    "border px-2 py-1", i === 0 ? "text-center font-semibold" : "text-center"].join(" ")}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext()) || ''}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
