/* eslint-disable no-useless-escape */
import * as yup from "yup";

yup.addMethod(yup.string, "passwordInvalid", function (errorMessage) {
  return this.test(`test-password-invalid`, errorMessage, function (value) {
    const { path, createError } = this;

    const isValid = value?.length === 0 || value?.length >= 6;

    return isValid || createError({ path, message: errorMessage });
  });
});

export const feedingLineValidationSchema = yup.object().shape({
  id: yup.string(),
  machine_code: yup.string().required("Machine ID is required"),
  code: yup
    .string()
    .matches(/^[a-zA-Z0-9)(&,\-._# ]*$/, {
      message: "Special Characters not allowed",
    })
    .trim()
    .required("Feeding Line Code is required"),
  name: yup.string().trim().required("Feeding Line Name is required"),
  deleted: yup.string().required("Status is required"),

  password: yup.string().when("id", {
    is: (id) => id === "" || id === undefined,
    then: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required")
      .default(""),

    otherwise: yup
      .string()
      .passwordInvalid("Password must be at least 6 characters")
      .default(""),
  }),

  passwordConfirm: yup.string().when(["id", "password"], {
    is: (id, password) => id === "" || id === undefined || password !== "",
    then: yup
      .string()
      .oneOf([yup.ref("password"), ""], "Passwords not match")
      .required("Confirm Password is required")
      .default(""),
    otherwise: yup
      .string()
      .oneOf([yup.ref("password"), ""], "Passwords not match")
      .default(""),
  }),
});
