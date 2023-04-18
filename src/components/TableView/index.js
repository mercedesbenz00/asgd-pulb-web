import React from "react";
import Pagination from "./Pagination";
import Table from "./Table";
import TableHeader from "./TableHeader";

export default function TableView({
  tableData,
  title,
  pages,
  page,
  noOfRecords,
  headerActions,
  pageSize,
  paginationHandler,
}) {
  return (
    <>
      <TableHeader title={title} headerActions={headerActions} />
      <Table tableData={tableData} />
      {pages>0 && (
        <Pagination
          pages={pages}
          page={page}
          count={noOfRecords}
          recordsPerPage={pageSize}
          paginationHandler={paginationHandler}
        />
      )}
    </>
  );
}
