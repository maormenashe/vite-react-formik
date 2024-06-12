import * as React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import { SelectOption } from "../types/form/controls";

interface IFormikContainerProps {}

const selectOptions: SelectOption[] = [
  { label: "Select an option", value: "" },
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];

const FormikContainer: React.FunctionComponent<IFormikContainerProps> = () => {
  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    selectMultipleOption: [],
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    selectMultipleOption: Yup.array().min(1, "Required"),
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

            <FormikControl
              asControl="textarea"
              label="Description"
              name="description"
            />

            <FormikControl
              asControl="select"
              label="Select a topic"
              name="selectOption"
              options={selectOptions}
            />

            <FormikControl
              asControl="select"
              multiple
              label="Select many topics"
              name="selectMultipleOption"
              options={selectOptions}
            />

            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikContainer;
