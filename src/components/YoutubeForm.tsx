import { FormikHelpers, useFormik } from "formik";
import * as React from "react";

interface IYoutubeFormProps {}

type YoutubeForm = {
  name: string;
  email: string;
  channel: string;
};

type YoutubeFormErrors = Partial<YoutubeForm>;

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

const validate = (values: YoutubeForm) => {
  const errors: YoutubeFormErrors = {};

  if (!values.name) errors.name = "Required";

  if (!values.email) errors.email = "Required";
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
    errors.email = "Invalid email address";

  if (!values.channel) errors.channel = "Required";

  return errors;
};

const YoutubeForm: React.FunctionComponent<IYoutubeFormProps> = () => {
  const formik = useFormik<YoutubeForm>({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        ></input>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        ></input>

        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          id="channel"
          name="channel"
          onChange={formik.handleChange}
          value={formik.values.channel}
        ></input>

        <button type="submit" disabled={formik.isSubmitting}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default YoutubeForm;
