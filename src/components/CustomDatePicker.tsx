import * as React from "react";
import { BaseControlProps } from "../types/form/controls";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ErrorMessage, Field, FieldProps } from "formik";
import TextError from "./TextError";

export type CustomDatePickerProps = BaseControlProps;

const CustomDatePicker: React.FunctionComponent<CustomDatePickerProps> = (
  props
) => {
  const { label, name, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {(props: FieldProps) => {
          const { field, form } = props;
          const { setFieldValue } = form;
          const { value } = field;

          return (
            <DatePicker
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={(date) => setFieldValue(name, date)}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default CustomDatePicker;
