// import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect, Switch } from "react-router-dom";
import modules from "../modules";
import RouteWithErrorBoundary from "components/RouteWithErrorBoundary";
import { IS_SUPER_ADMIN } from "utilities/constants";
import { HOME_ROUTE } from "modules/home";
// import store from "store";
// import { HardLoginReset } from "actions/authAction";

export default function App() {
  const modulesList = useSelector(
    (state) => state.Auth.userInfo?.modules || []
  );

  const validModule = (name) => {
    if (!name) {
      return true;
    }

    if (modulesList.indexOf(IS_SUPER_ADMIN) !== -1) {
      return true;
    }

    return modulesList.indexOf(name) !== -1;
  };

  // useEffect(() => {
  //   if (process.env.REACT_APP_BYPASS_KEYCLOAK === "true") {
  //     store.dispatch(HardLoginReset());
  //   }
  // }, []);

  return (
    <Switch>
      {modules
        .filter((e) => e.enabled)
        .map((module) =>
          module.routeProps
            ?.filter((route) => {
              const accessRequired = route?.accessRequired
                ? route?.accessRequired()
                : "";

              return validModule(accessRequired);
            })
            ?.map((route) => {
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
      <Redirect to={HOME_ROUTE} />
    </Switch>
  );
}
