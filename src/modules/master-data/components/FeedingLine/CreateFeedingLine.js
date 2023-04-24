import { useMemo, useEffect, useState } from "react";
import { Formik, Form, yupToFormErrors } from "formik";
import Input from "components/FormInputs/Input";
import RadioGroup from "components/FormInputs/RadioGroup";
import ReactSelect from "components/FormInputs/ReactSelect";
import Modal from "components/Modal";
import { feedingLineValidationSchema } from "./validationSchema";
import { STATUS_ENUM } from "utilities/constants";
import { getMachines } from "actions/feedingLineAction";
import useDataFetcher from "hooks/useDataFetcher";
import EyeOpenIcon from "components/Icons/EyeOpenIcon";
import EyeCloseIcon from "components/Icons/EyeCloseIcon";
import Label from "components/Label";

export default function CreateFeedingLine({
  title,
  open,
  onClose,
  onSubmit,
  data = null,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const {
    loading: loadingMachines,
    data: machines,
    fetch: fetchMachines,
  } = useDataFetcher(getMachines);

  const machineOptions = useMemo(() => {
    if (!!machines && machines?.length > 0) {
      return machines.map((i) => {
        return {
          value: i?.code,
          label: i.code,
        };
      });
    } else {
      return [];
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [machines]);

  const initialValues = useMemo(() => {
    if (data !== null) {
      return {
        id: data?.id,
        machine_code: data?.machine_code,
        name: data?.name,
        code: data?.code,
        deleted: String(data?.deleted),
        password: "",
        passwordConfirm: "",
      };
    }

    return {
      id: "",
      machine_code: "",
      name: "",
      code: "",
      deleted: "",
      password: "",
      passwordConfirm: "",
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    fetchMachines();

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
            label="Feeding Line ID"
            placeholder=""
            type="text"
            id="id"
            name="id"
            withValidation={true}
            wrapperClass={"my-3"}
            isRequired={false}
          />
        </div>

        <ReactSelect
          id="machine_code"
          name="machine_code"
          label="Paper Machine"
          placeholder="Please select paper machine"
          options={machineOptions}
          withValidation={true}
          wrapperClass={"my-3"}
          isLoading={loadingMachines}
          isRequired={true}
        />

        <Input
          label="Feeding Line Code"
          placeholder="Please enter code for new feeding line"
          type="text"
          id="code"
          name="code"
          withValidation={true}
          wrapperClass={"my-3"}
          isRequired={true}
        />

        <Input
          label="Feeding Line Name"
          placeholder="Please enter name for new feeding line"
          type="text"
          id="name"
          name="name"
          withValidation={true}
          wrapperClass={"my-3"}
          isRequired={true}
        />

        <RadioGroup
          label="Status"
          id="deleted"
          name="deleted"
          wrapperClass={"my-3"}
          options={STATUS_ENUM.list}
          withValidation={true}
          isRequired={true}
        />

        <div className="card p-3 mb-3" style={{ backgroundColor: "#E6EBF3" }}>
          <Label color="#334155">{`${
            data !== null ? "Reset" : "Create"
          } Feeding Line Password`}</Label>
          <Input
            label="New Password"
            placeholder="Please enter new password"
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            withValidation={true}
            wrapperClass={"my-3"}
            isRequired={data === null}
            InputIcon={showPassword ? <EyeOpenIcon /> : <EyeCloseIcon />}
            onClickIcon={() => setShowPassword(!showPassword)}
          />

          <Input
            label="Confirm Password"
            placeholder="Please enter new password again"
            type={showPassword ? "text" : "password"}
            id="passwordConfirm"
            name="passwordConfirm"
            withValidation={true}
            isRequired={data === null}
          />
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
