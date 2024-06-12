import * as React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

interface IFormikContainerProps {}

const FormikContainer: React.FunctionComponent<IFormikContainerProps> = () => {
  const initialValues = {
    email: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
  });
  const onSubmit = (values: unknown) => console.log("Form data", values);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik: unknown) => {
        console.log(formik);
        return (
          <Form>
            <FormikControl
              asControl="input"
              type="email"
              label="Email"
              name="email"
            />
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikContainer;
