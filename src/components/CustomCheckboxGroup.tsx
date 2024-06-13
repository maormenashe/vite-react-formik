import { ErrorMessage, Field, FieldAttributes, FieldProps } from "formik";
import * as React from "react";
import { BaseControlProps, SelectOption } from "../types/form/controls";
import TextError from "./TextError";

export type CustomCheckboxGroupProps = Omit<
  FieldAttributes<unknown>,
  "as" | "type"
> &
  BaseControlProps & {
    options: SelectOption[];
  };

const CustomCheckboxGroup: React.FunctionComponent<CustomCheckboxGroupProps> = (
  props
) => {
  const { label, name, options, ...rest } = props;
  console.log(options);
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
                  type="checkbox"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value.includes(option.value)}
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

export default CustomCheckboxGroup;
