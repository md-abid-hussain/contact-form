interface CustomInputLabelProps
  extends Omit<React.HTMLProps<HTMLLabelElement>, "className"> {}

const CustomInputLabel = ({
  label,
  ...inputLabelProps
}: CustomInputLabelProps) => {
  return (
    <label
      {...inputLabelProps}
      className="after:content-['*'] after:pl-2 after:text-primary-green-600 mb-2 text-neutral-grey-900"
    >
      {label}
    </label>
  );
};

export default CustomInputLabel;
