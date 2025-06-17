import TableRow from './TableRow';

export default function TableForm({ fields, values, onChange }) {
  return (
    <form>
      {fields.map((row, idx) => (
        <TableRow
          key={idx}
          row={row}
          values={values}
          onChange={onChange}
        />
      ))}
    </form>
  );
}