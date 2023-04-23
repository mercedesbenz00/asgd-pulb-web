/* eslint-disable jsx-a11y/anchor-is-valid */

import cn from "classnames";
import CaratLeftIcon from "components/Icons/CaratLeftIcon";
import CaratRightIcon from "components/Icons/CaratRightIcon";

const PaginationBottom = ({
  pages = 4,
  recordsPerPage = 10,
  page,
  paginationHandler = () => {},
}) => {
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
            className="page-link round"
            style={{
              padding: "0.3rem 0.8rem",
            }}
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
    <div className="d-flex justify-content-end">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className={cn("me-1", { disabled: page <= 1 })}>
            <a
              className="page-link round p-1"
              aria-label="Previous"
              onClick={() => paginationHandler(page - 1, recordsPerPage)}
            >
              <CaratLeftIcon />
            </a>
          </li>

          {renderPages()}

          <li className={cn("ms-1", { disabled: page === pages })}>
            <a
              className="page-link round p-1"
              onClick={() => paginationHandler(page + 1, recordsPerPage)}
              aria-label="Next"
            >
              <CaratRightIcon />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export { PaginationBottom };
