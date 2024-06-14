import { Form, Formik, FormikHelpers, FormikProps } from "formik";
import * as React from "react";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import { SelectOption } from "../types/form/controls";
import useElementRefs from "../hooks/useElementRefs";
import useFormikContextFocusAndScrollError from "../hooks/useFormikContextFocusAndScrollError";

interface IEnrollmentFormProps {}

type EnrollmentForm = {
  email: string;
  bio: string;
  course: string;
  skills: string[];
  courseDate: string;
};

const initialValues: EnrollmentForm = {
  email: "",
  bio: "",
  course: "",
  skills: [],
  courseDate: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  bio: Yup.string().required("Required"),
  course: Yup.string().required("Required"),
  courseDate: Yup.date().required("Required"),
});

const onSubmit = (
  values: EnrollmentForm,
  formikHelpers: FormikHelpers<EnrollmentForm>
) => {
  console.log("Submitted", values, formikHelpers);
  formikHelpers.setSubmitting(false);
  formikHelpers.resetForm();
};

const courseOptions: SelectOption[] = [
  { label: "Select your course", value: "" },
  { label: "React", value: "react" },
  { label: "Angular", value: "angular" },
  { label: "Vue", value: "vue" },
];

const skillSetOptions: SelectOption[] = [
  { label: "HTML", value: "html" },
  { label: "CSS", value: "css" },
  { label: "JavaScript", value: "javascript" },
];

const EnrollmentForm: React.FunctionComponent<IEnrollmentFormProps> = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik: FormikProps<EnrollmentForm>) => {
        console.log(formik);
        return <EnrollmentFormContent formik={formik} />;
      }}
    </Formik>
  );
};

export default EnrollmentForm;

interface IEnrollmentFormContentForm {
  formik: FormikProps<EnrollmentForm>;
}

const EnrollmentFormContent: React.FunctionComponent<
  IEnrollmentFormContentForm
> = ({ formik }) => {
  const elementRefs = useElementRefs<EnrollmentForm>();
  useFormikContextFocusAndScrollError();
  return (
    <Form noValidate>
      <FormikControl
        asControl="input"
        type="email"
        label="email"
        name="email"
        innerRef={(el: HTMLInputElement | null) => {
          elementRefs.current.email = el;
        }}
      />

      <FormikControl asControl="textarea" label="Bio" name="bio" />

      <FormikControl
        asControl="select"
        label="Course"
        name="course"
        options={courseOptions}
      />

      <FormikControl
        asControl="checkbox"
        label="Your skillset"
        name="skills"
        options={skillSetOptions}
      />

      <FormikControl asControl="date" label="Course Date" name="courseDate" />

      <button type="submit" disabled={formik.isSubmitting}>
        Submit
      </button>
    </Form>
  );
};
