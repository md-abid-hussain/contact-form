import { FieldError, UseFormRegister } from "react-hook-form";
import CustomInputLabel from "./CustomInputLabel";
import { FormInputType } from "../App";
import CustomError from "./CustomError";

type CustomTextInputProps = Omit<
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
  errors: FieldError | undefined;
};

const CustomTextInput = ({
  label,
  register,
  fieldId,
  errors,
  ...inputProps
}: CustomTextInputProps) => {
  const isError = errors ? true : false;
  return (
    <div className="flex flex-col mb-6 flex-1">
      <CustomInputLabel htmlFor={inputProps.id} label={label} />
      <input
        type="text"
        {...inputProps}
        {...register(fieldId)}
        className={
          "border-2 border-neutral-grey-500 rounded-lg p-3 hover:border-primary-green-600 hover:cursor-pointer focus:border-primary-green-600 focus:outline-none " +
          (isError ? "border-primary-red focus:border-primary-red" : "")
        }
      />
      {isError && (
        <CustomError message={errors?.message} />
      )}
    </div>
  );
};
export default CustomTextInput;
