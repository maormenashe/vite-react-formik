import {
  FormikHelpers,
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldProps,
} from "formik";
import * as Yup from "yup";
import * as React from "react";
import TextError from "./TextError";

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
};

const initialValues: YoutubeForm = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
};

const onSubmit = (
  values: YoutubeForm,
  formikHelpers: FormikHelpers<YoutubeForm>
) => {
  console.log("Submitted", values, formikHelpers);
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
});

const YoutubeFormFormik: React.FunctionComponent<IYoutubeFormProps> = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
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
          <Field as="textarea" id="comments" name="comments" />
          <ErrorMessage name="comments" component={TextError} />
        </div>

        <div className="form-control">
          <label htmlFor="address">Address</label>
          <Field name="address">
            {(props: FieldProps) => {
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
          </Field>
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

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default YoutubeFormFormik;
