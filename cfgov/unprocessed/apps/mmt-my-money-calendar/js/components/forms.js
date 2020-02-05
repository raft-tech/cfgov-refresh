import clsx from 'clsx';

export const Checkbox = ({ id, name, onChange, checked, label, value = '1', ...props }) => (
  <div className="m-form-field m-form-field__checkbox">
    <input className="a-checkbox" type="checkbox" name={name} id={id} onChange={onChange} checked={checked} value={value} {...props} />
    <label className="a-label" htmlFor={id}>{label}</label>
  </div>
);

export const TextField = ({ id, name, type = 'text', onChange, onBlur, label, value, ...props }) => (
  <div className="m-form-field m-form-field__text">
    <label className="a-label a-label__heading" htmlFor={id}>{label}</label>
    <input
      type={type}
      className="a-text-input"
      id={id}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      {...props}
    />
  </div>
);
