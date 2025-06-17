import inputStyles from './InputField.module.css';
import shared from '@/app/styles/shared.module.css';
export default function InputField({ inputType, name, value, onChange, options, ...props }) {

  if (inputType === "radio" && options) {
    return (
      <div className={inputStyles.radioGroup}>
        {options.map(opt => (
          <label className={inputStyles.radioLabel} key={opt.value}>
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={value === opt.value}
              onChange={onChange}
              {...props}
            />
            {opt.label}
          </label>
        ))}
      </div>
    );
  }
  return (
    <input
      className={`${shared.input} ${inputStyles.inputField}`}
      type={inputType}
      name={name}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
}
