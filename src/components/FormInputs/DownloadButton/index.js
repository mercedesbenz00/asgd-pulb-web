/* eslint-disable jsx-a11y/anchor-is-valid */
import DownloadIcon from "components/Icons/DownloadIcon";
import classNames from "classnames";
import useComponentVisible from "hooks/useComponentVisible";
import Label from "components/Label";

export function DownloadButton({ setDownloadType }) {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  return (
    <div ref={ref}>
      <div className="dropdown">
        <button
          type="button"
          className="btn btn-sm btn-outlined mx-2 border border-primary bg-white"
          onClick={() => setIsComponentVisible(!isComponentVisible)}
        >
          <div className="d-flex align-items-center">
            <DownloadIcon />
            <div className="me-2" />
            <Label color="#013686">Download</Label>
          </div>
        </button>

        <ul
          className={classNames("dropdown-menu", { show: isComponentVisible })}
        >
          <li>
            <a
              className="dropdown-item"
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                e.preventDefault();
                setIsComponentVisible(false);
                setDownloadType(1);
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
                setIsComponentVisible(false);
                setDownloadType(2);
              }}
            >
              Download as .csv
            </a>
          </li>

          <li>
            <a
              className="dropdown-item"
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                e.preventDefault();
                setIsComponentVisible(false);
                setDownloadType(3);
              }}
            >
              Download All as .xls
            </a>
          </li>

          <li>
            <a
              className="dropdown-item"
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                e.preventDefault();
                setIsComponentVisible(false);
                setDownloadType(4);
              }}
            >
              Download All as .csv
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
