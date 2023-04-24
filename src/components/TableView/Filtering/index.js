import AddIcon from "components/Icons/AddIcon";
import Label from "components/Label";
import { Formik } from "formik";
import Input from "components/FormInputs/Input";

const Filtering = ({ onFilter, clearFilter, onAdd, text }) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="d-flex flex-column">
        <Formik
          initialValues={{
            term: "",
          }}
          enableReinitialize
        >
          {(form) => (
            <>
              <Label>Search Table</Label>
              <div className="d-flex align-items-center mt-1">
                <Input
                  label=""
                  placeholder="Enter search term..."
                  type="text"
                  id="term"
                  name="term"
                  withValidation={true}
                  isRequired={false}
                  mode="vertical"
                />

                <button
                  type="button"
                  className="btn btn-primary mx-2 border"
                  onClick={() => {
                    onFilter(form?.values);
                  }}
                >
                  Apply
                </button>
                <button
                  type="button"
                  className="btn btn-outline border border-primary bg-white"
                  onClick={() => {
                    clearFilter();
                    form.setFieldValue("term", "");
                  }}
                >
                  <Label color="#013686">Reset</Label>
                </button>
              </div>
            </>
          )}
        </Formik>
      </div>
      <button
        type="button"
        className="btn btn-sm btn-outline border border-primary bg-white"
        onClick={onAdd}
      >
        <div className="d-flex align-items-center">
          <AddIcon />
          <div className="me-2" />
          <Label color="#013686">Add new {text}</Label>
        </div>
      </button>
    </div>
  );
};

export default Filtering;
