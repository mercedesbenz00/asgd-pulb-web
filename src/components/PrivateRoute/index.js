import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { AppLayout } from "../../containers/AppLayout";
import { LOGIN_ROUTE } from "../../modules/login";
import { useKeycloak } from "@react-keycloak/web";

const PrivateRoute = ({ component: Component, useLayout, ...rest }) => {
  const { keycloak } = useKeycloak();

  const auth1 = useSelector((state) => {
    return state?.Auth?.isAuthenticated;
  });

  const auth2 =
    process.env.REACT_APP_BYPASS_KEYCLOAK === "true"
      ? true
      : keycloak?.authenticated;

  const isAuthenticated = auth1 && auth2;

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <AppLayout>
            <Component {...rest} {...props} />
          </AppLayout>
        ) : (
          <Redirect
            to={{
              pathname: LOGIN_ROUTE,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
