import React from "react";
import { PaginationTop, PaginationBottom } from "./Pagination";
import Table from "./Table";
import Filtering from "./Filtering";

export default function TableView({
  onAdd,
  onFilter,
  clearFilter,
  text,
  tableData,
  pages,
  page,
  noOfRecords,
  pageSize,
  paginationHandler,
  setDownloadType,
}) {
  return (
    <>
      <Filtering
        onAdd={onAdd}
        onFilter={onFilter}
        clearFilter={clearFilter}
        text={text}
      />

      {pages > 0 && (
        <PaginationTop
          page={page}
          count={noOfRecords}
          recordsPerPage={pageSize}
          paginationHandler={paginationHandler}
          setDownloadType={setDownloadType}
        />
      )}
      <div className="mt-3" />
      <Table tableData={tableData} />
      {pages > 0 && (
        <PaginationBottom
          pages={pages}
          page={page}
          recordsPerPage={pageSize}
          paginationHandler={paginationHandler}
        />
      )}
    </>
  );
}
