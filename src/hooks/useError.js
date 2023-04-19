import { useEffect } from "react";
import { toast } from "react-toastify";

const useError = (isError, error) => {
  useEffect(() => {
    if (!!isError) {
      toast.error(!!error?.message || error);
    }
  }, [error, isError]);
};

export default useError;
