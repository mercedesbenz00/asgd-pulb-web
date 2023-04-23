/* eslint-disable jsx-a11y/anchor-is-valid */
import { DownloadButton } from "components/FormInputs/DownloadButton";
import Select from "components/FormInputs/Select";
import Label from "components/Label";

const PaginationTop = ({
  recordsPerPage = 10,
  count,
  paginationHandler = () => {},
  setDownloadType,
}) => {
  return (
    <div className="d-flex align-items-end justify-content-between">
      <Label>Total Records ({count})</Label>
      <div className="d-flex align-items-center">
        <DownloadButton setDownloadType={setDownloadType} />

        <Select
          options={[
            {
              label: "10",
              value: "10",
            },
            {
              label: "20",
              value: "20",
            },
          ]}
          onChange={(e) => paginationHandler(1, e.target.value)}
          value={recordsPerPage}
        />

        <div className="me-2" />

        <Label fontWeight="400">per page</Label>
      </div>
    </div>
  );
};

export { PaginationTop };
