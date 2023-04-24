import { useMemo, useEffect } from "react";
import { Formik, Form, yupToFormErrors, Field } from "formik";
import Input from "components/FormInputs/Input";
import RadioGroup from "components/FormInputs/RadioGroup";
import ReactSelect from "components/FormInputs/ReactSelect";
import ReactSelectCreatable from "components/FormInputs/ReactSelectCreatable";
import Modal from "components/Modal";
import { feedingLineValidationSchema } from "./validationSchema";
import { STATUS_ENUM } from "utilities/constants";
import {
  getPulpBrands,
  getPulpProducts,
  getPulpTypes,
  getPulpShapes,
} from "actions/pulpInfoAction";
import useDataFetcher from "hooks/useDataFetcher";

export default function CreatePulpInfo({
  title,
  open,
  onClose,
  onSubmit,
  data = null,
}) {
  const {
    loading: loadingBrands,
    data: brands,
    fetch: fetchBrands,
  } = useDataFetcher(getPulpBrands);

  const {
    loading: loadingProducts,
    data: products,
    fetch: fetchProducts,
  } = useDataFetcher(getPulpProducts);

  const {
    loading: loadingTypes,
    data: types,
    fetch: fetchTypes,
  } = useDataFetcher(getPulpTypes);

  const { data: shapes, fetch: fetchShapes } = useDataFetcher(getPulpShapes);

  const brandOptions = useMemo(() => {
    if (!!brands && brands?.length > 0) {
      return brands.map((i) => {
        return {
          value: i?.code,
          label: i.code,
        };
      });
    } else {
      return [];
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [brands]);

  const productOptions = useMemo(() => {
    if (!!products && products?.length > 0) {
      return products.map((i) => {
        return {
          value: i?.code,
          label: i.code,
        };
      });
    } else {
      return [];
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  const typeOptions = useMemo(() => {
    if (!!types && types?.length > 0) {
      return types.map((i) => {
        return {
          value: i?.code,
          label: i.name,
        };
      });
    } else {
      return [];
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [types]);

  const shapeOptions = useMemo(() => {
    if (!!shapes && shapes?.length > 0) {
      return shapes.map((i) => {
        return {
          value: i?.code,
          label: i.code,
        };
      });
    } else {
      return [];
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shapes]);

  const initialValues = useMemo(() => {
    if (data !== null) {
      return {
        id: data?.id,
        brand_code: data?.brand_code,
        product_code: data?.product_code,
        type_code: data?.type_code,
        pack_num: String(data?.pack_num),
        unit_weight: data?.unit_weight,
        deleted: String(data?.deleted),
        trained: !data?.trained,
      };
    }

    return {
      id: "",
      brand_code: "",
      product_code: "",
      type_code: "",
      pack_num: "",
      unit_weight: "",
      deleted: "",
      trained: false,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    fetchBrands();
    fetchProducts();
    fetchTypes();
    fetchShapes();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderActions = () => {
    return (
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-outline-primary"
          data-bs-dismiss="modal"
          onClick={onClose}
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </div>
    );
  };

  const renderForm = (form) => {
    return (
      <div className="container overflow-auto">
        <div className="d-none">
          <Input
            label="Pulp Info ID"
            placeholder=""
            type="text"
            id="id"
            name="id"
            withValidation={true}
            wrapperClass={"my-3"}
            isRequired={false}
          />
        </div>

        <ReactSelectCreatable
          id="brand_code"
          name="brand_code"
          label="Pulp Brand"
          placeholder="Please select pulp brand"
          options={brandOptions}
          isLoading={loadingBrands}
          withValidation={true}
          isRequired={true}
          isMulti={false}
          wrapperClass={"my-3"}
        />

        <ReactSelectCreatable
          id="product_code"
          name="product_code"
          label="Pulp Product"
          placeholder="Please select pulp product"
          options={productOptions}
          isLoading={loadingProducts}
          withValidation={true}
          isRequired={true}
          isMulti={false}
          wrapperClass={"my-3"}
        />

        <ReactSelect
          id="type_code"
          name="type_code"
          label="Pulp Type"
          placeholder="Please select pulp type"
          options={typeOptions}
          withValidation={true}
          wrapperClass={"my-3"}
          isLoading={loadingTypes}
          isRequired={true}
        />

        <RadioGroup
          label="Default Shape"
          id="pack_num"
          name="pack_num"
          wrapperClass={"my-3"}
          options={shapeOptions}
          withValidation={true}
          isRequired={true}
        />

        <Input
          label="Single Pack Weight"
          placeholder="Please enter estimate weight in kg"
          type="text"
          id="unit_weight"
          name="unit_weight"
          withValidation={true}
          wrapperClass={"my-3"}
          isRequired={true}
        />

        <RadioGroup
          label="Status"
          id="deleted"
          name="deleted"
          wrapperClass={"mt-3"}
          options={STATUS_ENUM.list}
          withValidation={true}
          isRequired={true}
        />

        <div className="form-group form-check my-3">
          <Field
            type="checkbox"
            name="trained"
            id="trained"
            className="form-check-input"
          />
          <label
            htmlFor="trained"
            className="form-check-label"
            style={{
              color: "#64748B",
              fontWeight: "600",
            }}
          >
            Untrained Pulp
          </label>
        </div>
      </div>
    );
  };

  return (
    <Modal title={title} open={open} onClose={onClose} customWidth="38rem">
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          onSubmit({
            ...values,
          });
        }}
        validate={(values) => {
          return feedingLineValidationSchema
            .validate(values, { abortEarly: false })
            .then(() => {
              return null;
            })
            .catch((yupErrors) => {
              return yupToFormErrors(yupErrors);
            });
        }}
      >
        {(form) => {
          return (
            <Form>
              {renderForm(form)}
              {renderActions()}
            </Form>
          );
        }}
      </Formik>
    </Modal>
  );
}
