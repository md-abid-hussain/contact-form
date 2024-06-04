interface CustomInputLabelProps
  extends Omit<React.HTMLProps<HTMLLabelElement>, "className"> {}

const CustomInputLabel = ({ ...inputLabelProps }: CustomInputLabelProps) => {
  return (
    <label
      {...inputLabelProps}
      className="after:content-['*'] after:pl-2 after:text-primary-green-600 mb-4"
    >
      {inputLabelProps.label}
    </label>
  );
};

export default CustomInputLabel;
