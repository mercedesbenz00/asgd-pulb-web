import xlsx from "json-as-xlsx";

const downloadFile = ({ data, fileName, fileType }) => {
  const blob = new Blob([data], { type: fileType });
  const a = document.createElement("a");
  a.download = fileName;
  a.href = window.URL.createObjectURL(blob);
  const clickEvt = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  a.dispatchEvent(clickEvt);
  a.remove();
};

export function downloadAsCsv(headers, data, fileName) {
  let usersCsv = data.reduce((acc, row) => {
    const rowdata = Object.keys(headers).map((key) => {
      return row[key];
    });
    acc.push(rowdata.join(","));
    return acc;
  }, []);

  downloadFile({
    data: [Object.values(headers), ...usersCsv].join("\n"),
    fileName: `${fileName}.csv`,
    fileType: "text/csv",
  });
}

export function downloadAsXsl(headers, data, fileName) {
  let columns = [];

  Object.entries(headers).forEach(([key, value]) => {
    columns.push({ label: value, value: key });
  });

  const dataTest = [
    {
      sheet: fileName,
      columns,
      content: data,
    },
  ];

  const settings = {
    fileName: fileName,
    extraLength: 3,
    writeMode: "writeFile",
    writeOptions: {},
    RTL: false,
  };

  xlsx(dataTest, settings);
}
