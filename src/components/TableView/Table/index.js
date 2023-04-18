/* eslint-disable jsx-a11y/anchor-is-valid */
import SortIcon from "components/Icons/SortIcon";
import React from "react";

export default function Table({ tableData }) {
  const { headers, data, sortAction = () => {} } = tableData;
  const [sortInfo, setSortInfo] = React.useState({});
  const getSortOrder = (key) => {
    const alreadyExist = Object?.keys(sortInfo)?.find((k) => k === key);
    let order = "ASC";
    if (alreadyExist) {
      order = sortInfo?.[key] === "ASC" ? "DESC" : "ASC";
    }
    setSortInfo((state) => ({ ...state, [key]: order }));
    return order;
  };

  const renderHeaders = () => {
    return headers.map((heading) => {
      return (
        <th
          scope="col"
          key={heading?.key}
          style={{ fontSize: "smaller", borderRadius: "0.5rem" }}
        >
          <div className="d-flex justify-content-between align-items-center">
            {heading?.title}
            {heading.sort && (
              <a
                onClick={() => {
                  const sortOrder = getSortOrder(heading?.key);
                  sortAction(heading?.key, sortOrder);
                }}
              >
                <SortIcon />
              </a>
            )}
          </div>
        </th>
      );
    });
  };

  const renderRow = (row) => {
    return headers.map((headers) => {
      const data = headers?.renderer
        ? headers?.renderer(row)
        : row[headers?.key];

      return <td key={headers?.key}>{data}</td>;
    });
  };

  const renderBody = () => {
    return data.map((row, i) => {
      return (
        <tr key={i} style={{ fontSize: "smaller", verticalAlign: "middle" }}>
          {renderRow(row)}
        </tr>
      );
    });
  };
  const renderNoResult = () => {
    return (
      <tr>
        <td colSpan={headers.length}>
          <div className="d-flex justify-content-center">No Result Found</div>
        </td>
      </tr>
    );
  };
  return (
    <div className="card my-3 shadow-sm table-responsive">
      <table className="table ">
        <thead>
          <tr>{renderHeaders()}</tr>
        </thead>
        <tbody>{data?.length > 0 ? renderBody() : renderNoResult()}</tbody>
      </table>
    </div>
  );
}
