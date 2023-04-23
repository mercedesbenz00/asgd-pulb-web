import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "@redux-devtools/extension";

import authReducer from "reducers/authReducers";
import feedingLineReducer from "reducers/feedingLineReducer";

const rootReducer = combineReducers({
  Auth: authReducer,
  FeedingLine: feedingLineReducer,
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
