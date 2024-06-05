import { UseFormRegister } from "react-hook-form";
import { FormInputType } from "../App";
type CustomCheckboxInputProps = Omit<
  React.HTMLProps<HTMLInputElement>,
  "type" | "className"
> & {
  label: string;
  register: UseFormRegister<FormInputType>;
  fieldId:
    | "email"
    | "first_name"
    | "last_name"
    | "query_type"
    | "message"
    | "agree";
};

const CustomCheckboxInput = ({
  label,
  register,
  fieldId,
  ...checkboxProps
}: CustomCheckboxInputProps) => {
  return (
    <label htmlFor={checkboxProps.id} className="flex items-center gap-4 p-1">
      <input
        type="checkbox"
        {...checkboxProps}
        {...register(fieldId)}
        className="size-[1.25rem] accent-primary-green-600 cursor-pointer"
      />
      <span className="after:content-['*'] after:pl-2 after:text-primary-green-600 cursor-pointer">
        {label}
      </span>
    </label>
  );
};

export default CustomCheckboxInput;
