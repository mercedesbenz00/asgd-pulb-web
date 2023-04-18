import React from "react";
import { useHistory } from "react-router-dom";
const Logout = () => {
  let history = useHistory();

  return (
    <>
      <div className="container d-flex align-items-center flex-column justify-content-center w-100 vh-100">
        <img src={`${process.env.PUBLIC_URL}/logo-ace.png`} alt="Logo" />
        <h1>ASGD Pulp Recognition</h1>
        <h5>You are successfully logged out from the System.</h5>
        <div className="my-3" />
        <button
          onClick={() => {
            history.push("/login");
          }}
          className="btn btn-primary"
        >
          Click to Login Again
        </button>
      </div>
    </>
  );
};

export default Logout;
