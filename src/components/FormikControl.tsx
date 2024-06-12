import * as React from "react";
import { BaseControlProps } from "../types/form/controls";
import CustomInput, { CustomInputProps } from "./CustomInput";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ControlType =
  | "input"
  | "textarea"
  | "select"
  | "radio"
  | "checkbox"
  | "date";

type InputProps = CustomInputProps & {
  asControl: "input";
};

type TextAreaProps = CustomInputProps & {
  asControl: "textarea";
};

type SelectProps = BaseControlProps &
  React.ComponentProps<"select"> & {
    asControl: "select";
  };

type RadioProps = BaseControlProps &
  React.ComponentProps<"input"> & {
    asControl: "radio";
  };

type CheckboxProps = BaseControlProps &
  React.ComponentProps<"input"> & {
    asControl: "checkbox";
  };

type DateProps = BaseControlProps &
  React.ComponentProps<"input"> & {
    asControl: "date";
  };

// Create a discriminated union of all control props
type FormikControlProps =
  | InputProps
  | TextAreaProps
  | SelectProps
  | RadioProps
  | CheckboxProps
  | DateProps;

const FormikControl: React.FunctionComponent<FormikControlProps> = (props) => {
  const { asControl, ...rest } = props;

  switch (asControl) {
    case "input":
      return <CustomInput {...rest} />;
    default:
      return <></>;
  }
};

export default FormikControl;
