type CustomErrorProps = {
  message: string | undefined;
  isRadio?: boolean;
};

const CustomError = ({ message, isRadio }: CustomErrorProps) => {
  return (
    <span
      className={
        "text-red-500 text-sm " + (isRadio ? "-mt-3" : "")
      }
    >
      {message}
    </span>
  );
};

export default CustomError;
