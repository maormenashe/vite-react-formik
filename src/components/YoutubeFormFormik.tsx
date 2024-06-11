import { FormikHelpers, Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import * as React from "react";

interface IYoutubeFormProps {}

type YoutubeForm = {
  name: string;
  email: string;
  channel: string;
};

const initialValues: YoutubeForm = {
  name: "",
  email: "",
  channel: "",
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
          <ErrorMessage name="name" />
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" />
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field type="text" id="channel" name="channel" />
          <ErrorMessage name="channel" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default YoutubeFormFormik;
