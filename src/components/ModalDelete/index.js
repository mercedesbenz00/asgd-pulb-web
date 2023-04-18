import Modal from "components/Modal";

export default function ModalDelete({
  title = "Confirm Deletion?",
  open = false,
  onClose = null,
  onSubmit = null,
  id = "",
  name = "",
  code = "",
}) {
  return (
    <Modal title={title} open={open} onClose={onClose}>
      <div className="d-flex flex-column">
        <div className="container overflow-auto mb-3">
          <div>
            Are you sure to delete{" "}
            <strong>
              <u>
                {name}[{code}]
              </u>
            </strong>{" "}
            from the list? This might change the data that is associate with it
            as well.
          </div>
        </div>
        <div className="modal-footer p-0 pt-3">
          <button
            type="button"
            className="btn  btn-outline-primary"
            data-bs-dismiss="modal"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => onSubmit(id)}
          >
            Confirm
          </button>
        </div>
      </div>
    </Modal>
  );
}
