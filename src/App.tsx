import CustomInputLabel from "./components/CustomInputLabel";
import CustomTextInput from "./components/CustomTextInput";
import CustomRadioInput from "./components/CustomRadioInput";
import CustomCheckboxInput from "./components/CustomCheckboxInput";
import CustomTextArea from "./components/CustomTextArea";
import CustomError from "./components/CustomError";
import SuccessMessage from "./components/SuccessMessage";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";

export type FormInputType = {
  first_name: string;
  last_name: string;
  email: string;
  query_type: "" | "General Enquiry" | "Support Request";
  message: string;
  agree: boolean;
};

const schema = yup.object().shape({
  first_name: yup.string().required("This is required field"),
  last_name: yup.string().required("This is required field"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("This is required field"),
  query_type: yup
    .string()
    .oneOf(["", "General Enquiry", "Support Request"])
    .required("Please select a query type"),
  message: yup.string().required("This is required field"),
  agree: yup
    .boolean()
    .oneOf([true], "To submit this form, please consent to being contacted.")
    .required("To submit this form, please consent to being contacted."),
});

function App() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const { register, handleSubmit, watch, formState, reset } =
    useForm<FormInputType>({
      resolver: yupResolver(schema),
    });

  const { errors } = formState;

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setShowSuccessMessage(true);

      const timer = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [formState.isSubmitSuccessful]);

  const onSubmit: SubmitHandler<FormInputType> = (data) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    console.log(data);
    reset();
  };

  return (
    <main className="min-h-screen px-[14px] py-4 bg-primary-green-200 grid place-content-center">
      <div className="p-6 bg-white rounded-xl shadow md:w-[740px] mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-neutral-grey-900">
          Contact Us
        </h1>
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <div className="md:flex md:gap-4">
            <CustomTextInput
              label="First Name"
              id="first_name"
              register={register}
              fieldId="first_name"
              errors={errors.first_name}
            />
            <CustomTextInput
              label="Last Name"
              id="last_name"
              register={register}
              fieldId="last_name"
              errors={errors.last_name}
            />
          </div>
          <CustomTextInput
            label="Email Address"
            id="email"
            name="email"
            register={register}
            fieldId="email"
            errors={errors.email}
          />
          <div className="flex flex-col">
            <CustomInputLabel label="Query Type" />
            <div className="md:flex md:gap-4">
              <CustomRadioInput
                label="General Enquiry"
                id="general_enquiry"
                value="General Enquiry"
                register={register}
                fieldId="query_type"
                checked={watch("query_type") === "General Enquiry"}
              />
              <CustomRadioInput
                label="Support Request"
                id="support_request"
                value="Support Request"
                register={register}
                fieldId="query_type"
                checked={watch("query_type") === "Support Request"}
              />
            </div>
            {errors.query_type && (
              <CustomError message={errors.query_type.message} isRadio={true} />
            )}
          </div>
          {/* <div> */}
          <CustomTextArea
            label="Message"
            id="message"
            register={register}
            fieldId="message"
            errors={errors.message}
          />
          {/* </div> */}
          <div className="my-6">
            <CustomCheckboxInput
              label={"I consent to being contacted by the team"}
              id="agree"
              register={register}
              fieldId="agree"
            />
            {errors.agree && <CustomError message={errors.agree.message} />}
          </div>
          <button
            type="submit"
            className="bg-primary-green-600 text-white p-5 rounded-xl hover:bg-neutral-grey-900 active:bg-neutral-grey-500"
          >
            Submit
          </button>
          {showSuccessMessage && <SuccessMessage />}
        </form>
      </div>
    </main>
  );
}

export default App;
