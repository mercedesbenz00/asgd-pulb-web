import { useSelector } from "react-redux";
import { USERS_ROLES_ENUM } from "utilities/constants";
import React, { Suspense } from "react";
import Loader from "components/Loader";

const Home = () => {
  const userRole = useSelector(
    (state) => state.Auth?.userInfo?.role || USERS_ROLES_ENUM.OPERATOR
  );

  const renderDashboard = () => {
    if (userRole === USERS_ROLES_ENUM.SYSTEM_ADMIN) {
      return "System admin";
    }
    if (userRole === USERS_ROLES_ENUM.ADMIN) {
      return "Admin";
    }
    return "Operator";
  };
  return (
    <div>
      <Suspense fallback={<Loader />}>{renderDashboard()}</Suspense>
    </div>
  );
};

export default Home;
