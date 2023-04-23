export default function Modal({
  open = false,
  onClose = () => {},
  title = "",
  subTitle = null,
  children,
  customWidth = null,
}) {
  const show = open ? "block" : "none";

  return (
    <>
      <div className="modal" style={{ display: show }}>
        <div
          className="modal-dialog modal-dialog-scrollable modal-dialog-centered"
          style={{ ...(!!customWidth && { maxWidth: customWidth }) }}
        >
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              <div className="d-flex flex-column justify-content-center">
                <h5 className="modal-title">{title}</h5>

                {!!subTitle && <h6 className="fw-light">{subTitle}</h6>}
              </div>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  onClose();
                }}
              ></button>
            </div>
            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
      {open && <div className="overlay"></div>}
    </>
  );
}
