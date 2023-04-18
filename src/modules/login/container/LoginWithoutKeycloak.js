import { requestLogin } from "actions/authAction";
import Loader from "components/Loader";
import { HOME_ROUTE } from "modules/home";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { ALERT_TYPE_ENUM } from "utilities/constants";
import Alert from "components/Alert";

const LoginWithoutKeyCloak = ({
  userlogin,
  isAuthenticated,
  validating,
  error,
  resetError,
}) => {
  const login = () => {
    userlogin({ userRole: "SYSTEM_ADMIN" });
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
          onClose={resetError}
        />
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    userlogin: (data) => dispatch(requestLogin(data)),
  };
};

const mapStateToProps = (state) => ({
  isAuthenticated: state?.Auth?.isAuthenticated,
  validating: state?.Auth?.validating,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginWithoutKeyCloak);
