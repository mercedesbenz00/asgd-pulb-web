import { Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import PrivateRoute from "components/PrivateRoute";
import NoRecordFound from "components/NoRecordFound";
import { AppLayout } from "containers/AppLayout";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <AppLayout>
      <div className="mt-5">
        <NoRecordFound
          description={`We're sorry - something gone wrong.
Our team has been notified to fixed this problem.
You may also refresh the page or try again later.`}
        />
      </div>
    </AppLayout>
  );
};

const myErrorHandler = async (error, info) => {
  const currentURL = window.location.href;
  const pathname = window.location.pathname;

  console.error("error : ", error?.message);
  console.log("info : ", info?.componentStack);
  console.log("currentURL :", currentURL);
  console.log("pathname :", pathname);
};

const RouteWithErrorBoundary = (props) => {
  return (
    <ErrorBoundary
      key={props.location?.pathname}
      FallbackComponent={ErrorFallback}
      onError={myErrorHandler}
      onReset={() => {}}
    >
      <>
        {!!props?.isPrivate ? (
          <PrivateRoute {...props} />
        ) : (
          <Route {...props} />
        )}
      </>
    </ErrorBoundary>
  );
};

export default RouteWithErrorBoundary;
