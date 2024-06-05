import { UseFormRegister } from "react-hook-form";
import { FormInputType } from "../App";

type CustomRadioInputProps = Omit<
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

const CustomRadioInput = ({
  fieldId,
  label,
  register,
  ...radioProps
}: CustomRadioInputProps) => {
  const selectedColor = radioProps.checked ? "bg-primary-green-200" : "";
  return (
    <label
      htmlFor={radioProps.id}
      className={
        "flex flex-1 items-center gap-3 border-2 border-neutral-grey-500 rounded-lg py-3 px-[14px] mb-[0.75rem] cursor-pointer " +
        selectedColor
      }
    >
      <input
        type="radio"
        {...radioProps}
        {...register(fieldId)}
        className=" size-5 accent-primary-green-600 cursor-pointer"
      />
      <span>{label}</span>
    </label>
  );
};

export default CustomRadioInput;
