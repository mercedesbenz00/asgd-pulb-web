/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import DownloadIcon from "components/Icons/DownloadIcon";
import classNames from "classnames";
import { downloadAsCsv, downloadAsXsl } from "utilities/downloadHelper";

export function DownloadButton({ headers = {}, data = [], fileName = "text" }) {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div className="dropdown">
      <button
        type="button"
        className="btn btn-outlined mx-2 border border-primary bg-white px-3"
        onClick={() => setShowDropDown(!showDropDown)}
      >
        <DownloadIcon />
      </button>
      <ul className={classNames("dropdown-menu", { show: showDropDown })}>
        <li>
          <a
            className="dropdown-item"
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              e.preventDefault();
              setShowDropDown(false);
              downloadAsXsl(headers, data, fileName);
            }}
          >
            Download as .xls
          </a>
        </li>

        <li>
          <a
            className="dropdown-item"
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              e.preventDefault();
              setShowDropDown(false);
              downloadAsCsv(headers, data, fileName);
            }}
          >
            Download as .csv
          </a>
        </li>
      </ul>
    </div>
  );
}
