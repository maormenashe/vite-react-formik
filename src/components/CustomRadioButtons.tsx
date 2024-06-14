import { ErrorMessage, Field, FieldAttributes, FieldProps } from "formik";
import * as React from "react";
import { BaseControlProps, SelectOption } from "../types/form/controls";
import TextError from "./TextError";

export type CustomRadioButtonsProps = Omit<
  FieldAttributes<unknown>,
  "as" | "type"
> &
  BaseControlProps & {
    options: SelectOption[];
  };

const CustomRadioButtons: React.FunctionComponent<CustomRadioButtonsProps> = (
  props
) => {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control">
      <label>{label}</label>
      <Field name={name} {...rest}>
        {(fieldProps: FieldProps) => {
          const { field } = fieldProps;
          return options.map((option) => {
            return (
              <React.Fragment key={option.value}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                ></input>

                <label htmlFor={option.value}>{option.label}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default CustomRadioButtons;
