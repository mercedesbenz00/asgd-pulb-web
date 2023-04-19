import React from "react";
import Modal from ".";
import { Formik } from "formik";
export default function FormModal({
  open = false,
  onClose = () => {},
  title = "",
  children,
  onSubmit: formAction,
  validationSchema,
  initialValues={},
  submitText = "Submit",
}) {
  const renderActions = () => {
    return (
      <div className="modal-footer">
        <button
          type="button"
          className="btn  btn-outline-primary"
          data-bs-dismiss="modal"
          onClick={onClose}
        >
          Close
        </button>
        <button type="submit" className="btn btn-primary">
          {submitText}
        </button>
      </div>
    );
  };

  return (
    <Modal title={title} open={open} onClose={onClose}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            {children}
            {renderActions()}
          </form>
        )}
      </Formik>
    </Modal>
  );
}
