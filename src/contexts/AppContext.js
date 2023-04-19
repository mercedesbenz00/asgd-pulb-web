import { createContext } from "react";
import { useSelector } from "react-redux";

export const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
  const userRole = useSelector((state) => {
    return state?.Auth?.userInfo?.role;
  });

  const userInfo = useSelector((state) => {
    return state?.Auth?.userInfo || {};
  });

  return (
    <AppContext.Provider
      value={{
        userRole,
        userInfo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
