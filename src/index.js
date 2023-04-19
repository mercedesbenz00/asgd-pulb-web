import React from "react";
import ReactDOM from "react-dom/client";
import App from "./containers/App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ReactKeycloakProvider } from "@react-keycloak/web";

import "bootstrap/dist/js/bootstrap.bundle.min";
import "./css/theme.scss";
import "./css/global.css";
import store, { persistor } from "store";
import keycloak from "./keycloak";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppContextProvider from "contexts/AppContext";
import Loader from "components/Loader";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const eventLogger = (event, error) => {
  console.log("onKeycloakEvent", event, error);
};

const tokenLogger = (tokens) => {
  console.log("onKeycloakTokens", tokens);
};

root.render(
  <Provider store={store}>
    <PersistGate loading={<Loader />} persistor={persistor}>
      <ReactKeycloakProvider
        //initOptions={{ onLoad: "check-sso", checkLoginIframe: false }}
        authClient={keycloak}
        onEvent={eventLogger}
        onTokens={tokenLogger}
        LoadingComponent={<Loader />}
        autoRefreshToken={true}
      >
        <AppContextProvider>
          <Router>
            <App />
          </Router>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </AppContextProvider>
      </ReactKeycloakProvider>
    </PersistGate>
  </Provider>
);
