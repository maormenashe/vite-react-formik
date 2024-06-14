import { Field, FieldProps } from "formik";
import * as React from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps,
} from "@chakra-ui/react";
import { BaseControlProps } from "../types/form/controls";

export type CustomChakraInputProps = InputProps & BaseControlProps;

const ChakraInput: React.FunctionComponent<CustomChakraInputProps> = (
  props
) => {
  const { label, name, ...rest } = props;
  return (
    <Field name={name}>
      {(fieldProps: FieldProps) => {
        const { field, form } = fieldProps;

        const error = form.errors[name];
        const isVisited = form.touched[name];
        const isInvalid = !!(error && isVisited);

        return (
          <FormControl isInvalid={isInvalid}>
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <Input id={name} {...rest} {...field} />
            <FormErrorMessage>{error as string}</FormErrorMessage>
          </FormControl>
        );
      }}
    </Field>
  );
};

export default ChakraInput;
