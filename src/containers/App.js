import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect, Switch } from "react-router-dom";
import modules from "../modules";
import RouteWithErrorBoundary from "components/RouteWithErrorBoundary";
import { useHistory } from "react-router-dom";
import { AppContext } from "contexts/AppContext";

export default function App() {
  const history = useHistory();
  const appContext = useContext(AppContext);

  const modulesList = useSelector(
    (state) => state.Auth.userInfo?.modules || []
  );

  const validModule = (name) => {
    if (!name) {
      return true;
    }

    if (modulesList.indexOf("IS_SUPER_ADMIN") !== -1) {
      return true;
    }

    return modulesList.indexOf(name) !== -1;
  };

  useEffect(() => {
    if (!!appContext?.userRole && appContext?.userRole !== undefined) {
      history.push("/");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appContext?.userRole]);

  return (
    <Switch>
      {modules
        .filter((e) => e.enabled)
        .map((module) =>
          module.routeProps
            .filter((route) => {
              const accessRequired = route?.accessRequired
                ? route?.accessRequired()
                : "";
              return validModule(accessRequired);
            })
            .map((route) => {
              return (
                <RouteWithErrorBoundary
                  isPrivate={route.authRequired}
                  key={route.path}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                  useLayout={route.useLayout}
                />
              );
            })
        )}
      <Redirect to="/" />
    </Switch>
  );
}
