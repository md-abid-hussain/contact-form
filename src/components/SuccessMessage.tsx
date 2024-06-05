import successCheckIcon from "../assets/images/icon-success-check.svg";

const SuccessMessage = () => {
  return (
    <div className="max-w-[330px] md:max-w-[450px] bg-neutral-grey-900 text-white rounded-xl p-6 absolute left-0 right-0 top-3 m-auto">
      <h2 className="flex items-center gap-2">
        <img src={successCheckIcon} alt="check" className="block size-5" />
        <span className="text-lg font-bold">Message Sent!</span>
      </h2>
      <p className="mt-4">
        Thanks for completing the form. We'll be in touch soon!
      </p>
    </div>
  );
};

export default SuccessMessage;
