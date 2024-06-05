import { FieldError, UseFormRegister } from "react-hook-form";
import { FormInputType } from "../App";
import CustomInputLabel from "./CustomInputLabel";
import CustomError from "./CustomError";

type CustomTextAreaProps = Omit<
  React.HTMLProps<HTMLTextAreaElement>,
  "className"
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

const CustomTextArea = ({
  label,
  register,
  fieldId,
  errors,
  ...textAreaProps
}: CustomTextAreaProps) => {
  const isError = errors ? true : false;
  return (
    <div className="flex flex-col">
      <CustomInputLabel
        label={label}
        htmlFor={textAreaProps.id}
        style={{
          marginBottom: "0.5rem",
        }}
      />
      <textarea
        {...textAreaProps}
        {...register(fieldId)}
        className={
          "h-60 border-2 rounded-lg border-neutral-grey-500 hover:border-primary-green-600 hover:cursor-pointer focus:border-primary-green-600 focus:outline-none p-3 resize-none md:h-[105px]" +
          (isError ? " border-primary-red focus:border-primary-red" : "")
        }
      ></textarea>
      {isError && <CustomError message={errors?.message} />}
    </div>
  );
};

export default CustomTextArea;
