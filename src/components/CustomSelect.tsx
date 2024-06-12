import { ErrorMessage, Field, FieldAttributes } from "formik";
import * as React from "react";
import { BaseControlProps, SelectOption } from "../types/form/controls";
import TextError from "./TextError";

export type CustomSelectProps = Omit<FieldAttributes<unknown>, "as" | "type"> &
  BaseControlProps & {
    options: SelectOption[];
  };

const CustomSelect: React.FunctionComponent<CustomSelectProps> = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="select" id={name} name={name} {...rest}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default CustomSelect;
