/* eslint-disable no-useless-escape */
import * as yup from "yup";

export const feedingLineValidationSchema = yup.object().shape({
  id: yup.string(),
  pulpBrandId: yup.string().required("Pulp Brand is required"),
  pulpProductId: yup.string().required("Pulp Product is required"),
  pulpTypeId: yup.string().required("Pulp Type is required"),
  pulpShapeId: yup.string().required("Default Shape is required"),
  singlePackWeight: yup
    .string()
    .matches(/^[0-9.]*$/, { message: "Only number and dot allowed" })
    .trim()
    .required("Single Pack Weight is required"),
  deleted: yup.string().required("This field is required"),
});
