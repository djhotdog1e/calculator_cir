import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { getHeadersExcel } from './getHeadersExcel';
import { getRowsExcel } from './getRowsExcel';

export function ExportResultTableToExcel({ sections, rows, results, fileName }) {
  const [header1, header2, header3] = getHeadersExcel(sections);
  const dataRows = rows.map(row => getRowsExcel(row, sections, results));
  const worksheetData = [header1, header2, header3, ...dataRows];

  const ws = XLSX.utils.aoa_to_sheet(worksheetData);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws);

  const file = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });

  const blob = new Blob([file]);
  saveAs(blob, fileName);
}
