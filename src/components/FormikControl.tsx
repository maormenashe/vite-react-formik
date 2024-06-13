import * as React from "react";
import CustomInput, { CustomInputProps } from "./CustomInput";
import CustomTextarea, { CustomTextareaProps } from "./CustomTextarea";
import CustomSelect, { CustomSelectProps } from "./CustomSelect";
import CustomRadioButtons, {
  CustomRadioButtonsProps,
} from "./CustomRadioButtons";
import CustomCheckboxGroup, {
  CustomCheckboxGroupProps,
} from "./CustomCheckboxGroup";
import CustomDatePicker, { CustomDatePickerProps } from "./CustomDatePicker";

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

type RadioProps = CustomRadioButtonsProps & {
  asControl: "radio";
};

type CheckboxGroupProps = CustomCheckboxGroupProps & {
  asControl: "checkbox";
};

type DateProps = CustomDatePickerProps & {
  asControl: "date";
};

// Create a discriminated union of all control props
type FormikControlProps =
  | InputProps
  | TextAreaProps
  | SelectProps
  | RadioProps
  | CheckboxGroupProps
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
    case "radio":
      return <CustomRadioButtons {...(rest as RadioProps)} />;
    case "checkbox":
      return <CustomCheckboxGroup {...(rest as CheckboxGroupProps)} />;
    case "date":
      return <CustomDatePicker {...(rest as DateProps)} />;
    default:
      return <></>;
  }
};

export default FormikControl;
