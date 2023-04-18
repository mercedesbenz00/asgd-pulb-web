import classNames from "classnames";
import React from "react";
import Image from "../Image";

export default function Loader({ message = "loading...", withOverlay = true }) {
  return (
    <div className={classNames({ overlaySpinner: withOverlay })}>
      <div className="d-flex flex-column align-items-center justify-content-center h-100">
        <Image
          src={`${process.env.PUBLIC_URL + "/images/loader.gif"}`}
          width="96"
          height="72"
        />
        <h6 style={{ color: "#707070" }}>{message}</h6>
      </div>
    </div>
  );
}
