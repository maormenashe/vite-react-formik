import * as React from "react";
import { BaseControlProps } from "../types/form/controls";
import CustomInput, { CustomInputProps } from "./CustomInput";
import CustomTextarea, { CustomTextareaProps } from "./CustomTextarea";
import CustomSelect, { CustomSelectProps } from "./CustomSelect";

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

type TextAreaProps = CustomTextareaProps & {
  asControl: "textarea";
};

type SelectProps = CustomSelectProps & {
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
      return <CustomInput {...(rest as InputProps)} />;
    case "textarea":
      return <CustomTextarea {...(rest as TextAreaProps)} />;
    case "select":
      return <CustomSelect {...(rest as SelectProps)} />;
    default:
      return <></>;
  }
};

export default FormikControl;
