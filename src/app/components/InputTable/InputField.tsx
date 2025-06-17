export default function InputField({ type, name, value, onChange, ...props }) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
}