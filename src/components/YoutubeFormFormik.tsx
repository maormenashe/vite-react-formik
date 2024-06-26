import {
  FormikHelpers,
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldProps,
  FieldArray,
  FieldArrayRenderProps,
  FormikProps,
  FastField,
} from "formik";
import * as Yup from "yup";
import * as React from "react";
import TextError from "./TextError";
import { useState } from "react";

interface IYoutubeFormProps {}

type Social = {
  facebook: string;
  twitter: string;
};

type YoutubeForm = {
  name: string;
  email: string;
  channel: string;
  comments: string;
  address: string;
  social: Social;
  phoneNumbers: string[];
  phNumbers: string[];
};

const initialValues: YoutubeForm = {
  name: "Maor",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};

const mockServerData: YoutubeForm = {
  name: "Maor",
  email: "m@example.com",
  channel: "Maor",
  comments: "Welcome Maor",
  address: "Or Yehuda",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["1231231", "123123"],
  phNumbers: ["1231231"],
};

const onSubmit = (
  values: YoutubeForm,
  formikHelpers: FormikHelpers<YoutubeForm>
) => {
  console.log("Submitted", values, formikHelpers);
  formikHelpers.setSubmitting(false);
  formikHelpers.resetForm();
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  channel: Yup.string().required("Required"),
  phoneNumbers: Yup.array().of(
    Yup.string()
      .matches(/^[0-9]+$/, "Phone number must be digits only")
      .required("Required")
  ),
  phNumbers: Yup.array().of(
    Yup.string()
      .matches(/^[0-9]+$/, "Phone number must be digits only")
      .required("Required")
  ),
});

const validateComments = (value: string) => {
  let error;

  if (!value) error = "Required";

  return error;
};

// const isFormDirtyAndValid = <T,>(formik: FormikProps<T>) => {
//   return formik.dirty && formik.isValid;
// };

const YoutubeFormFormik: React.FunctionComponent<IYoutubeFormProps> = () => {
  const [formValues, setFormValues] = useState<YoutubeForm | null>(null);
  return (
    <Formik<YoutubeForm>
      initialValues={formValues || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
      // validateOnMount={true}
      // validateOnBlur={false}
      // validateOnChange={false}
    >
      {(formik: FormikProps<YoutubeForm>) => {
        return (
          <Form noValidate>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div className="form-control">
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component={TextError} />
            </div>

            <div className="form-control">
              <label htmlFor="channel">Channel</label>
              <Field type="text" id="channel" name="channel" />
              <ErrorMessage
                name="channel"
                render={(errorMsg: string) => <TextError>{errorMsg}</TextError>}
              />
            </div>

            <div className="form-control">
              <label htmlFor="comments">Comments</label>
              <Field
                as="textarea"
                id="comments"
                name="comments"
                validate={validateComments}
              />
              <ErrorMessage name="comments" component={TextError} />
            </div>

            <div className="form-control">
              <label htmlFor="address">Address</label>
              <FastField name="address">
                {(props: FieldProps) => {
                  console.log("Address FastField Render");
                  const { field, meta } = props;
                  return (
                    <div>
                      <input type="text" id="address" {...field} />
                      {meta.touched && meta.error && (
                        <TextError>{meta.error}</TextError>
                      )}
                    </div>
                  );
                }}
              </FastField>
              <ErrorMessage name="address" component={TextError} />
            </div>

            <div className="form-control">
              <label htmlFor="facebook">Facebook profile</label>
              <Field type="text" id="facebook" name="social.facebook" />
              <ErrorMessage name="facebook" component={TextError} />
            </div>

            <div className="form-control">
              <label htmlFor="twitter">Twitter profile</label>
              <Field type="text" id="twitter" name="social.twitter" />
              <ErrorMessage name="twitter" component={TextError} />
            </div>

            <div className="form-control">
              <label htmlFor="primaryPh">Primary phone number</label>
              <Field type="text" id="primaryPh" name="phoneNumbers[0]" />
              <ErrorMessage name="phoneNumbers[0]" component={TextError} />
            </div>

            <div className="form-control">
              <label htmlFor="secondaryPh">Secondary phone number</label>
              <Field type="text" id="secondaryPh" name="phoneNumbers[1]" />
              <ErrorMessage name="phoneNumbers[1]" component={TextError} />
            </div>

            <div className="form-control">
              <label>List of phone numbers</label>
              <FieldArray name="phNumbers">
                {(fieldArrProps: FieldArrayRenderProps) => {
                  const { push, remove, form } = fieldArrProps;
                  const { values } = form as FormikProps<YoutubeForm>;
                  const { phNumbers } = values;

                  return (
                    <div>
                      {phNumbers.map((_, index) => {
                        return (
                          <div key={index}>
                            <Field type="text" name={`phNumbers[${index}]`} />
                            <ErrorMessage
                              name={`phNumbers[${index}]`}
                              component={TextError}
                            />
                            <button type="button" onClick={() => remove(index)}>
                              -
                            </button>
                          </div>
                        );
                      })}
                      <button type="button" onClick={() => push("")}>
                        +
                      </button>
                    </div>
                  );
                }}
              </FieldArray>
            </div>

            <button
              type="button"
              onClick={() => formik.validateField("comments")}
            >
              Validate comments
            </button>
            <button type="button" onClick={() => formik.validateForm()}>
              Validate all
            </button>

            <button
              type="button"
              onClick={() => formik.setFieldTouched("comments")}
            >
              Visit comments
            </button>
            <button
              type="button"
              onClick={() =>
                formik.setTouched({
                  name: true,
                  email: true,
                  channel: true,
                  comments: true,
                  phoneNumbers: true,
                  phNumbers: true,
                })
              }
            >
              Visit all
            </button>

            <button type="button" onClick={() => setFormValues(mockServerData)}>
              Load saved data
            </button>

            <button type="reset">Reset</button>

            {/* <button
              type="submit"
              disabled={!isFormDirtyAndValid(formik) || formik.isSubmitting}
            >
              Submit
            </button> */}

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

export default YoutubeFormFormik;
