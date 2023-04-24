import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { requestLogin, resetLoginError } from "actions/authAction";
import { HOME_ROUTE } from "modules/home";
import { ALERT_TYPE_ENUM } from "utilities/constants";
import Alert from "components/Alert";
import Loader from "components/Loader";

const LoginWithoutKeyCloak = () => {
  const { isAuthenticated, validating, error } = useSelector((state) => {
    return state?.Auth;
  });

  const dispatch = useDispatch();

  const login = () => {
    dispatch(requestLogin({ userRole: process.env.REACT_APP_LOGIN_AS }));
  };

  if (validating) {
    return <Loader />;
  }

  if (isAuthenticated) {
    return <Redirect to={HOME_ROUTE} />;
  }

  return (
    <>
      {!isAuthenticated && (
        <div className="container d-flex align-items-center flex-column justify-content-center w-100 vh-100">
          <img src={`${process.env.PUBLIC_URL}/logo-ace.png`} alt="Logo" />
          <br />
          <h1>ASGD Pulp Recognition</h1>
          <br />
          <button onClick={login} className="btn btn-primary">
            LOGIN WITH SSO
          </button>
        </div>
      )}

      {!!error && (
        <Alert
          type={ALERT_TYPE_ENUM.ERROR}
          message={error}
          onClose={() => dispatch(resetLoginError())}
        />
      )}
    </>
  );
};

export default LoginWithoutKeyCloak;
