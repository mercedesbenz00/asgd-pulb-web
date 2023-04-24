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
import CreatePulpInfo from "./CreatePulpInfo";

import {
  requestPulpInfos,
  requestPulpInfo,
  savePulpInfo,
  deletePulpInfoRequest,
  resetPulpInfo,
  getPulpInfos,
} from "actions/pulpInfoAction";

const PulpInfo = () => {
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
    (state) => state.PulpInfo
  );
  const { list, page, pages, noOfRecords, pageSize } = data || {};

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      requestPulpInfos({
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
          title: "Pulp Brand",
          key: `brand:code`,
          sort: true,
          renderer: ({ brand }) => brand?.code,
        },
        {
          title: "Pulp Product",
          key: `product:code`,
          sort: true,
          renderer: ({ product }) => product?.code,
        },
        {
          title: "Pulp Type",
          key: `pulpType:code`,
          sort: true,
          renderer: ({ pulpType }) => `${pulpType?.name}`,
        },
        {
          title: "Default Shape",
          key: `pulpShape:code`,
          sort: true,
          renderer: ({ pulpShape }) => pulpShape?.code,
        },
        {
          title: "Single Pack Weight",
          key: "unit_weight",
          sort: true,
          renderer: ({ unit_weight }) => `${unit_weight} Kg`,
        },
        {
          title: "Status",
          key: "deleted",
          sort: true,
          renderer: ({ deleted, trained }) => statusRenderer(deleted, trained),
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

  const statusRenderer = (deleted, trained) => {
    const style = {
      width: "10rem",
      borderRadius: "0.3rem",
      border: `1px solid ${
        deleted ? "#FCA5A5" : !trained ? "#FCD34D" : "#6EE7B7"
      }`,
      background: deleted ? "#FECACA" : !trained ? "#FDE68A" : "#A7F3D0",
      color: deleted ? "#7F1D1D" : !trained ? "#78350F" : "#064E3B",
    };

    const text = deleted
      ? "NOT ACTIVE"
      : !trained
      ? "ACTIVE - UNTRAINED"
      : "ACTIVE";

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
            dispatch(resetPulpInfo());
            dispatch(requestPulpInfo(id));
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
            dispatch(resetPulpInfo());
            dispatch(requestPulpInfo(id));
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
    dispatch(resetPulpInfo());
  };

  const onFormSubmitHandler = async (data) => {
    const { id, deleted, trained, ...rest } = data;

    const payload = {
      ...rest,
      deleted: deleted === "true" ? true : false,
      trained: !trained,
      ...(mode === "edit" && { id }),
    };

    dispatch(savePulpInfo(payload, id));
  };

  const onDeleteActionHandler = async (id) => {
    dispatch(deletePulpInfoRequest(id));
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
  } = useDataFetcher(getPulpInfos);

  const [downloadType, setDownloadType] = useState(0);

  const downloadFile = (data, fileType) => {
    const fileName = "pulp-infos";

    const headers = {
      brand: "Pulp Brand",
      product: "Pulp Product",
      pulpType: "Pulp Type",
      pulpShape: "Default Shape",
      unit_weight: "Single Pack Weight",
      deleted: "Status",
    };

    const rows =
      data?.map((item) => {
        const {
          brand,
          product,
          pulpType,
          pulpShape,
          unit_weight,
          deleted,
          untrained,
        } = item;
        return {
          brand: brand?.code,
          product: product?.code,
          pulpType: pulpType?.name,
          pulpShape: pulpShape?.code,
          unit_weight: `${unit_weight} Kg`,
          deleted: deleted
            ? "NOT ACTIVE"
            : untrained
            ? "ACTIVE - UNTRAINED"
            : "ACTIVE",
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
    if (labelTab === "Pulp Information") {
      dispatch(
        requestPulpInfos({
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
        text="pulp info"
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
        <CreatePulpInfo
          title={generateTitle(mode, "Pulp Info")}
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
          name={`${current?.brand?.code} - ${current?.product?.code} - ${current?.pulpType?.code}`}
        />
      )}
    </>
  );
};

export default PulpInfo;
