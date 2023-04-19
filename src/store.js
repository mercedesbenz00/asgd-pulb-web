import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import authReducer from "reducers/authReducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "@redux-devtools/extension";

const rootReducer = combineReducers({
  Auth: authReducer,
});

const persistConfig = {
  key: "asgd-pulp-recognition",
  storage,
  whitelist: ["Auth"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const enhancer =
  process.env.NODE_ENV === "development"
    ? composeWithDevTools(applyMiddleware(thunk))
    : compose(applyMiddleware(thunk));
const store = createStore(persistedReducer, enhancer);
export const persistor = persistStore(store);

export default store;
