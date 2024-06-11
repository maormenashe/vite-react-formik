import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";
import * as React from "react";

interface IYoutubeFormProps {}

type YoutubeForm = {
  name: string;
  email: string;
  channel: string;
};

// type YoutubeFormErrors = Partial<YoutubeForm>;

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

// const validate = (values: YoutubeForm) => {
//   const errors: YoutubeFormErrors = {};

//   if (!values.name) errors.name = "Required";

//   if (!values.email) errors.email = "Required";
//   else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
//     errors.email = "Invalid email address";

//   if (!values.channel) errors.channel = "Required";

//   return errors;
// };

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  channel: Yup.string().required("Required"),
});

const YoutubeFormUseFormikYup: React.FunctionComponent<
  IYoutubeFormProps
> = () => {
  const formik = useFormik<YoutubeForm>({
    initialValues,
    onSubmit,
    validationSchema,
    // validate,
  });

  return (
    <div>
      <form noValidate onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          ></input>
          {formik.errors.name && formik.touched.name && (
            <div className="error">{formik.errors.name}</div>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          ></input>
          {formik.errors.email && formik.touched.email && (
            <div className="error">{formik.errors.email}</div>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.channel}
          ></input>
          {formik.errors.channel && formik.touched.channel && (
            <div className="error">{formik.errors.channel}</div>
          )}
        </div>

        <button type="submit" disabled={formik.isSubmitting}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default YoutubeFormUseFormikYup;
