import { ErrorMessage, Field, FieldAttributes } from "formik";
import * as React from "react";
import { BaseControlProps } from "../types/form/controls";
import TextError from "./TextError";

export type CustomInputProps = FieldAttributes<unknown> & BaseControlProps;

const CustomInput: React.FunctionComponent<CustomInputProps> = (props) => {
  const { label, name, ...rest } = props;

  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default CustomInput;
