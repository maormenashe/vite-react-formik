import {
  FormikHelpers,
  FormikProvider,
  useFormik,
  useFormikContext,
} from "formik";
import * as React from "react";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

interface ILoginFormWithProviderProps {}

type LoginFormWithProvider = {
  email: string;
  password: string;
};

const initialValues: LoginFormWithProvider = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string().required("Required"),
});

const onSubmit = (
  values: LoginFormWithProvider,
  formikHelpers: FormikHelpers<LoginFormWithProvider>
) => {
  console.log("Submitted", values, formikHelpers);
  formikHelpers.setSubmitting(false);
  formikHelpers.resetForm();
};

const LoginFormWithProvider: React.FunctionComponent<
  ILoginFormWithProviderProps
> = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit} noValidate>
        <FormikControl
          asControl="chakrainput"
          type="email"
          label="email"
          name="email"
        />

        <FormikControl
          asControl="chakrainput"
          type="password"
          label="password"
          name="password"
        />

        <button type="submit" disabled={!formik.isValid || formik.isSubmitting}>
          Submit
        </button>
        <FormStatus />
      </form>
    </FormikProvider>
  );
};

const FormStatus: React.FunctionComponent = () => {
  const { isValid, isSubmitting } = useFormikContext<LoginFormWithProvider>();
  return (
    <div>
      <p>Form is {isValid ? "valid" : "invalid"}</p>
      <p>Form is {isSubmitting ? "submitting" : "not submitting"}</p>
    </div>
  );
};

export default LoginFormWithProvider;
