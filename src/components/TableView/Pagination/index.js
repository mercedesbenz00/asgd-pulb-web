/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import cn from "classnames";
import Select from "components/FormInputs/Select";

export default function Pagination({
  pages = 4,
  recordsPerPage = 10,
  count,
  page,
  paginationHandler = () => {},
}) {
  const from = (page - 1) * recordsPerPage + 1;
  const to =
    count <= (page - 1) * recordsPerPage + recordsPerPage
      ? count
      : (page - 1) * recordsPerPage + recordsPerPage;

  const renderPages = () => {
    const start = page - 2 > 0 ? page - 2 : 1;
    const end = page + 2 > pages ? pages : page + 2;
    const list = [];
    for (let i = start; i <= end; i++) {
      list.push(
        <li
          key={i}
          className={cn("page-item mx-1", { active: page === i })}
          style={{ zIndex: "1" }}
        >
          <a
            className="page-link pagination-link"
            onClick={() => paginationHandler(i, recordsPerPage)}
          >
            {i}
          </a>
        </li>
      );
    }

    return list;
  };

  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="text-black-50">
        Showing {from} - {to} of {count} items | Show{" "}
        <Select
          wrapperClass={"d-inline-block"}
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
          onChange={(e) => paginationHandler(page, e.target.value)}
          value={recordsPerPage}
        />{" "}
        data entries
      </div>

      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className={cn("page-item me-1", { disabled: page <= 1 })}>
            <a
              className="page-link pagination-link"
              aria-label="Previous"
              onClick={() => paginationHandler(page - 1)}
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>

          {renderPages()}

          <li className={cn("page-item ms-1", { disabled: page === pages })}>
            <a
              className="page-link pagination-link"
              onClick={() => paginationHandler(page + 1, recordsPerPage)}
              aria-label="Next"
            >
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
