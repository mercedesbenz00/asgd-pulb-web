/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import DeleteIcon from "../../Icons/DeleteIcon";
import PlaceholderIcon from "../../Icons/PlaceholderIcon";
import HelperText from "../HelperText";
import Image from "../../Image";
import { imgSrcPath } from "utilities/common";
import withInputFormValidation from "hoc/withInputFormValidation";

function UploadFile({
  label,
  fileName = "",
  preview = "",
  onChange,
  onRemoveFile,
  canUploadFile = true,
  id,
  wrapperClass,
  uploadText = "Click here to browse file",
  error = false,
  helperText = "",
  isRequired = false,
  accept = "image/*",
  width = "10rem",
  height = "8rem",
  ...props
}) {
  const fileRef = React.useRef();

  return (
    <div className={wrapperClass}>
      <label
        htmlFor={id}
        className={`form-label fw-bold ${isRequired ? "required" : ""}`}
      >
        {label}
      </label>

      <div
        className="d-flex align-items-center justify-content-center p-2"
        style={{
          position: "relative",
          border: "2px dashed #ced4da",
          borderRadius: "0.5rem",
          cursor: "pointer",
          width,
          height,
        }}
        onClick={() => {
          fileRef.current.click();
        }}
      >
        {!fileName && !preview ? (
          <PlaceholderIcon placeholderText={uploadText} />
        ) : (
          <div>
            <Image
              src={preview ? preview : imgSrcPath(fileName)}
              className="img-fluid"
            />
            <div style={{ position: "absolute", top: "0", right: "8px" }}>
              <a
                onClick={onRemoveFile}
                className="ms-2"
                style={{ cursor: "pointer", width: "5rem" }}
              >
                <DeleteIcon />
              </a>
            </div>
          </div>
        )}
      </div>

      <input
        type={"file"}
        id={id}
        className="form-control"
        ref={fileRef}
        onChange={onChange}
        disabled={!canUploadFile}
        style={{ display: "none" }}
        accept={accept}
        onClick={(e) => {
          e.target.value = null;
        }}
      />

      {isRequired && <HelperText error={error} helperText={helperText} />}
    </div>
  );
}

// export default UploadFile;

export default withInputFormValidation(UploadFile);
