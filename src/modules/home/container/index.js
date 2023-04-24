import { Suspense, useContext } from "react";
import { Redirect } from "react-router-dom";
import { USERS_ROLES_ENUM, MODULES_ENUM } from "utilities/constants";
import Loader from "components/Loader";
import NoRecordFound from "components/NoRecordFound";
import { MASTER_DATA_ROUTE } from "modules/master-data";
import { OPERATOR_DASHBOARD_ROUTE } from "modules/operator-dashboard";

import { AppContext } from "contexts/AppContext";

const Home = () => {
  // const userRole = useSelector((state) => state.Auth?.userInfo?.role);

  const { userRole, userModules } = useContext(AppContext);

  const renderDashboard = () => {
    if (
      userRole === USERS_ROLES_ENUM.SYSTEM_ADMIN ||
      userRole === USERS_ROLES_ENUM.ADMIN
    ) {
      if (userModules.indexOf(MODULES_ENUM.MANAGE_MASTER_DATA) !== -1) {
        return <Redirect to={MASTER_DATA_ROUTE} />;
      }
      return (
        <div style={{ marginTop: "10rem" }}>
          <NoRecordFound description="Sorry your account not have permission to access master data!" />
        </div>
      );
    }

    if (userRole === USERS_ROLES_ENUM.OPERATOR) {
      if (userModules.indexOf(MODULES_ENUM.OPERATOR_DASHBOARD) !== -1) {
        return <Redirect to={OPERATOR_DASHBOARD_ROUTE} />;
      }
      return (
        <div style={{ marginTop: "10rem" }}>
          <NoRecordFound description="Sorry your account not have permission to access operator dashboard!" />
        </div>
      );
    }

    return (
      <div style={{ marginTop: "10rem" }}>
        <NoRecordFound description="Sorry your account not yet assigned to any Keycloak Groups!" />
      </div>
    );
  };

  return (
    <div>
      <Suspense fallback={<Loader />}>{renderDashboard()}</Suspense>
    </div>
  );
};

export default Home;
