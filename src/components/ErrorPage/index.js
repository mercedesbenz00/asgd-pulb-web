import React from "react";

const ErrorPage = () => {
  return (
    <div class="container bg-light text-dark d-flex vh-100 justify-content-center align-items-center flex-column ">
      <h1>Something Went Wrong</h1>
      <button type="button" class="btn btn-secondary"
        onClick={(e) => {
          e.preventDefault();
          window.location.reload();
        }}
      >
        Reload
      </button>
    </div>
  );
};

export default ErrorPage;
