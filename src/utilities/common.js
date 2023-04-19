import { format } from "date-fns";

export const imgSrcPath = (src) => {
  return `${process.env.REACT_APP_API_BASE_URL}${src}`;
};

export const debounce = (fn, delay = 250) => {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

export const addHoursToDate = (objDate, intHours) => {
  const numberOfMlSeconds = new Date(objDate).getTime();
  const addMlSeconds = intHours * 60 * 60 * 1000;
  const newDateObj = new Date(numberOfMlSeconds + addMlSeconds);

  return new Date(newDateObj).toISOString();
};

export const formatDate = (date, withoutTime = false) => {
  return format(new Date(date), `MM/dd/yyyy ${!withoutTime ? "HH:MM aa" : ""}`);
};

export const formatDateWithoutDay = (value) => {
  let date = new Date(value);
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.toLocaleString("default", { year: "numeric" });
  return month + " " + year;
};

export const pad = (str, max) => {
  return str.length < max ? pad("0" + str, max) : str;
};

export const convertArrayIntoList = (array, label, value) => {
  return array?.map((item) => {
    return {
      value: item?.[value],
      label: item?.[label],
    };
  });
};
export function convertToSlug(Text) {
  return Text.toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}

export const findItem = (data, selected, param = "value") => {
  return selected !== undefined && data?.length > 0
    ? data.find((x) => x[param].toString() === selected.toString())
    : "-";
};

export const getUriWithParam = (baseUrl, params) => {
  const Url = new URL(baseUrl);
  const urlParams = new URLSearchParams(Url.search);
  for (const key in params) {
    if (params[key] !== undefined) {
      urlParams.set(key, params[key]);
    }
  }
  Url.search = urlParams.toString();
  return Url.toString();
};

export const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};
export const delayFunctionCall = (callback, delay = 500) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(callback());
    }, delay);
  });
};
