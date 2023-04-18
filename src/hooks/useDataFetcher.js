import { useState } from "react";

const useDataFetcher = (callback) => {
  const [loading, setIsLoading] = useState(false);
  const [data, setData] = useState({});
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  const fetch = async (data, config) => {
    setIsLoading(true);
    try {
      const { data: response } = await callback(data, config);

      const { status, data: result, message } = response;

      if (status) {
        setData(result);
        setIsError(false);
      } else {
        setError(message);
        setIsError(true);
      }
    } catch (e) {
      setError("Error");
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const resetError = () => {
    setError("");
    setIsError(false);
  };
  return {
    loading,
    data,
    isError,
    error,
    fetch,
    resetError,
  };
};

export default useDataFetcher;
