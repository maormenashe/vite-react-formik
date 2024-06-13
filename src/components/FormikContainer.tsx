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

const radioOptions: SelectOption[] = [
  { label: "Option 1", value: "rOption1" },
  { label: "Option 2", value: "rOption2" },
  { label: "Option 3", value: "rOption3" },
];

const checkboxOptions: SelectOption[] = [
  { label: "Option 1", value: "cOption1" },
  { label: "Option 2", value: "cOption2" },
  { label: "Option 3", value: "cOption3" },
];

const FormikContainer: React.FunctionComponent<IFormikContainerProps> = () => {
  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    selectMultipleOption: [],
    radioOption: "",
    checkboxOption: [],
    birthDate: null,
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    selectMultipleOption: Yup.array().min(1, "Required"),
    radioOption: Yup.string().required("Required"),
    checkboxOption: Yup.array().required("Required"),
    birthDate: Yup.date().required("Required").nullable(),
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

            <FormikControl
              asControl="radio"
              label="Radio topic"
              name="radioOption"
              options={radioOptions}
            />

            <FormikControl
              asControl="checkbox"
              label="Checkbox topic"
              name="checkboxOption"
              options={checkboxOptions}
            />

            <FormikControl
              asControl="date"
              label="Pick a date"
              name="birthDate"
            />

            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikContainer;
