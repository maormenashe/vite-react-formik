import { Form, Formik, FormikHelpers, FormikProps } from "formik";
import * as React from "react";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

interface ILoginFormProps {}

type LoginForm = {
  email: string;
  password: string;
};

const initialValues: LoginForm = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string().required("Required"),
});

const onSubmit = (
  values: LoginForm,
  formikHelpers: FormikHelpers<LoginForm>
) => {
  console.log("Submitted", values, formikHelpers);
  formikHelpers.setSubmitting(false);
  formikHelpers.resetForm();
};

const LoginForm: React.FunctionComponent<ILoginFormProps> = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik: FormikProps<LoginForm>) => {
        return (
          <Form noValidate>
            <FormikControl
              asControl="input"
              type="email"
              label="email"
              name="email"
            />

            <FormikControl
              asControl="input"
              type="password"
              label="password"
              name="password"
            />

            <button
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
