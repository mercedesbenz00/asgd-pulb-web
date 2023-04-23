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
          value: i?.id,
          label: i.name,
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
          value: i?.id,
          label: i.name,
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
          value: i?.id,
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
          value: i?.id,
          label: i.name,
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
        pulpBrandId: data?.pulpBrandId,
        pulpProductId: data?.pulpProductId,
        pulpTypeId: data?.pulpTypeId,
        pulpShapeId: String(data?.pulpShapeId),
        singlePackWeight: data?.singlePackWeight,
        deleted: String(data?.deleted),
        untrained: data?.untrained,
      };
    }

    return {
      id: "",
      pulpBrandId: "",
      pulpProductId: "",
      pulpTypeId: "",
      pulpShapeId: "",
      singlePackWeight: "",
      deleted: "",
      untrained: false,
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
          id="pulpBrandId"
          name="pulpBrandId"
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
          id="pulpProductId"
          name="pulpProductId"
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
          id="pulpTypeId"
          name="pulpTypeId"
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
          id="pulpShapeId"
          name="pulpShapeId"
          wrapperClass={"my-3"}
          options={shapeOptions}
          withValidation={true}
          isRequired={true}
        />

        <Input
          label="Single Pack Weight"
          placeholder="Please enter estimate weight in kg"
          type="text"
          id="singlePackWeight"
          name="singlePackWeight"
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
            name="untrained"
            id="untrained"
            className="form-check-input"
          />
          <label
            htmlFor="untrained"
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
