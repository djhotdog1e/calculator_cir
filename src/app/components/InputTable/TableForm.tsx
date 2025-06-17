import TableRow from './TableRow';
import formStyles from './TableForm.module.css';
import shared from '@/app/styles/shared.module.css';

export default function TableForm({ fields, values, onChange }) {
  return (
    <form className={formStyles.form}>
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