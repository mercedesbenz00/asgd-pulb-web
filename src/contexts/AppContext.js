import { createContext, useReducer } from "react";
import { useSelector } from "react-redux";
import AppReducer from "./AppReducer";

const initialState = {
  labelTab: "",
  labelModule: "",
};

export const AppContext = createContext(initialState);

const AppContextProvider = ({ children }) => {
  const userInfo = useSelector((state) => state?.Auth?.userInfo || {});

  const userRole = useSelector((state) => state?.Auth?.userInfo?.role);

  const userModules = useSelector(
    (state) => state?.Auth?.userInfo?.modules || []
  );

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setLabelTab = (item) => {
    dispatch({
      type: "SET_LABEL_TAB",
      payload: item,
    });
  };

  const setLabelModule = (item) => {
    dispatch({
      type: "SET_LABEL_MODULE",
      payload: item,
    });
  };

  return (
    <AppContext.Provider
      value={{
        userRole,
        userInfo,
        userModules,
        labelTab: state.labelTab,
        setLabelTab,
        labelModule: state.labelModule,
        setLabelModule,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
