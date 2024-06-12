import { FieldAttributes, Field, ErrorMessage } from "formik";
import * as React from "react";
import { BaseControlProps } from "../types/form/controls";
import TextError from "./TextError";

export type CustomTextareaProps = Omit<
  FieldAttributes<unknown>,
  "as" | "type"
> &
  BaseControlProps;

const CustomTextarea: React.FunctionComponent<CustomTextareaProps> = (
  props
) => {
  const { label, name, ...rest } = props;

  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="textarea" id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default CustomTextarea;
