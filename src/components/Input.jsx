const Input = ({ name, className, size, label, pattern, testId, elRef, ...props }) => (
  <>
    {label ? <label className="text-gray-700">{label}</label> : ''}
    <input
      id={name}
      name={name}
      ref={elRef}
      type="text"
      pattern={pattern}
      minLength={size}
      maxLength={size}
      data-testid={testId}
      className={`w-full px-1 py-2 text-gray-500  mb-4 bg-gray-50 ${className}`}
      {...props}
    />
  </>
);

export default Input;
