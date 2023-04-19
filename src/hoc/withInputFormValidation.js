import React from "react";
import { useField } from "formik";

const withInputFormValidation =
  (Component) =>
  ({
    helperText,
    error,
    onChange,
    onBlur,
    withValidation = false,
    forwardRef,
    ...props
  }) => {
    if (withValidation && props.name) {
      const [field, meta, helpers] = useField(props.name);
      const hasError = meta.error && (meta.touched || field.value);
      helperText = (hasError && meta.error) || helperText || null;

      return (
        <Component
          {...props}
          {...field}
          form={{ meta, ...helpers }}
          onChange={(e, value) => {
            props.name !== "accessGrantedFrom" && field.onChange(e);
            onChange && onChange(e, value);
          }}
          onBlur={(e) => {
            field.onBlur(e);
            onBlur && onBlur(e);
          }}
          error={hasError || !!error}
          helperText={helperText}
        />
      );
    }

    return (
      <Component
        {...props}
        onChange={onChange}
        onBlur={onBlur}
        error={error}
        helperText={helperText}
      />
    );
  };

export default withInputFormValidation;
