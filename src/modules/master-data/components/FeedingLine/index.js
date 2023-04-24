/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect, useContext, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppContext } from "contexts/AppContext";
import useDataFetcher from "hooks/useDataFetcher";
import { downloadAsCsv, downloadAsXsl } from "utilities/downloadHelper";
import { ALERT_TYPE_ENUM } from "utilities/constants";
import Loader from "components/Loader";
import Alert from "components/Alert";
import TableView from "components/TableView";
import EditIcon from "components/Icons/EditIcon";
import TrashIcon from "components/Icons/TrashIcon";
import ModalDelete from "components/ModalDelete";
import CreateFeedingLine from "./CreateFeedingLine";

import {
  requestFeedingLines,
  requestFeedingLine,
  saveFeedingLine,
  deleteFeedingLineRequest,
  resetFeedingLine,
  getFeedingLines,
} from "actions/feedingLineAction";

const FeedingLine = () => {
  const { labelTab } = useContext(AppContext);

  const [id, setId] = useState("");
  const [mode, setMode] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

  const [paginate, setPaginate] = useState({
    page: 1,
    pageSize: 10,
    sortBy: [],
    filters: {
      term: "",
    },
  });

  const [alertMessage, setalertMessage] = useState({
    show: false,
    message: "",
    type: "",
  });

  const { data, loading, error, success, isDeleted, current } = useSelector(
    (state) => state.FeedingLine
  );
  const { list, page, pages, noOfRecords, pageSize } = data || {};

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      requestFeedingLines({
        page: paginate?.page,
        pageSize: paginate?.pageSize,
        sortBy: paginate?.sortBy,
        term: paginate?.filters?.term,
      })
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paginate]);

  useEffect(() => {
    if (error) {
      setalertMessage({
        show: true,
        message: error,
        type: ALERT_TYPE_ENUM.ERROR,
      });
    } else {
      setalertMessage({
        show: false,
        message: "",
        type: "",
      });
    }
  }, [error]);

  useEffect(() => {
    if (success) {
      paginationHandler(1, paginate?.pageSize);
      setalertMessage({
        show: true,
        message: `Record ${isDeleted ? "Deleted" : "Saved"} SuccessFully`,
        type: ALERT_TYPE_ENUM.SUCCESS,
      });
      setShowAddForm(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);

  const setFilters = (filters) => {
    setPaginate({
      ...paginate,
      page: 1,
      sortBy: [],
      filters,
    });
  };

  const paginationHandler = (page = 1, pageSize = 10) => {
    setPaginate({
      ...paginate,
      page,
      pageSize,
    });
  };

  const sortHandler = (name, order = "ASC") => {
    setPaginate({
      ...paginate,
      page: 1,
      sortBy: [`${name}:${order}`],
    });
  };

  const tableData = useMemo(() => {
    return {
      headers: [
        {
          title: "Paper Machine",
          key: `machine:code`,
          sort: true,
          renderer: ({ machine }) => machine?.code,
        },
        {
          title: "Feeding Line Code",
          key: "code",
          sort: true,
        },
        {
          title: "Feeding Line Name",
          key: "name",
          sort: true,
        },

        {
          title: "Status",
          key: "deleted",
          sort: true,
          renderer: ({ deleted }) => statusRenderer(deleted),
        },
        {
          title: "Actions",
          key: "action",
          renderer: ({ id }) => actionRenderer(id),
        },
      ],
      sortAction: sortHandler,
      data: list || [],
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);

  const statusRenderer = (deleted) => {
    const style = {
      width: "6rem",
      borderRadius: "0.3rem",
      border: `1px solid ${deleted ? "#FCA5A5" : "#6EE7B7"}`,
      background: deleted ? "#FECACA" : "#A7F3D0",
      color: deleted ? "#7F1D1D" : "#064E3B",
    };

    const text = deleted ? "NOT ACTIVE" : "ACTIVE";

    return (
      <div className="badge p-1" style={{ ...style }}>
        {text}
      </div>
    );
  };

  const actionRenderer = (id) => {
    return (
      <div className="d-flex align-items-center">
        <a
          type="button"
          className="me-2"
          onClick={(e) => {
            e.preventDefault();
            setId(id);
            setMode("edit");
            setShowAddForm(true);
            dispatch(resetFeedingLine());
            dispatch(requestFeedingLine(id));
          }}
        >
          <EditIcon />
        </a>
        <a
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setId(id);
            setMode("delete");
            setShowAddForm(false);
            dispatch(resetFeedingLine());
            dispatch(requestFeedingLine(id));
          }}
        >
          <TrashIcon color="black" />
        </a>
      </div>
    );
  };

  const onModalCloseHandler = () => {
    setId("");
    setMode("");
    setShowAddForm(false);
    dispatch(resetFeedingLine());
  };

  const onFormSubmitHandler = async (data) => {
    const { machine_code, code, name, password, deleted } = data;

    const payload = {
      machine_code,
      code,
      name,
      password,
      deleted: deleted === "true" ? true : false,
      ...(mode === "edit" && { id: data?.id }),
    };

    dispatch(saveFeedingLine(payload, data?.id));
  };

  const onDeleteActionHandler = async (id) => {
    dispatch(deleteFeedingLineRequest(id));
  };

  const resetAlert = () => {
    setalertMessage({
      show: false,
      message: "",
      type: "",
    });
  };

  const generateTitle = (mode, suffix) => {
    if (mode === "edit") {
      return `Edit ${suffix}`;
    } else if (mode === "new") {
      return `Add ${suffix}`;
    } else {
      return "";
    }
  };

  const {
    loading: loadingAll,
    data: dataAll,
    fetch: fetchAll,
  } = useDataFetcher(getFeedingLines);

  const [downloadType, setDownloadType] = useState(0);

  const downloadFile = (data, fileType) => {
    const fileName = "feeding-lines";

    const headers = {
      machine: "Paper Machine",
      code: "Feeding Line Code",
      name: "Feeding Line Name",
      deleted: "Status",
    };

    const rows =
      data?.map((item) => {
        const { machine, code, name, deleted } = item;
        return {
          machine: machine?.code,
          code,
          name,
          deleted: deleted ? "NOT ACTIVE" : "ACTIVE",
        };
      }) || [];

    fileType === "xls"
      ? downloadAsXsl(headers, rows, fileName)
      : downloadAsCsv(headers, rows, fileName);
  };

  const onAdd = () => {
    setId("");
    setMode("new");
    setShowAddForm(true);
  };

  const onFilter = (values) => {
    setFilters(values);
  };

  const clearFilter = () => {
    setFilters({
      term: "",
    });
  };

  useEffect(() => {
    switch (downloadType) {
      case 1:
        downloadFile(data?.list, "xls");
        break;
      case 2:
        downloadFile(data?.list, "csv");
        break;
      case 3:
      case 4:
        fetchAll({ without_paginate: true });
        break;
      default:
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [downloadType]);

  useEffect(() => {
    if (!loadingAll) {
      switch (downloadType) {
        case 3:
          downloadFile(dataAll, "xls");
          break;
        case 4:
          downloadFile(dataAll, "csv");
          break;
        default:
          break;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingAll, dataAll]);

  useEffect(() => {
    if (labelTab === "Feeding Line") {
      dispatch(
        requestFeedingLines({
          page: paginate?.page,
          pageSize: paginate?.pageSize,
          sortBy: paginate?.sortBy,
        })
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [labelTab]);

  return (
    <>
      <TableView
        onAdd={onAdd}
        onFilter={onFilter}
        clearFilter={clearFilter}
        text="feeding line"
        tableData={tableData}
        page={page}
        pages={pages}
        noOfRecords={noOfRecords}
        pageSize={pageSize}
        paginationHandler={(i, pageSize) => paginationHandler(i, pageSize)}
        setDownloadType={setDownloadType}
      />

      {loading && <Loader />}

      {alertMessage?.show && (
        <Alert
          type={alertMessage?.type}
          message={alertMessage?.message}
          onClose={resetAlert}
        />
      )}

      {!!showAddForm && (mode === "new" || (mode === "edit" && !!current)) && (
        <CreateFeedingLine
          title={generateTitle(mode, "Feeding Line")}
          open={showAddForm}
          onClose={onModalCloseHandler}
          onSubmit={(data) => onFormSubmitHandler(data)}
          id={id}
          data={mode === "new" ? null : current}
        />
      )}

      {mode === "delete" && !!current && (
        <ModalDelete
          open={mode === "delete"}
          onClose={onModalCloseHandler}
          onSubmit={(id) => onDeleteActionHandler(id)}
          id={id}
          name={current?.name}
          code={current?.code}
        />
      )}
    </>
  );
};

export default FeedingLine;
