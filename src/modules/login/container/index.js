import { useEffect, useCallback } from "react";
import { requestLogin, resetLoginError } from "actions/authAction";
import Loader from "components/Loader";
import { HOME_ROUTE } from "modules/home";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { ALERT_TYPE_ENUM } from "utilities/constants";
import { useKeycloak } from "@react-keycloak/web";
import { persistor } from "store";
import Alert from "components/Alert";
const Login = ({
  userlogin,
  isAuthenticated,
  isHardReset,
  validating,
  error,
  resetError,
}) => {
  const { keycloak } = useKeycloak();

  const login = useCallback(() => {
    keycloak?.login();
  }, [keycloak]);

  useEffect(() => {
    if (!isHardReset && keycloak?.authenticated) {
      userlogin({ token: keycloak?.token });
    } else {
      persistor.pause();
      persistor.flush().then(() => persistor.purge());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keycloak?.authenticated]);

  if (keycloak?.authenticated && validating) {
    return <Loader />;
  }

  if (keycloak?.authenticated && isAuthenticated) {
    return <Redirect to={HOME_ROUTE} />;
  }

  return (
    <>
      {!isAuthenticated && (
        <div className="container d-flex align-items-center flex-column justify-content-center w-100 vh-100">
          <img src={`${process.env.PUBLIC_URL}/logo-ace.png`} alt="Logo" />
          <h1>ASGD Pulp Recognition</h1>
          <div className="my-3" />
          <button onClick={login} className="btn btn-primary">
            LOGIN WITH SSO
          </button>
        </div>
      )}

      {!!error && (
        <Alert
          type={ALERT_TYPE_ENUM.ERROR}
          message={error}
          onClose={resetError}
        />
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    userlogin: (data) => dispatch(requestLogin(data)),
    resetError: () => dispatch(resetLoginError()),
  };
};

const mapStateToProps = (state) => ({
  isAuthenticated: state?.Auth?.isAuthenticated,
  isHardReset: state?.Auth?.isHardReset,
  validating: state?.Auth?.validating,
  error: state?.Auth?.error,
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
