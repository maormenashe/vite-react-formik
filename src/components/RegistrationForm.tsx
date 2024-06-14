import { Form, Formik, FormikHelpers, FormikProps } from "formik";
import * as React from "react";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import { SelectOption } from "../types/form/controls";
import useElementRefs from "../hooks/useElementRefs";
import useFormikContextFocusAndScrollError from "../hooks/useFormikContextFocusAndScrollError";

interface IRegistrationFormProps {}

type RegistrationForm = {
  email: string;
  password: string;
  confirmPassword: string;
  modeOfContact: string;
  phone: string;
};

const initialValues: RegistrationForm = {
  email: "",
  password: "",
  confirmPassword: "",
  modeOfContact: "",
  phone: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string().required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Passwords must match")
    .required("Required"),
  modeOfContact: Yup.string().required("Required"),
  phone: Yup.string().when("modeOfContact", {
    is: "phonemoc",
    then: (schema: Yup.StringSchema) => schema.required("Required"),
    otherwise: (schema: Yup.StringSchema) => schema.notRequired(),
  }),
});

const onSubmit = (
  values: RegistrationForm,
  formikHelpers: FormikHelpers<RegistrationForm>
) => {
  console.log("Submitted", values, formikHelpers);
  formikHelpers.setSubmitting(false);
  formikHelpers.resetForm();
};

const contactOptions: SelectOption[] = [
  { label: "Email", value: "emailmoc" },
  { label: "Phone", value: "phonemoc" },
];

const RegistrationForm: React.FunctionComponent<
  IRegistrationFormProps
> = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik: FormikProps<RegistrationForm>) => {
        console.log(formik);
        return <RegistrationFormContent formik={formik} />;
      }}
    </Formik>
  );
};

export default RegistrationForm;

interface IRegistrationFormContentForm {
  formik: FormikProps<RegistrationForm>;
}

const RegistrationFormContent: React.FunctionComponent<
  IRegistrationFormContentForm
> = ({ formik }) => {
  const elementRefs = useElementRefs<RegistrationForm>();
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

      <FormikControl
        asControl="input"
        type="password"
        label="password"
        name="password"
      />

      <FormikControl
        asControl="input"
        type="password"
        label="Confirm Password"
        name="confirmPassword"
      />

      <FormikControl
        asControl="radio"
        label="Mode of contact"
        name="modeOfContact"
        options={contactOptions}
      />

      <FormikControl asControl="input" type="text" label="Phone" name="phone" />

      <button type="submit" disabled={formik.isSubmitting}>
        Submit
      </button>
    </Form>
  );
};
