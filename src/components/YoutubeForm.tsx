import { useFormik } from "formik";
import * as React from "react";

interface IYoutubeFormProps {}

type YoutubeForm = {
  name: string;
  email: string;
  channel: string;
};

const YoutubeForm: React.FunctionComponent<IYoutubeFormProps> = () => {
  const formik = useFormik<YoutubeForm>({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
    onSubmit(values, formikHelpers) {
      console.log("Submitted", values, formikHelpers);
    },
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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default YoutubeForm;
