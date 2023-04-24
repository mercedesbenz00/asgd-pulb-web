/* eslint-disable no-useless-escape */
import * as yup from "yup";

export const feedingLineValidationSchema = yup.object().shape({
  id: yup.string(),
  brand_code: yup.string().required("Pulp Brand is required"),
  product_code: yup.string().required("Pulp Product is required"),
  type_code: yup.string().required("Pulp Type is required"),
  pack_num: yup.string().required("Default Shape is required"),
  unit_weight: yup
    .string()
    .matches(/^[0-9.]*$/, { message: "Only number and dot allowed" })
    .trim()
    .required("Single Pack Weight is required"),
  deleted: yup.string().required("This field is required"),
});
